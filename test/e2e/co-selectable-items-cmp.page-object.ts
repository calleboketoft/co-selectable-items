// globals from protractor
declare var element:any
declare var by:any

export class CoSelectableItemsPageObject {

  public selectableFilter = element(by.id('co-selectable-items-selectable-filter'));
  public selectedFilter = element(by.id('co-selectable-items-selected-filter'));
  public selectAllButton = element(by.id('co-selectable-items-select-all'));
  public deselectAllButton = element(by.id('co-selectable-items-deselect-all'));
  public selectableList = element(by.id('co-selectable-items-selectable-list'));
  public selectedList = element(by.id('co-selectable-items-selected-list'));

  getSelectableItems() {
    return this.selectableList.all(by.css('li.co-visible'))
  }

  getSelectedItems() {
    return this.selectedList.all(by.css('li.co-visible'))
  }

  // TODO this way of selecting items totally rely on the mocks
  // to be in a specific order. Will break too easily...
  selectItemByIndex(index: number) {
    return this.getSelectableItems().get(index).click()
  }

  deselectItemByIndex(index: number) {
    return this.getSelectedItems().get(index).click()
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
