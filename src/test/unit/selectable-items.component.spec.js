"use strict";
var fixtures_1 = require('./fixtures');
var selectable_items_component_1 = require('../../selectable-items/selectable-items.component');
describe('CoSelectableItemsCmp', function () {
    it('Should be defined', function () {
        expect(selectable_items_component_1.SelectableItemsComponent).toBeDefined();
    });
    it('Should initialise values correctly', function () {
        var cmp = initCmp();
        expect(fixtures_1.default().initDone).toEqual(cmp.selectableItems);
    });
    it('Should initialise values correctly even if object properties are ordered differently', function () {
        var cmp = initCmp(null, fixtures_1.default().initSelectedDifferentPropOrder);
        expect(fixtures_1.default().initDone).toEqual(cmp.selectableItems);
    });
    it('Should be able to filter on exact partial match', function () {
        var cmp = new selectable_items_component_1.SelectableItemsComponent();
        var matched = cmp.filterItem('SomeString', 'Some');
        expect(matched).toBe(true);
    });
    it('Should be able to filter on case insensitive partial match', function () {
        var cmp = new selectable_items_component_1.SelectableItemsComponent();
        var matched = cmp.filterItem('SomeString', 'so');
        expect(matched).toBe(true);
    });
    it('Should not hide selectable when filtering selected', function () {
        var cmp = new selectable_items_component_1.SelectableItemsComponent();
        var selectableList = fixtures_1.default().filterIsolatedBefore;
        cmp.filterSelected(selectableList, 'Random');
        var selectedExpected = fixtures_1.default().filterIsolatedSelectedAfter;
        expect(selectableList).toEqual(selectedExpected);
    });
    it('Should not hide selected when filtering selectable', function () {
        var cmp = new selectable_items_component_1.SelectableItemsComponent();
        var selectableList = fixtures_1.default().filterIsolatedBefore;
        cmp.filterSelectable(selectableList, 'Random');
        expect(selectableList).toEqual(fixtures_1.default().filterIsolatedSelectableAfter);
    });
    it('Should be able to select item', function () {
        var cmp = initCmp();
        cmp.selectItem(cmp.selectableItems[1]);
        expect(cmp.selectedItems).toEqual(fixtures_1.default().selectedBearSelected);
        expect(cmp.selectableItems).toEqual(fixtures_1.default().selectedBearSelectable);
    });
    it('Should be able to deselect item', function () {
        var cmp = initCmp();
        cmp.deselectItem(cmp.selectableItems[2]);
        expect(cmp.selectedItems).toEqual(fixtures_1.default().deselectedCactusSelected);
        expect(cmp.selectableItems).toEqual(fixtures_1.default().deselectedCactusSelectable);
    });
    it('Should deselect item even if object properties are ordered differently', function () {
        var cmp = initCmp(null, fixtures_1.default().initSelectedDifferentPropOrder);
        cmp.deselectItem(cmp.selectableItems[2]);
        expect(cmp.selectedItems).toEqual(fixtures_1.default().deselectedCactusSelected);
        expect(cmp.selectableItems).toEqual(fixtures_1.default().deselectedCactusSelectable);
    });
    it('Should be able to select all filtered in selectable', function () {
        var cmp = initCmp();
        cmp.filterSelectable(cmp.selectableItems, 'a');
        cmp.selectAllFiltered();
        expect(cmp.selectableItems).toEqual(fixtures_1.default().selectFilteredSelectable);
        expect(cmp.selectedItems).toEqual(fixtures_1.default().selectFilteredSelected);
    });
    it('Should be able to deselect all filtered in selected', function () {
        var cmp = initCmp();
        cmp.filterSelected(cmp.selectableItems, 'ac');
        cmp.deselectAllFiltered();
        expect(cmp.selectableItems).toEqual(fixtures_1.default().deselectFilteredSelectable);
        expect(cmp.selectedItems).toEqual(fixtures_1.default().deselectFilteredSelected);
    });
    // Rules for hiding items
    it('Should hide selected items from the selectable list', function () {
        var cmp = initCmp();
        expect(cmp.shouldHide(fixtures_1.default().itemSelectedNoFilter, 'selectable')).toBe(true);
        expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutSelected, 'selectable')).toBe(true);
        expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutSelectable, 'selectable')).toBe(true);
        expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutBoth, 'selectable')).toBe(true);
    });
    it('Should hide not-selected items from the selected list', function () {
        var cmp = initCmp();
        expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedNoFilter, 'selected')).toBe(true);
        expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutSelected, 'selected')).toBe(true);
        expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutSelectable, 'selected')).toBe(true);
        expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutBoth, 'selected')).toBe(true);
    });
    it('Should hide filtered out selectable items from the selectable list', function () {
        var cmp = initCmp();
        expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutSelectable, 'selectable')).toBe(true);
        expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutBoth, 'selectable')).toBe(true);
    });
    it('Should hide filtered out selected items from the selected list', function () {
        var cmp = initCmp();
        expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutSelected, 'selected')).toBe(true);
        expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutBoth, 'selected')).toBe(true);
    });
    it('Should not hide non-filtered non-selected items from the selectable list', function () {
        var cmp = initCmp();
        expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedNoFilter, 'selectable')).toBe(false);
        expect(cmp.shouldHide(fixtures_1.default().itemNotSelectedFilteredOutSelected, 'selectable')).toBe(false);
    });
    it('Should not hide non-filtered selected items from the selected list', function () {
        var cmp = initCmp();
        expect(cmp.shouldHide(fixtures_1.default().itemSelectedNoFilter, 'selected')).toBe(false);
        expect(cmp.shouldHide(fixtures_1.default().itemSelectedFilteredOutSelectable, 'selected')).toBe(false);
    });
});
// Instantiate component and initialize values
function initCmp(selectable, selected) {
    var cmp = new selectable_items_component_1.SelectableItemsComponent();
    cmp.selectableItems = selectable || fixtures_1.default().initSelectable;
    cmp.selectedItems = selected || fixtures_1.default().initSelected;
    cmp.initValues();
    return cmp;
}
//# sourceMappingURL=selectable-items.component.spec.js.map