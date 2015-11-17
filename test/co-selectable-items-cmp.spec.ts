import 'reflect-metadata'
import 'zone.js'
import fixtures from './fixtures'
import { CoSelectableItemsCmp } from '../src/co-selectable-items/co-selectable-items-cmp'

describe('CoSelectableItemsCmp', () => {
  it('Should be defined', () => {
    expect(CoSelectableItemsCmp).toBeDefined()
  })

  it('Should initialise values as selected and vv', () => {
    let cmp = initCmp()
    expect(fixtures().initDone).toEqual(cmp.selectableItems)
  })

  it('Should be able to filter on exact partial match', () => {
    let cmp = new CoSelectableItemsCmp()
    let matched = cmp.filterItem('SomeString', 'Some')
    expect(matched).toBe(true)
  })

  it('Should be able to filter on case insensitive match', () => {
    let cmp = new CoSelectableItemsCmp()
    let matched = cmp.filterItem('SomeString', 'so')
    expect(matched).toBe(true)
  })

  it('Should not hide selectable when filtering selected', () => {
    let cmp = new CoSelectableItemsCmp()
    let selectableList = fixtures().filterIsolatedBefore
    cmp.filterSelected(selectableList, 'Random')
    let selectedExpected = fixtures().filterIsolatedSelectedAfter
    expect(selectableList).toEqual(selectedExpected)
  })

  it('Should not hide selected when filtering selectable', () => {
    let cmp = new CoSelectableItemsCmp()
    let selectableList = fixtures().filterIsolatedBefore
    cmp.filterSelectable(selectableList, 'Random')
    expect(selectableList).toEqual(fixtures().filterIsolatedSelectableAfter)
  })

  it('Should be able to select item', () => {
    let cmp = initCmp()
    cmp.selectItem(cmp.selectableItems[1])
    expect(cmp.selectedItems).toEqual(fixtures().selectedBearSelected)
    expect(cmp.selectableItems).toEqual(fixtures().selectedBearSelectable)
  })

  it('Should be able to deselect item', () => {
    let cmp = initCmp()
    cmp.deselectItem(cmp.selectableItems[2])
    expect(cmp.selectedItems).toEqual(fixtures().deselectedCactusSelected)
    expect(cmp.selectableItems).toEqual(fixtures().deselectedCactusSelectable)
  })

  // it('Should be able to select all filtered', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should be able to deselect all filtered', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should hide selected items from the selectable list', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should hide filtered items from the selectable list', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should hide unselected items from the selected list', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should hide filtered items from the selected list', () => {
  //   expect(true).toBe(false)
  // })
})

// Instantiate component and initialize values
function initCmp () {
  let cmp = new CoSelectableItemsCmp()
  cmp.selectableItems = fixtures().initSelectable
  cmp.selectedItems = fixtures().initSelected
  cmp.initValues()
  return cmp
}