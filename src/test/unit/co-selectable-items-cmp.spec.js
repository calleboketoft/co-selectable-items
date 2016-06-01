"use strict";
var testing_1 = require('@angular/core/testing');
var fixtures_1 = require('./fixtures');
var co_selectable_items_cmp_1 = require('../../co-selectable-items/co-selectable-items-cmp');
testing_1.describe('CoSelectableItemsCmp', function () {
    testing_1.it('Should be defined', function () {
        testing_1.expect(co_selectable_items_cmp_1.CoSelectableItemsCmp).toBeDefined();
    });
    testing_1.it('Should initialise values correctly', function () {
        var cmp = initCmp();
        testing_1.expect(fixtures_1.default().initDone).toEqual(cmp.selectableItems);
    });
    testing_1.it('Should initialise values correctly even if object properties are ordered differently', function () {
        var cmp = initCmp(null, fixtures_1.default().initSelectedDifferentPropOrder);
        testing_1.expect(fixtures_1.default().initDone).toEqual(cmp.selectableItems);
    });
    testing_1.it('Should be able to filter on exact partial match', function () {
        var cmp = new co_selectable_items_cmp_1.CoSelectableItemsCmp();
        var matched = cmp.filterItem('SomeString', 'Some');
        testing_1.expect(matched).toBe(true);
    });
    testing_1.it('Should be able to filter on case insensitive partial match', function () {
        var cmp = new co_selectable_items_cmp_1.CoSelectableItemsCmp();
        var matched = cmp.filterItem('SomeString', 'so');
        testing_1.expect(matched).toBe(true);
    });
    testing_1.it('Should not hide selectable when filtering selected', function () {
        var cmp = new co_selectable_items_cmp_1.CoSelectableItemsCmp();
        var selectableList = fixtures_1.default().filterIsolatedBefore;
        cmp.filterSelected(selectableList, 'Random');
        var selectedExpected = fixtures_1.default().filterIsolatedSelectedAfter;
        testing_1.expect(selectableList).toEqual(selectedExpected);
    });
    testing_1.it('Should not hide selected when filtering selectable', function () {
        var cmp = new co_selectable_items_cmp_1.CoSelectableItemsCmp();
        var selectableList = fixtures_1.default().filterIsolatedBefore;
        cmp.filterSelectable(selectableList, 'Random');
        testing_1.expect(selectableList).toEqual(fixtures_1.default().filterIsolatedSelectableAfter);
    });
    testing_1.it('Should be able to select item', function () {
        var cmp = initCmp();
        cmp.selectItem(cmp.selectableItems[1]);
        testing_1.expect(cmp.selectedItems).toEqual(fixtures_1.default().selectedBearSelected);
        testing_1.expect(cmp.selectableItems).toEqual(fixtures_1.default().selectedBearSelectable);
    });
    testing_1.it('Should be able to deselect item', function () {
        var cmp = initCmp();
        cmp.deselectItem(cmp.selectableItems[2]);
        testing_1.expect(cmp.selectedItems).toEqual(fixtures_1.default().deselectedCactusSelected);
        testing_1.expect(cmp.selectableItems).toEqual(fixtures_1.default().deselectedCactusSelectable);
    });
    testing_1.it('Should deselect item even if object properties are ordered differently', function () {
        var cmp = initCmp(null, fixtures_1.default().initSelectedDifferentPropOrder);
        cmp.deselectItem(cmp.selectableItems[2]);
        testing_1.expect(cmp.selectedItems).toEqual(fixtures_1.default().deselectedCactusSelected);
        testing_1.expect(cmp.selectableItems).toEqual(fixtures_1.default().deselectedCactusSelectable);
    });
    testing_1.it('Should be able to select all filtered in selectable', function () {
        var cmp = initCmp();
        cmp.filterSelectable(cmp.selectableItems, 'a');
        cmp.selectAllFiltered();
        testing_1.expect(cmp.selectableItems).toEqual(fixtures_1.default().selectFilteredSelectable);
        testing_1.expect(cmp.selectedItems).toEqual(fixtures_1.default().selectFilteredSelected);
    });
    testing_1.it('Should be able to deselect all filtered in selected', function () {
        var cmp = initCmp();
        cmp.filterSelected(cmp.selectableItems, 'ac');
        cmp.deselectAllFiltered();
        testing_1.expect(cmp.selectableItems).toEqual(fixtures_1.default().deselectFilteredSelectable);
        testing_1.expect(cmp.selectedItems).toEqual(fixtures_1.default().deselectFilteredSelected);
    });
    // Rules for hiding items
    testing_1.it('Should hide selected items from the selectable list', function () {
        var cmp = initCmp();
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemSelectedNoFilter, 'selectable')).toBe(true);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutSelected, 'selectable')).toBe(true);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutSelectable, 'selectable')).toBe(true);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutBoth, 'selectable')).toBe(true);
    });
    testing_1.it('Should hide not-selected items from the selected list', function () {
        var cmp = initCmp();
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedNoFilter, 'selected')).toBe(true);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutSelected, 'selected')).toBe(true);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutSelectable, 'selected')).toBe(true);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutBoth, 'selected')).toBe(true);
    });
    testing_1.it('Should hide filtered out selectable items from the selectable list', function () {
        var cmp = initCmp();
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutSelectable, 'selectable')).toBe(true);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutBoth, 'selectable')).toBe(true);
    });
    testing_1.it('Should hide filtered out selected items from the selected list', function () {
        var cmp = initCmp();
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutSelected, 'selected')).toBe(true);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutBoth, 'selected')).toBe(true);
    });
    testing_1.it('Should not hide non-filtered non-selected items from the selectable list', function () {
        var cmp = initCmp();
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedNoFilter, 'selectable')).toBe(false);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutSelected, 'selectable')).toBe(false);
    });
    testing_1.it('Should not hide non-filtered selected items from the selected list', function () {
        var cmp = initCmp();
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemSelectedNoFilter, 'selected')).toBe(false);
        testing_1.expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutSelectable, 'selected')).toBe(false);
    });
});
// Instantiate component and initialize values
function initCmp(selectable, selected) {
    var cmp = new co_selectable_items_cmp_1.CoSelectableItemsCmp();
    cmp.selectableItems = selectable || fixtures_1.default().initSelectable;
    cmp.selectedItems = selected || fixtures_1.default().initSelected;
    cmp.initValues();
    return cmp;
}
//# sourceMappingURL=co-selectable-items-cmp.spec.js.map