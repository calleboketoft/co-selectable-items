import {
  Component,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  Input,
  Control
} from 'angular2/angular2'

// Selectable items component
@Component({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  selector: 'co-selectable-items',
  templateUrl: 'app/components/co-selectable-items/co-selectable-items-cmp.html',
  styleUrls: ['app/components/co-selectable-items/co-selectable-items-cmp.css']
})
export class CoSelectableItemsCmp {
  @Input() selectableItems
  @Input() selectedItems
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
      .toRx()
      .subscribe((value) => {
        console.log(value)
        this.selectableItems.forEach((item) => {
          item.filteredOutSelectable =  !this.filterItem(item, value)
        })
      })

    this.selectedFilter.valueChanges
      .toRx()
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
