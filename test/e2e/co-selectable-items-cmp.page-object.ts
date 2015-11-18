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

  selectItem() {
    // TODO
  }

  deselectItem() {
    // TODO
  }

  selectAllItems(filterString: string) {
    this.selectableFilter.clear()
    this.selectableFilter.sendKeys(filterString)
    this.selectAllButton.click()
  }

  deselectAllItems(filterString: string) {
    this.selectedFilter.clear()
    this.selectableFilter.sendKeys(filterString)
    this.deselectAllButton.click()
  }
}
