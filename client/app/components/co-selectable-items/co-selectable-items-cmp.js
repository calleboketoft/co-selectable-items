var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
// Selectable items component
var CoSelectableItemsCmp = (function () {
    function CoSelectableItemsCmp() {
        this.selectableFilter = new angular2_1.Control('');
        this.selectedFilter = new angular2_1.Control('');
    }
    CoSelectableItemsCmp.prototype.onInit = function () {
        var _this = this;
        // Mark initially selected items with item.selected = true and v.v.
        var selectedItemsStrs = this.selectedItems.map(function (selectedItem) {
            // Stringify for deep comparison
            return JSON.stringify(selectedItem);
        });
        var selectableLength = this.selectableItems.length;
        var i;
        for (i = 0; i < selectableLength; i++) {
            var selectableItem = this.selectableItems[i];
            selectableItem.filteredOutSelected = false;
            selectableItem.filteredOutSelectable = false;
            var refValueStr = JSON.stringify(selectableItem.refValue);
            selectableItem.selected = !!~selectedItemsStrs.indexOf(refValueStr);
        }
        // subscribe to filter updates
        this.selectableFilter.valueChanges
            .toRx()
            .subscribe(function (value) {
            console.log(value);
            _this.selectableItems.forEach(function (item) {
                item.filteredOutSelectable = !_this.filterItem(item, value);
            });
        });
        this.selectedFilter.valueChanges
            .toRx()
            .subscribe(function (value) {
            _this.selectableItems.forEach(function (item) {
                item.filteredOutSelected = !_this.filterItem(item, value);
            });
        });
    };
    CoSelectableItemsCmp.prototype.filterItem = function (item, filterStr) {
        // TODO this filter could be greatly improved
        var displayNameLc = item.displayName.toLowerCase();
        var filterStrLc = filterStr.toLowerCase();
        return displayNameLc.indexOf(filterStrLc) !== -1;
    };
    // TODO come up with more effective way to do this
    CoSelectableItemsCmp.prototype.shouldHide = function (item, listType) {
        var showStyle = {};
        var selectableAndSelected = listType === 'selectable' && item.selected;
        var selectableAndFilteredOut = listType === 'selectable' && item.filteredOutSelectable;
        var selectedAndNotSelected = listType === 'selected' && !item.selected;
        var selectedAndFilteredOut = listType === 'selected' && item.filteredOutSelected;
        if (selectableAndSelected || selectedAndNotSelected || selectableAndFilteredOut || selectedAndFilteredOut) {
            showStyle = { 'display': 'none' };
        }
        return showStyle;
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
    CoSelectableItemsCmp.prototype.unselectItem = function (itemToUnselect) {
        itemToUnselect.selected = false;
        var unselectRefValueStr = JSON.stringify(itemToUnselect.refValue);
        var selectedLength = this.selectedItems.length;
        var i;
        for (i = 0; i < selectedLength; i++) {
            var selectedItemStr = JSON.stringify(this.selectedItems[i]);
            if (unselectRefValueStr === selectedItemStr) {
                this.selectedItems.splice(i, 1);
                return;
            }
        }
    };
    CoSelectableItemsCmp.prototype.unselectAllFiltered = function () {
        var _this = this;
        this.selectableItems.forEach(function (item) {
            if (item.selected && !item.filteredOutSelected) {
                _this.unselectItem(item);
            }
        });
    };
    CoSelectableItemsCmp.prototype.filterSelectable = function ($event) {
        console.log($event.target.value);
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], CoSelectableItemsCmp.prototype, "selectableItems");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], CoSelectableItemsCmp.prototype, "selectedItems");
    CoSelectableItemsCmp = __decorate([
        angular2_1.Component({
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
            selector: 'co-selectable-items',
            template: "\n    <div class=\"row\">\n      <div class=\"col-xs-5 text-center\">\n\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <input type=\"text\" class=\"form-control\"\n              placeholder=\"Filter\"\n              [ng-form-control]=\"selectableFilter\">\n          </div>\n          <ul class=\"list-group list-group-flush text-left\" style=\"height: 150px; overflow: auto;\">\n            <li class=\"list-group-item\"\n              style=\"cursor: pointer;\"\n              *ng-for=\"#item of selectableItems\"\n              [ng-style]=\"shouldHide(item, 'selectable')\"\n              (click)=\"selectItem(item)\">\n              {{ item.displayName }}\n            </li>\n          </ul>\n        </div>\n\n      </div>\n\n      <div class=\"col-xs-2 text-center\">\n        <button type=\"button\" class=\"btn btn-primary\"\n          (click)=\"selectAllFiltered()\">\n          &gt;&gt;\n        </button>\n        <br><br>\n        <button type=\"button\" class=\"btn btn-primary\"\n          (click)=\"unselectAllFiltered()\">\n          &lt;&lt;\n        </button>\n      </div>\n\n      <div class=\"col-xs-5 text-center\">\n\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <input type=\"text\" class=\"form-control\"\n              placeholder=\"Filter\"\n              [ng-form-control]=\"selectedFilter\">\n          </div>\n            <ul class=\"list-group list-group-flush text-left\" style=\"height: 150px; overflow: auto;\">\n            <li class=\"list-group-item\"\n              style=\"cursor:pointer;\"\n              *ng-for=\"#item of selectableItems; #i = index\"\n              [ng-style]=\"shouldHide(item, 'selected')\"\n              (click)=\"unselectItem(item)\">\n              {{ item.displayName }}\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], CoSelectableItemsCmp);
    return CoSelectableItemsCmp;
})();
exports.CoSelectableItemsCmp = CoSelectableItemsCmp;
//# sourceMappingURL=co-selectable-items-cmp.js.map