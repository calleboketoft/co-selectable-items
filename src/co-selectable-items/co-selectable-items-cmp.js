"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var VISIBLE_CLASS = 'co-visible';
var INVISIBLE_CLASS = 'co-invisible';
// Selectable items component
var CoSelectableItemsCmp = (function () {
    function CoSelectableItemsCmp() {
        this.selectableFilter = new common_1.Control('');
        this.selectedFilter = new common_1.Control('');
    }
    CoSelectableItemsCmp.prototype.ngOnInit = function () {
        this.initValues();
        this.subscribeToChanges();
    };
    CoSelectableItemsCmp.prototype.subscribeToChanges = function () {
        var _this = this;
        // subscribe to filter updates
        this.selectableFilter.valueChanges
            .subscribe(function (value) {
            _this.filterSelectable(_this.selectableItems, value);
        });
        this.selectedFilter.valueChanges
            .subscribe(function (value) {
            _this.filterSelected(_this.selectableItems, value);
        });
    };
    CoSelectableItemsCmp.prototype.filterSelectable = function (items, value) {
        var _this = this;
        items.forEach(function (item) {
            item.filteredOutSelectable = !_this.filterItem(item.displayName, value);
        });
    };
    CoSelectableItemsCmp.prototype.filterSelected = function (items, value) {
        var _this = this;
        items.forEach(function (item) {
            item.filteredOutSelected = !_this.filterItem(item.displayName, value);
        });
    };
    CoSelectableItemsCmp.prototype.initValues = function () {
        var selectableLength = this.selectableItems.length;
        var i;
        for (i = 0; i < selectableLength; i++) {
            var selectableItem = this.selectableItems[i];
            selectableItem.filteredOutSelected = false;
            selectableItem.filteredOutSelectable = false;
            selectableItem.selected = this.selectedItems.some(function (selectedItem) {
                return deepEqual(selectedItem, selectableItem.refValue);
            });
        }
    };
    CoSelectableItemsCmp.prototype.filterItem = function (itemStr, filterStr) {
        var itemStrLc = itemStr.toLowerCase();
        var filterStrLc = filterStr.toLowerCase();
        return itemStrLc.indexOf(filterStrLc) !== -1;
    };
    CoSelectableItemsCmp.prototype.shouldHide = function (item, listType) {
        var hide = false;
        var selectableAndSelected = listType === 'selectable' && item.selected;
        var selectableAndFilteredOut = listType === 'selectable' && item.filteredOutSelectable;
        var selectedAndNotSelected = listType === 'selected' && !item.selected;
        var selectedAndFilteredOut = listType === 'selected' && item.filteredOutSelected;
        if (selectableAndSelected || selectedAndNotSelected || selectableAndFilteredOut || selectedAndFilteredOut) {
            hide = true;
        }
        return hide;
    };
    CoSelectableItemsCmp.prototype.getDisplayClass = function (item, listType) {
        var displayClass = VISIBLE_CLASS;
        if (this.shouldHide(item, listType)) {
            displayClass = INVISIBLE_CLASS;
        }
        return displayClass;
    };
    CoSelectableItemsCmp.prototype.selectItem = function (itemToSelect) {
        itemToSelect.selected = true;
        this.selectedItems.push(itemToSelect.refValue);
    };
    CoSelectableItemsCmp.prototype.selectAllFiltered = function () {
        var _this = this;
        this.selectableItems.forEach(function (item) {
            if (!item.selected && !item.filteredOutSelectable) {
                _this.selectItem(item);
            }
        });
    };
    CoSelectableItemsCmp.prototype.deselectItem = function (itemToUnselect) {
        var _this = this;
        itemToUnselect.selected = false;
        this.selectedItems.forEach(function (selectedItem, index) {
            var isEqual = deepEqual(itemToUnselect.refValue, selectedItem);
            if (isEqual) {
                _this.selectedItems.splice(index, 1);
                return;
            }
        });
    };
    CoSelectableItemsCmp.prototype.deselectAllFiltered = function () {
        var _this = this;
        this.selectableItems.forEach(function (item) {
            if (item.selected && !item.filteredOutSelected) {
                _this.deselectItem(item);
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CoSelectableItemsCmp.prototype, "selectableItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CoSelectableItemsCmp.prototype, "selectedItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoSelectableItemsCmp.prototype, "listHeight", void 0);
    CoSelectableItemsCmp = __decorate([
        core_1.Component({
            directives: [common_1.NgFor, common_1.NgClass, common_1.NgStyle, common_1.FORM_DIRECTIVES],
            selector: 'co-selectable-items',
            styles: ["\n    .list-group {\n      overflow: auto;\n    }\n    .list-group-item {\n      cursor: pointer;\n    }\n    .co-invisible {\n      display: none;\n    }\n  "],
            template: "\n    <div class='row'>\n      <div class='col-xs-5 text-center'>\n\n        <div class='card'>\n          <div class='card-header'>\n            <input type='text' class='form-control'\n              id='co-selectable-items-selectable-filter'\n              placeholder='Filter'\n              [ngFormControl]='selectableFilter'>\n          </div>\n          <ul class='list-group list-group-flush text-left'\n            id='co-selectable-items-selectable-list'\n            [ngStyle]='{\"height\": listHeight}'>\n            <li class='list-group-item'\n              *ngFor='let item of selectableItems'\n              [ngClass]='getDisplayClass(item, \"selectable\")'\n              (click)='selectItem(item)'>\n              {{ item.displayName }}\n            </li>\n          </ul>\n        </div>\n\n      </div>\n\n      <div class='col-xs-2 text-center'>\n        <button type='button' class='btn btn-primary'\n          id='co-selectable-items-select-all'\n          (click)='selectAllFiltered()'>\n          &gt;&gt;\n        </button>\n        <br><br>\n        <button type='button' class='btn btn-primary'\n          id='co-selectable-items-deselect-all'\n          (click)='deselectAllFiltered()'>\n          &lt;&lt;\n        </button>\n      </div>\n\n      <div class='col-xs-5 text-center'>\n\n        <div class='card'>\n          <div class='card-header'>\n            <input type='text' class='form-control'\n              id='co-selectable-items-selected-filter'\n              placeholder='Filter'\n              [ngFormControl]='selectedFilter'>\n          </div>\n            <ul class='list-group list-group-flush text-left'\n              id='co-selectable-items-selected-list'\n              [ngStyle]='{\"height\":listHeight}'>\n            <li class='list-group-item'\n              *ngFor='let item of selectableItems'\n              [ngClass]='getDisplayClass(item, \"selected\")'\n              (click)='deselectItem(item)'>\n              {{ item.displayName }}\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], CoSelectableItemsCmp);
    return CoSelectableItemsCmp;
}());
exports.CoSelectableItemsCmp = CoSelectableItemsCmp;
// http://stackoverflow.com/questions/25456013/javascript-deepequal-comparison
function deepEqual(x, y) {
    if ((typeof x == 'object' && x != null) && (typeof y == 'object' && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length) {
            return false;
        }
        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop])) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
    else if (x !== y) {
        return false;
    }
    else {
        return true;
    }
}
//# sourceMappingURL=co-selectable-items-cmp.js.map