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
              placeholder="Filter"
              [ng-form-control]="selectableFilter">
          </div>
          <ul class="list-group list-group-flush text-left"
            [ng-style]="{'height': listHeight}">
            <li class="list-group-item"
              *ng-for="#item of selectableItems"
              [ng-style]="shouldHide(item, 'selectable')"
              (click)="selectItem(item)">
              {{ item.displayName }}
            </li>
          </ul>
        </div>

      </div>

      <div class="col-xs-2 text-center">
        <button type="button" class="btn btn-primary"
          (click)="selectAllFiltered()">
          &gt;&gt;
        </button>
        <br><br>
        <button type="button" class="btn btn-primary"
          (click)="unselectAllFiltered()">
          &lt;&lt;
        </button>
      </div>

      <div class="col-xs-5 text-center">

        <div class="card">
          <div class="card-header">
            <input type="text" class="form-control"
              placeholder="Filter"
              [ng-form-control]="selectedFilter">
          </div>
            <ul class="list-group list-group-flush text-left"
            [ng-style]="{'height':listHeight}">
            <li class="list-group-item"
              *ng-for="#item of selectableItems; #i = index"
              [ng-style]="shouldHide(item, 'selected')"
              (click)="unselectItem(item)">
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
    // Mark initially selected items with item.selected = true and v.v.
    let selectedItemsStrs = this.selectedItems.map((selectedItem) => {
      // Stringify for deep comparison
      return JSON.stringify(selectedItem)
    })
    let selectableLength = this.selectableItems.length
    let i
    for (i = 0; i < selectableLength; i++) {
      let selectableItem = this.selectableItems[i]
      selectableItem.filteredOutSelected = false
      selectableItem.filteredOutSelectable = false
      let refValueStr = JSON.stringify(selectableItem.refValue)
      selectableItem.selected = !!~selectedItemsStrs.indexOf(refValueStr)
    }

    // subscribe to filter updates
    this.selectableFilter.valueChanges
      .subscribe((value) => {
        this.selectableItems.forEach((item) => {
          item.filteredOutSelectable =  !this.filterItem(item, value)
        })
      })

    this.selectedFilter.valueChanges
      .subscribe((value) => {
        this.selectableItems.forEach((item) => {
          item.filteredOutSelected = !this.filterItem(item, value)
        })
      })
  }

  filterItem (item, filterStr) {
    // TODO this filter could be greatly improved
    let displayNameLc = item.displayName.toLowerCase()
    let filterStrLc = filterStr.toLowerCase()
    return displayNameLc.indexOf(filterStrLc) !== -1
  }

  // TODO come up with more effective way to do this
  shouldHide (item, listType) {
    let showStyle = {}
    let selectableAndSelected = listType === 'selectable' && item.selected
    let selectableAndFilteredOut = listType === 'selectable' && item.filteredOutSelectable
    let selectedAndNotSelected = listType === 'selected' && !item.selected
    let selectedAndFilteredOut = listType === 'selected' && item.filteredOutSelected
    if (selectableAndSelected || selectedAndNotSelected || selectableAndFilteredOut || selectedAndFilteredOut) {
      showStyle = {'display': 'none'}
    }
    return showStyle
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

  unselectItem (itemToUnselect) {
    itemToUnselect.selected = false
    let unselectRefValueStr = JSON.stringify(itemToUnselect.refValue)
    let selectedLength = this.selectedItems.length
    let i
    for (i = 0; i < selectedLength; i++) {
      let selectedItemStr = JSON.stringify(this.selectedItems[i])
      if (unselectRefValueStr === selectedItemStr) {
        this.selectedItems.splice(i, 1)
        return
      }
    }
  }

  unselectAllFiltered () {
    this.selectableItems.forEach((item) => {
      if (item.selected && !item.filteredOutSelected) {
        this.unselectItem(item)
      }
    })
  }

  filterSelectable ($event) {
    console.log($event.target.value)
  }
}
