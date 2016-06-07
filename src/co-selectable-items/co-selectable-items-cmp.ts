import {
  Component,
  Input,
  OnInit,
  OnChanges
} from '@angular/core'

import {
  NgFor,
  NgClass,
  NgStyle,
  FORM_DIRECTIVES,
  Control
} from '@angular/common'

const VISIBLE_CLASS = 'co-visible'
const INVISIBLE_CLASS = 'co-invisible'

// Selectable items component
@Component({
  directives: [NgFor, NgClass, NgStyle, FORM_DIRECTIVES],
  selector: 'co-selectable-items',
  styles: [`
    .list-group {
      overflow: auto;
    }
    .list-group-item {
      cursor: pointer;
    }
    .co-invisible {
      display: none;
    }
    .text-center {
      text-align: center;
    }
  `],
  template: `
    <div class='row' *ngIf='selectableHeader || selectedHeader'>
      <div class='col-xs-5'>
        <h4>{{selectableHeader}}</h4>
      </div>
      <div class='col-xs-2'>
      </div>
      <div class='col-xs-5'>
        <h4>{{selectedHeader}}</h4>
      </div>
    </div>

    <div class='row'>

      <!-- SELECTABLE ITEMS -->
      <div class='col-xs-5'>
        <div class='card'>
          <div class='card-header'>
            <input type='text' class='form-control'
              id='co-selectable-items-selectable-filter'
              placeholder='Filter'
              [ngFormControl]='selectableFilter'>
          </div>
          <ul class='list-group list-group-flush text-left'
            id='co-selectable-items-selectable-list'
            [ngStyle]='{"height": listHeight}'>
            <li class='list-group-item'
              *ngFor='let item of selectableItems'
              [ngClass]='getDisplayClass(item, "selectable")'
              (click)='selectItem(item)'>
              {{item.displayName}}
            </li>
          </ul>
        </div>
      </div>

      <!-- BATCH BUTTONS -->
      <div class='col-xs-2 text-center'>
        <button type='button' class='btn btn-primary'
          id='co-selectable-items-select-all'
          (click)='selectAllFiltered()'>
          &gt;&gt;
        </button>
        <br><br>
        <button type='button' class='btn btn-primary'
          id='co-selectable-items-deselect-all'
          (click)='deselectAllFiltered()'>
          &lt;&lt;
        </button>
      </div>

      <!-- SELECTED ITEMS -->
      <div class='col-xs-5'>
        <div class='card'>
          <div class='card-header'>
            <input type='text' class='form-control'
              id='co-selectable-items-selected-filter'
              placeholder='Filter'
              [ngFormControl]='selectedFilter'>
          </div>
            <ul class='list-group list-group-flush text-left'
              id='co-selectable-items-selected-list'
              [ngStyle]='{"height":listHeight}'>
            <li class='list-group-item'
              *ngFor='let item of selectableItems'
              [ngClass]='getDisplayClass(item, "selected")'
              (click)='deselectItem(item)'>
              {{item.displayName}}
            </li>
          </ul>
        </div>
      </div>

    </div>
  `,
})
export class CoSelectableItemsCmp implements OnInit, OnChanges {
  @Input() public selectableItems: Array<any>;
  @Input() public selectedItems: Array<any>;
  @Input() public listHeight;
  @Input() public selectableHeader: string = '';
  @Input() public selectedHeader: string = '';
  public selectableFilter = new Control('');
  public selectedFilter = new Control('');

  public ngOnInit () {
    this.subscribeToFilterChanges()
  }

  ngOnChanges (changes) {
    this.initValues()
  }

  // subscribe to filter updates
  public subscribeToFilterChanges () {
    this.selectableFilter.valueChanges
      .subscribe((value) => {
        this.filterSelectable(this.selectableItems, value)
      })

    this.selectedFilter.valueChanges
      .subscribe((value) => {
        this.filterSelected(this.selectableItems, value)
      })
  }

  public filterSelectable (items, value) {
    items.forEach((item) => {
      item.filteredOutSelectable =  !this.filterItem(item.displayName, value)
    })
  }

  public filterSelected (items, value) {
    items.forEach((item) => {
      item.filteredOutSelected = !this.filterItem(item.displayName, value)
    })
  }

  public initValues () {
    let selectableLength = this.selectableItems.length
    let i
    for (i = 0; i < selectableLength; i++) {
      var selectableItem = this.selectableItems[i]
      selectableItem.filteredOutSelected = false
      selectableItem.filteredOutSelectable = false
      selectableItem.selected = this.selectedItems.some((selectedItem) => {
        return deepEqual(selectedItem, selectableItem.refValue)
      })
    }
  }

  public filterItem (itemStr, filterStr) {
    let itemStrLc = itemStr.toLowerCase()
    let filterStrLc = filterStr.toLowerCase()
    return itemStrLc.indexOf(filterStrLc) !== -1
  }

  public shouldHide (item, listType) {
    let hide = false
    let selectableAndSelected = listType === 'selectable' && item.selected
    let selectableAndFilteredOut = listType === 'selectable' && item.filteredOutSelectable
    let selectedAndNotSelected = listType === 'selected' && !item.selected
    let selectedAndFilteredOut = listType === 'selected' && item.filteredOutSelected
    if (selectableAndSelected || selectedAndNotSelected || selectableAndFilteredOut || selectedAndFilteredOut) {
      hide = true
    }
    return hide
  }

  public getDisplayClass (item, listType) {
    let displayClass = VISIBLE_CLASS
    if (this.shouldHide(item, listType)) {
      displayClass = INVISIBLE_CLASS
    }
    return displayClass
  }

  public selectItem (itemToSelect) {
    itemToSelect.selected = true
    this.selectedItems.push(itemToSelect.refValue)
  }

  public selectAllFiltered () {
    this.selectableItems.forEach((item) => {
      if (!item.selected && !item.filteredOutSelectable) {
        this.selectItem(item)
      }
    })
  }

  public deselectItem (itemToUnselect) {
    itemToUnselect.selected = false
    this.selectedItems.forEach((selectedItem, index) => {
      let isEqual = deepEqual(itemToUnselect.refValue, selectedItem)
      if (isEqual) {
        this.selectedItems.splice(index, 1)
        return
      }
    })
  }

  public deselectAllFiltered () {
    this.selectableItems.forEach((item) => {
      if (item.selected && !item.filteredOutSelected) {
        this.deselectItem(item)
      }
    })
  }
}

// http://stackoverflow.com/questions/25456013/javascript-deepequal-comparison
function deepEqual (x, y) {
  if ((typeof x == 'object' && x != null) && (typeof y == 'object' && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length) {
      return false
    }
    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) {
          return false
        }
      } else {
        return false
      }
    }
    return true
  } else if (x !== y) {
    return false
  } else {
    return true
  }
}
