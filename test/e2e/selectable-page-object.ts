declare var element:any
declare var by:any
declare var filters:any

export class SelectablePageObject {
  public selectableFilter = element(by.id('co-selectable-items-selectable-filter'));
  public selectedFilter = element(by.id('co-selectable-items-selected-filter'));
  public selectAllButton = element(by.id('co-selectable-items-select-all'));
  public deselectAllButton = element(by.id('co-selectable-items-deselect-all'));

  selectItems(filterString: string) {
    this.selectableFilter.clear()
    this.selectableFilter.sendKeys(filterString)
    this.selectAllButton.click()
  }

  deselectItems(filterString: string) {
    this.selectedFilter.clear()
    this.selectableFilter.sendKeys(filterString)
    this.deselectAllButton.click()
  }
}
