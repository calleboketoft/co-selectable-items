"use strict";
var VISIBLE_CLASS = 'co-visible';
var SelectableItemsPageObject = (function () {
    function SelectableItemsPageObject() {
        this.selectableFilter = element(by.css('.example1 .co-selectable-items-selectable-filter'));
        this.selectedFilter = element(by.css('.example1 .co-selectable-items-selected-filter'));
        this.selectAllButton = element(by.css('.example1 .co-selectable-items-select-all'));
        this.deselectAllButton = element(by.css('.example1 .co-selectable-items-deselect-all'));
        this.selectableList = element(by.css('.example1 .co-selectable-items-selectable-list'));
        this.selectedList = element(by.css('.example1 .co-selectable-items-selected-list'));
    }
    SelectableItemsPageObject.prototype.getSelectableItems = function () {
        return this.selectableList.all(by.css('.example1 li.' + VISIBLE_CLASS));
    };
    SelectableItemsPageObject.prototype.getSelectedItems = function () {
        return this.selectedList.all(by.css('.example1 li.' + VISIBLE_CLASS));
    };
    // http://stackoverflow.com/questions/27910331/using-protractor-with-loops
    // return items that matches the filter
    SelectableItemsPageObject.prototype.getItemsByText = function (items, name) {
        return items.filter(function (elem) {
            return elem.getText().then(function (text) {
                return text === name;
            });
        });
    };
    SelectableItemsPageObject.prototype.selectAllItems = function (filterString) {
        if (filterString === void 0) { filterString = ''; }
        this.selectableFilter.clear();
        this.selectableFilter.sendKeys(filterString);
        this.selectAllButton.click();
        this.selectableFilter.clear();
    };
    SelectableItemsPageObject.prototype.deselectAllItems = function (filterString) {
        if (filterString === void 0) { filterString = ''; }
        this.selectedFilter.clear();
        this.selectedFilter.sendKeys(filterString);
        this.deselectAllButton.click();
        this.selectedFilter.clear();
    };
    return SelectableItemsPageObject;
}());
exports.SelectableItemsPageObject = SelectableItemsPageObject;
//# sourceMappingURL=selectable-items-cmp.page-object.js.map