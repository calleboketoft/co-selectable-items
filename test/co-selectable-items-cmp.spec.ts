import 'reflect-metadata'
import 'zone.js'
import mocks from './mocks'
import { CoSelectableItemsCmp } from '../src/co-selectable-items/co-selectable-items-cmp'

describe('CoSelectableItemsCmp', () => {
  it('Should be defined', () => {
    expect(CoSelectableItemsCmp).toBeDefined()
  })

  it('Should initialise values as selected and vv', () => {
    let cmp = new CoSelectableItemsCmp()
    cmp.selectableItems = mocks.initSelectable
    cmp.selectedItems = mocks.initSelected
    cmp.initValues()

    expect(mocks.initDone).toEqual(cmp.selectableItems)
  })

  // it('Should be able to filter by displayName on exact match', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should be able to filter by displayName case insensitive', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should not filter selectable when filtering selected', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should not filter selected when filtering selectable', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should be able to select item', () => {
  //   expect(true).toBe(false)
  // })

  // it('Should be able to deselect item', () => {
  //   expect(true).toBe(false)
  // })

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