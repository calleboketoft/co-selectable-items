"use strict";
var VISIBLE_CLASS = 'co-visible';
var CoSelectableItemsPageObject = (function () {
    function CoSelectableItemsPageObject() {
        this.selectableFilter = element(by.id('co-selectable-items-selectable-filter'));
        this.selectedFilter = element(by.id('co-selectable-items-selected-filter'));
        this.selectAllButton = element(by.id('co-selectable-items-select-all'));
        this.deselectAllButton = element(by.id('co-selectable-items-deselect-all'));
        this.selectableList = element(by.id('co-selectable-items-selectable-list'));
        this.selectedList = element(by.id('co-selectable-items-selected-list'));
    }
    CoSelectableItemsPageObject.prototype.getSelectableItems = function () {
        return this.selectableList.all(by.css('li.' + VISIBLE_CLASS));
    };
    CoSelectableItemsPageObject.prototype.getSelectedItems = function () {
        return this.selectedList.all(by.css('li.' + VISIBLE_CLASS));
    };
    // http://stackoverflow.com/questions/27910331/using-protractor-with-loops
    // return items that matches the filter
    CoSelectableItemsPageObject.prototype.getItemsByText = function (items, name) {
        return items.filter(function (elem) {
            return elem.getText().then(function (text) {
                return text === name;
            });
        });
    };
    CoSelectableItemsPageObject.prototype.selectAllItems = function (filterString) {
        if (filterString === void 0) { filterString = ''; }
        this.selectableFilter.clear();
        this.selectableFilter.sendKeys(filterString);
        this.selectAllButton.click();
        this.selectableFilter.clear();
    };
    CoSelectableItemsPageObject.prototype.deselectAllItems = function (filterString) {
        if (filterString === void 0) { filterString = ''; }
        this.selectedFilter.clear();
        this.selectedFilter.sendKeys(filterString);
        this.deselectAllButton.click();
        this.selectedFilter.clear();
    };
    return CoSelectableItemsPageObject;
}());
exports.CoSelectableItemsPageObject = CoSelectableItemsPageObject;
//# sourceMappingURL=co-selectable-items-cmp.page-object.js.map