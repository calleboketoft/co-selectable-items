"use strict";
var co_selectable_items_cmp_page_object_1 = require('./co-selectable-items-cmp.page-object');
describe('SelectableItems', function () {
    beforeEach(function () {
        browser.get('/');
    });
    var pageObject = new co_selectable_items_cmp_page_object_1.CoSelectableItemsPageObject();
    it('should display items properly after initialisation', function () {
        var expectedSelectable = ['Bear', 'Fire', 'Calle'];
        expect(pageObject.getSelectableItems().getText()).toEqual(expectedSelectable);
        var expectedSelected = ['Strawberry', 'Cactus'];
        expect(pageObject.getSelectedItems().getText()).toEqual(expectedSelected);
    });
    it('should be able to select a specific item', function () {
        pageObject.getItemsByText(pageObject.getSelectableItems(), 'Bear').click();
        expect(pageObject.getSelectableItems().getText()).toEqual(['Fire', 'Calle']);
    });
    it('should be able to deselect a specific item', function () {
        pageObject.getItemsByText(pageObject.getSelectedItems(), 'Strawberry').click();
        expect(pageObject.getSelectedItems().getText()).toEqual(['Cactus']);
    });
    var expectedAll = ['Strawberry', 'Bear', 'Cactus', 'Fire', 'Calle'];
    it('should be able to select all without filter', function () {
        pageObject.selectAllItems();
        expect(pageObject.getSelectableItems().getText()).toEqual([]);
        expect(pageObject.getSelectedItems().getText()).toEqual(expectedAll);
    });
    it('should be able to deselect all without filter', function () {
        pageObject.deselectAllItems();
        expect(pageObject.getSelectableItems().getText()).toEqual(expectedAll);
        expect(pageObject.getSelectedItems().getText()).toEqual([]);
    });
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
});
//# sourceMappingURL=co-selectable-items-cmp.spec.js.map