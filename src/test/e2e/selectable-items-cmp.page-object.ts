// globals from protractor
declare var element:any
declare var by:any

const VISIBLE_CLASS = 'co-visible'

export class SelectableItemsPageObject {

  public selectableFilter = element(by.id('co-selectable-items-selectable-filter'));
  public selectedFilter = element(by.id('co-selectable-items-selected-filter'));
  public selectAllButton = element(by.id('co-selectable-items-select-all'));
  public deselectAllButton = element(by.id('co-selectable-items-deselect-all'));
  public selectableList = element(by.id('co-selectable-items-selectable-list'));
  public selectedList = element(by.id('co-selectable-items-selected-list'));

  getSelectableItems() {
    return this.selectableList.all(by.css('li.' + VISIBLE_CLASS))
  }

  getSelectedItems() {
    return this.selectedList.all(by.css('li.' + VISIBLE_CLASS))
  }

  // http://stackoverflow.com/questions/27910331/using-protractor-with-loops
  // return items that matches the filter
  getItemsByText(items, name: string) {
    return items.filter((elem) => {
      return elem.getText().then((text) => {
        return text === name
      })
    })
  }

  selectAllItems(filterString: string = '') {
    this.selectableFilter.clear()
    this.selectableFilter.sendKeys(filterString)
    this.selectAllButton.click()
    this.selectableFilter.clear()
  }

  deselectAllItems(filterString: string = '') {
    this.selectedFilter.clear()
    this.selectedFilter.sendKeys(filterString)
    this.deselectAllButton.click()
    this.selectedFilter.clear()
  }
}
