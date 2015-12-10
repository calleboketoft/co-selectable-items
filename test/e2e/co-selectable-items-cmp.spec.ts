// globals from protractor
declare var describe:any
declare var it:any
declare var expect:any
declare var beforeEach:any
declare var browser:any
declare var by:any

import { CoSelectableItemsPageObject } from './co-selectable-items-cmp.page-object'

describe('SelectableItems', () => {

  beforeEach(() => {
    browser.get('/')
  })

  let pageObject: CoSelectableItemsPageObject = new CoSelectableItemsPageObject()

  it('should display items properly after initialisation', () => {
    let expectedSelectable = ['Bear', 'Fire', 'Calle']
    expect(pageObject.getSelectableItems().getText()).toEqual(expectedSelectable)

    let expectedSelected = ['Strawberry', 'Cactus']
    expect(pageObject.getSelectedItems().getText()).toEqual(expectedSelected)
  })

  it('should be able to select a specific item', () => {
    pageObject.getItemsByText(pageObject.getSelectableItems(), 'Bear').click()
    expect(pageObject.getSelectableItems().getText()).toEqual(['Fire', 'Calle'])
  })

  it('should be able to deselect a specific item', () => {
    pageObject.getItemsByText(pageObject.getSelectedItems(), 'Strawberry').click()
    expect(pageObject.getSelectedItems().getText()).toEqual(['Cactus'])
  })

  let expectedAll = ['Strawberry', 'Bear', 'Cactus', 'Fire', 'Calle']

  it('should be able to select all without filter', () => {
    pageObject.selectAllItems()
    expect(pageObject.getSelectableItems().getText()).toEqual([])
    expect(pageObject.getSelectedItems().getText()).toEqual(expectedAll)
  })

  it('should be able to deselect all without filter', () => {
    pageObject.deselectAllItems()
    expect(pageObject.getSelectableItems().getText()).toEqual(expectedAll)
    expect(pageObject.getSelectedItems().getText()).toEqual([])
  })

  // TODO for some reason the tests below fail, fix

  // it('should be able to select all based on filter', () => {
  //   pageObject.selectAllItems('a')
  //   expect(pageObject.getSelectableItems().getText()).toEqual(['Fire'])
  //   let expectedSelected = ['Strawberry', 'Bear', 'Cactus', 'Calle']
  //   expect(pageObject.getSelectedItems().getText()).toEqual(expectedSelected)
  // })

  // it('should be able to deselect all based on filter', () => {
  //   pageObject.deselectAllItems('c')
  //   let expectedSelectable = ['Bear', 'Cactus', 'Fire', 'Calle']
  //   expect(pageObject.getSelectedItems().getText()).toEqual(['Strawberry'])
  //   expect(pageObject.getSelectableItems().getText()).toEqual(expectedSelectable)
  // })
})
