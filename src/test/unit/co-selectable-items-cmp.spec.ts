import {it, describe, expect} from '@angular/core/testing'
import fixtures from './fixtures'
import { CoSelectableItemsCmp } from '../../co-selectable-items/co-selectable-items-cmp'

describe('CoSelectableItemsCmp', () => {
  it('Should be defined', () => {
    expect(CoSelectableItemsCmp).toBeDefined()
  })

  it('Should initialise values correctly', () => {
    let cmp = initCmp()
    expect(fixtures().initDone).toEqual(cmp.selectableItems)
  })

  it('Should initialise values correctly even if object properties are ordered differently', () => {
    let cmp = initCmp(null, fixtures().initSelectedDifferentPropOrder)
    expect(fixtures().initDone).toEqual(cmp.selectableItems)
  })

  it('Should be able to filter on exact partial match', () => {
    let cmp = new CoSelectableItemsCmp()
    let matched = cmp.filterItem('SomeString', 'Some')
    expect(matched).toBe(true)
  })

  it('Should be able to filter on case insensitive partial match', () => {
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

  it('Should deselect item even if object properties are ordered differently', () => {
    let cmp = initCmp(null, fixtures().initSelectedDifferentPropOrder)
    cmp.deselectItem(cmp.selectableItems[2])
    expect(cmp.selectedItems).toEqual(fixtures().deselectedCactusSelected)
    expect(cmp.selectableItems).toEqual(fixtures().deselectedCactusSelectable)
  })

  it('Should be able to select all filtered in selectable', () => {
    let cmp = initCmp()
    cmp.filterSelectable(cmp.selectableItems, 'a')
    cmp.selectAllFiltered()
    expect(cmp.selectableItems).toEqual(fixtures().selectFilteredSelectable)
    expect(cmp.selectedItems).toEqual(fixtures().selectFilteredSelected)
  })

  it('Should be able to deselect all filtered in selected', () => {
    let cmp = initCmp()
    cmp.filterSelected(cmp.selectableItems, 'ac')
    cmp.deselectAllFiltered()
    expect(cmp.selectableItems).toEqual(fixtures().deselectFilteredSelectable)
    expect(cmp.selectedItems).toEqual(fixtures().deselectFilteredSelected)
  })

  // Rules for hiding items

  it('Should hide selected items from the selectable list', () => {
    let cmp = initCmp()
    expect(cmp.shouldHide(fixtures().itemSelectedNoFilter, 'selectable')).toBe(true)
    expect(cmp.shouldHide(fixtures().itemSelectedFilteredOutSelected, 'selectable')).toBe(true)
    expect(cmp.shouldHide(fixtures().itemSelectedFilteredOutSelectable, 'selectable')).toBe(true)
    expect(cmp.shouldHide(fixtures().itemSelectedFilteredOutBoth, 'selectable')).toBe(true)
  })

  it('Should hide not-selected items from the selected list', () => {
    let cmp = initCmp()
    expect(cmp.shouldHide(fixtures().itemNotSelectedNoFilter, 'selected')).toBe(true)
    expect(cmp.shouldHide(fixtures().itemNotSelectedFilteredOutSelected, 'selected')).toBe(true)
    expect(cmp.shouldHide(fixtures().itemNotSelectedFilteredOutSelectable, 'selected')).toBe(true)
    expect(cmp.shouldHide(fixtures().itemNotSelectedFilteredOutBoth, 'selected')).toBe(true)
  })

  it('Should hide filtered out selectable items from the selectable list', () => {
    let cmp = initCmp()
    expect(cmp.shouldHide(fixtures().itemNotSelectedFilteredOutSelectable, 'selectable')).toBe(true)
    expect(cmp.shouldHide(fixtures().itemNotSelectedFilteredOutBoth, 'selectable')).toBe(true)
  })

  it('Should hide filtered out selected items from the selected list', () => {
    let cmp = initCmp()
    expect(cmp.shouldHide(fixtures().itemSelectedFilteredOutSelected, 'selected')).toBe(true)
    expect(cmp.shouldHide(fixtures().itemSelectedFilteredOutBoth, 'selected')).toBe(true)
  })

  it('Should not hide non-filtered non-selected items from the selectable list', () => {
    let cmp = initCmp()
    expect(cmp.shouldHide(fixtures().itemNotSelectedNoFilter, 'selectable')).toBe(false)
    expect(cmp.shouldHide(fixtures().itemNotSelectedFilteredOutSelected, 'selectable')).toBe(false)
  })

  it('Should not hide non-filtered selected items from the selected list', () => {
    let cmp = initCmp()
    expect(cmp.shouldHide(fixtures().itemSelectedNoFilter, 'selected')).toBe(false)
    expect(cmp.shouldHide(fixtures().itemSelectedFilteredOutSelectable, 'selected')).toBe(false)
  })
})

// Instantiate component and initialize values
function initCmp (selectable?, selected?) {
  let cmp = new CoSelectableItemsCmp()
  cmp.selectableItems = selectable || fixtures().initSelectable
  cmp.selectedItems = selected || fixtures().initSelected
  cmp.initValues()
  return cmp
}