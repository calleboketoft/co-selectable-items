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
    let selectableListVisibleItems = pageObject.selectableList.all(by.css('li.co-visible')).getText()
    expect(selectableListVisibleItems).toEqual(['Bear', 'Fire', 'Calle'])

    let selectedListVisibleItems = pageObject.selectedList.all(by.css('li.co-visible')).getText()
    expect(selectedListVisibleItems).toEqual(['Strawberry', 'Cactus'])
  })

  // it('should be able to select a specific item', () => {
  //   expect(true).toEqual(false)
  // })

  // it('should be able to deselect a specific item', () => {
  //   expect(true).toEqual(false)
  // })

  // it('should be able to select all based on filter', () => {
  //   pageObject.selectAllItems('s')
  //   expect(true).toEqual(true)
  // })

  // it('should be able to deselect all based on filter', () => {
  //   expect(true).toEqual(false)
  // })
})
