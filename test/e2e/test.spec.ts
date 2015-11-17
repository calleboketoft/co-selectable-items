declare var describe:any
declare var it:any
declare var expect:any
declare var beforeEach:any
declare var browser:any

import { SelectablePageObject } from './selectable-page-object'

describe('dummy describe', () => {

  beforeEach(() => {
    browser.get('/')
  })

  let selectablePageObject: SelectablePageObject = new SelectablePageObject()

  it('selectItemsShouldWork', () => {
    selectablePageObject.selectItems('s')
    expect(true).toEqual(true)
  })
})