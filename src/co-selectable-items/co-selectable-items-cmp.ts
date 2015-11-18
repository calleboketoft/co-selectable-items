import {
  Component,
  NgFor,
  NgStyle,
  FORM_DIRECTIVES,
  Input,
  Control
} from 'angular2/angular2'

// Selectable items component
@Component({
  directives: [NgFor, NgStyle, FORM_DIRECTIVES],
  selector: 'co-selectable-items',
  styles: [`
    .list-group {
      overflow: auto;
    }
    .list-group-item {
      cursor: pointer;
    }
  `],
  template: `
    <div class="row">
      <div class="col-xs-5 text-center">

        <div class="card">
          <div class="card-header">
            <input type="text" class="form-control"
              id="co-selectable-items-selectable-filter"
              placeholder="Filter"
              [ng-form-control]="selectableFilter">
          </div>
          <ul class="list-group list-group-flush text-left"
            [ng-style]="{'height': listHeight}">
            <li class="list-group-item"
              *ng-for="#item of selectableItems"
              [ng-style]="getDisplayStyle(item, 'selectable')"
              (click)="selectItem(item)">
              {{ item.displayName }}
            </li>
          </ul>
        </div>

      </div>

      <div class="col-xs-2 text-center">
        <button type="button" class="btn btn-primary"
          id="co-selectable-items-select-all"
          (click)="selectAllFiltered()">
          &gt;&gt;
        </button>
        <br><br>
        <button type="button" class="btn btn-primary"
          id="co-selectable-items-deselect-all"
          (click)="deselectAllFiltered()">
          &lt;&lt;
        </button>
      </div>

      <div class="col-xs-5 text-center">

        <div class="card">
          <div class="card-header">
            <input type="text" class="form-control"
              id="co-selectable-items-selected-filter"
              placeholder="Filter"
              [ng-form-control]="selectedFilter">
          </div>
            <ul class="list-group list-group-flush text-left"
            [ng-style]="{'height':listHeight}">
            <li class="list-group-item"
              *ng-for="#item of selectableItems"
              [ng-style]="getDisplayStyle(item, 'selected')"
              (click)="deselectItem(item)">
              {{ item.displayName }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  `,
})
export class CoSelectableItemsCmp {
  @Input() selectableItems
  @Input() selectedItems
  @Input() listHeight
  selectableFilter = new Control('')
  selectedFilter = new Control('')

  onInit () {
    this.initValues()
    this.subscribeToChanges()
  }

  subscribeToChanges () {
    // subscribe to filter updates
    this.selectableFilter.valueChanges
      .subscribe((value) => {
        this.filterSelectable(this.selectableItems, value)
      })

    this.selectedFilter.valueChanges
      .subscribe((value) => {
        this.filterSelected(this.selectableItems, value)
      })
  }

  filterSelectable (items, value) {
    items.forEach((item) => {
      item.filteredOutSelectable =  !this.filterItem(item.displayName, value)
    })
  }

  filterSelected (items, value) {
    items.forEach((item) => {
      item.filteredOutSelected = !this.filterItem(item.displayName, value)
    })
  }

  initValues () {
    // Mark initially selected items with item.selected = true and v.v.
    let selectedItemsStrs = this.selectedItems.map((selectedItem) => {
      // Stringify for deep comparison
      return JSON.stringify(selectedItem)
    })
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

  filterItem (itemStr, filterStr) {
    let itemStrLc = itemStr.toLowerCase()
    let filterStrLc = filterStr.toLowerCase()
    return itemStrLc.indexOf(filterStrLc) !== -1
  }

  shouldHide (item, listType) {
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

  getDisplayStyle (item, listType) {
    let displayStyle = {}
    if (this.shouldHide(item, listType)) {
      displayStyle = {'display': 'none'}
    }
    return displayStyle
  }

  selectItem (itemToSelect) {
    itemToSelect.selected = true
    this.selectedItems.push(itemToSelect.refValue)
  }

  selectAllFiltered () {
    this.selectableItems.forEach((item) => {
      if (!item.selected && !item.filteredOutSelectable) {
        this.selectItem(item)
      }
    })
  }

  deselectItem (itemToUnselect) {
    itemToUnselect.selected = false
    let selectedLength = this.selectedItems.length
    let i
    for (i = 0; i < selectedLength; i++) {
      let isEqual = deepEqual(itemToUnselect.refValue, this.selectedItems[i])
      if (isEqual) {
        this.selectedItems.splice(i, 1)
        return
      }
    }
  }

  deselectAllFiltered () {
    this.selectableItems.forEach((item) => {
      if (item.selected && !item.filteredOutSelected) {
        this.deselectItem(item)
      }
    })
  }
}

// http://stackoverflow.com/questions/25456013/javascript-deepequal-comparison
function deepEqual(x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop]))
          return false
      }
      else
        return false
    }

    return true
  }
  else if (x !== y)
    return false
  else
    return true
}