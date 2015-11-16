import 'reflect-metadata'
import 'zone.js'
import { AppCmp } from '../src/example/app-cmp'
import * as mocks from './mocks'
import { CoSelectableItemsCmp } from '../src/co-selectable-items/co-selectable-items-cmp'

describe('CoSelectableItemsCmp', () => {
  it('Should be defined', () => {
    expect(CoSelectableItemsCmp).toBeDefined()
  })

  it('Should initialise values as selected and vv', () => {
    let appCmp = new AppCmp()
    let coSelectableItemsCmp = new CoSelectableItemsCmp()
    coSelectableItemsCmp.selectableItems = appCmp.selectableItems
    coSelectableItemsCmp.selectedItems = appCmp.selectedItems
    coSelectableItemsCmp.initValues()

    expect(mocks.initialisedValues).toEqual(coSelectableItemsCmp.selectableItems)
  })

  // it('Should be able to filter by displayName', () => {
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