var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
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
            template: "\n    <div class=\"row\">\n      <div class=\"col-xs-5 text-center\">\n\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <input type=\"text\" class=\"form-control\"\n              id=\"co-selectable-items-selectable-filter\"\n              placeholder=\"Filter\"\n              [ngFormControl]=\"selectableFilter\">\n          </div>\n          <ul class=\"list-group list-group-flush text-left\"\n            id=\"co-selectable-items-selectable-list\"\n            [ngStyle]=\"{'height': listHeight}\">\n            <li class=\"list-group-item\"\n              *ngFor=\"#item of selectableItems\"\n              [ngClass]=\"getDisplayClass(item, 'selectable')\"\n              (click)=\"selectItem(item)\">\n              {{ item.displayName }}\n            </li>\n          </ul>\n        </div>\n\n      </div>\n\n      <div class=\"col-xs-2 text-center\">\n        <button type=\"button\" class=\"btn btn-primary\"\n          id=\"co-selectable-items-select-all\"\n          (click)=\"selectAllFiltered()\">\n          &gt;&gt;\n        </button>\n        <br><br>\n        <button type=\"button\" class=\"btn btn-primary\"\n          id=\"co-selectable-items-deselect-all\"\n          (click)=\"deselectAllFiltered()\">\n          &lt;&lt;\n        </button>\n      </div>\n\n      <div class=\"col-xs-5 text-center\">\n\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <input type=\"text\" class=\"form-control\"\n              id=\"co-selectable-items-selected-filter\"\n              placeholder=\"Filter\"\n              [ngFormControl]=\"selectedFilter\">\n          </div>\n            <ul class=\"list-group list-group-flush text-left\"\n              id=\"co-selectable-items-selected-list\"\n              [ngStyle]=\"{'height':listHeight}\">\n            <li class=\"list-group-item\"\n              *ngFor=\"#item of selectableItems\"\n              [ngClass]=\"getDisplayClass(item, 'selected')\"\n              (click)=\"deselectItem(item)\">\n              {{ item.displayName }}\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], CoSelectableItemsCmp);
    return CoSelectableItemsCmp;
})();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvLXNlbGVjdGFibGUtaXRlbXMvY28tc2VsZWN0YWJsZS1pdGVtcy1jbXAudHMiXSwibmFtZXMiOlsiQ29TZWxlY3RhYmxlSXRlbXNDbXAiLCJDb1NlbGVjdGFibGVJdGVtc0NtcC5jb25zdHJ1Y3RvciIsIkNvU2VsZWN0YWJsZUl0ZW1zQ21wLm5nT25Jbml0IiwiQ29TZWxlY3RhYmxlSXRlbXNDbXAuc3Vic2NyaWJlVG9DaGFuZ2VzIiwiQ29TZWxlY3RhYmxlSXRlbXNDbXAuZmlsdGVyU2VsZWN0YWJsZSIsIkNvU2VsZWN0YWJsZUl0ZW1zQ21wLmZpbHRlclNlbGVjdGVkIiwiQ29TZWxlY3RhYmxlSXRlbXNDbXAuaW5pdFZhbHVlcyIsIkNvU2VsZWN0YWJsZUl0ZW1zQ21wLmZpbHRlckl0ZW0iLCJDb1NlbGVjdGFibGVJdGVtc0NtcC5zaG91bGRIaWRlIiwiQ29TZWxlY3RhYmxlSXRlbXNDbXAuZ2V0RGlzcGxheUNsYXNzIiwiQ29TZWxlY3RhYmxlSXRlbXNDbXAuc2VsZWN0SXRlbSIsIkNvU2VsZWN0YWJsZUl0ZW1zQ21wLnNlbGVjdEFsbEZpbHRlcmVkIiwiQ29TZWxlY3RhYmxlSXRlbXNDbXAuZGVzZWxlY3RJdGVtIiwiQ29TZWxlY3RhYmxlSXRlbXNDbXAuZGVzZWxlY3RBbGxGaWx0ZXJlZCIsImRlZXBFcXVhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBSU8sZUFFUCxDQUFDLENBRnFCO0FBRXRCLHVCQU1PLGlCQUVQLENBQUMsQ0FGdUI7QUFFeEIsSUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFBO0FBQ2xDLElBQU0sZUFBZSxHQUFHLGNBQWMsQ0FBQTtBQUV0Qyw2QkFBNkI7QUFDN0I7SUFBQUE7UUFrRlNDLHFCQUFnQkEsR0FBR0EsSUFBSUEsZ0JBQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUFBO1FBQ2xDQSxtQkFBY0EsR0FBR0EsSUFBSUEsZ0JBQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUFBO0lBc0d6Q0EsQ0FBQ0E7SUFwR1FE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LENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO1lBQ25EQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFBQTtRQUNkQSxDQUFDQTtRQUNEQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDakNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUFBO2dCQUNkQSxDQUFDQTtZQUNIQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDTkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQUE7WUFDZEEsQ0FBQ0E7UUFDSEEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQUE7SUFDYkEsQ0FBQ0E7SUFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUFBO0lBQ2RBLENBQUNBO0lBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ05BLE1BQU1BLENBQUNBLElBQUlBLENBQUFBO0lBQ2JBLENBQUNBO0FBQ0hBLENBQUNBIiwiZmlsZSI6ImNvLXNlbGVjdGFibGUtaXRlbXMvY28tc2VsZWN0YWJsZS1pdGVtcy1jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSdcblxuaW1wb3J0IHtcbiAgTmdGb3IsXG4gIE5nQ2xhc3MsXG4gIE5nU3R5bGUsXG4gIEZPUk1fRElSRUNUSVZFUyxcbiAgQ29udHJvbFxufSBmcm9tICdhbmd1bGFyMi9jb21tb24nXG5cbmNvbnN0IFZJU0lCTEVfQ0xBU1MgPSAnY28tdmlzaWJsZSdcbmNvbnN0IElOVklTSUJMRV9DTEFTUyA9ICdjby1pbnZpc2libGUnXG5cbi8vIFNlbGVjdGFibGUgaXRlbXMgY29tcG9uZW50XG5AQ29tcG9uZW50KHtcbiAgZGlyZWN0aXZlczogW05nRm9yLCBOZ0NsYXNzLCBOZ1N0eWxlLCBGT1JNX0RJUkVDVElWRVNdLFxuICBzZWxlY3RvcjogJ2NvLXNlbGVjdGFibGUtaXRlbXMnLFxuICBzdHlsZXM6IFtgXG4gICAgLmxpc3QtZ3JvdXAge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuY28taW52aXNpYmxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTUgdGV4dC1jZW50ZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cImNvLXNlbGVjdGFibGUtaXRlbXMtc2VsZWN0YWJsZS1maWx0ZXJcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlclwiXG4gICAgICAgICAgICAgIFtuZ0Zvcm1Db250cm9sXT1cInNlbGVjdGFibGVGaWx0ZXJcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggdGV4dC1sZWZ0XCJcbiAgICAgICAgICAgIGlkPVwiY28tc2VsZWN0YWJsZS1pdGVtcy1zZWxlY3RhYmxlLWxpc3RcIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwieydoZWlnaHQnOiBsaXN0SGVpZ2h0fVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCJcbiAgICAgICAgICAgICAgKm5nRm9yPVwiI2l0ZW0gb2Ygc2VsZWN0YWJsZUl0ZW1zXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0RGlzcGxheUNsYXNzKGl0ZW0sICdzZWxlY3RhYmxlJylcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0SXRlbShpdGVtKVwiPlxuICAgICAgICAgICAgICB7eyBpdGVtLmRpc3BsYXlOYW1lIH19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICBpZD1cImNvLXNlbGVjdGFibGUtaXRlbXMtc2VsZWN0LWFsbFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbEZpbHRlcmVkKClcIj5cbiAgICAgICAgICAmZ3Q7Jmd0O1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyPjxicj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgIGlkPVwiY28tc2VsZWN0YWJsZS1pdGVtcy1kZXNlbGVjdC1hbGxcIlxuICAgICAgICAgIChjbGljayk9XCJkZXNlbGVjdEFsbEZpbHRlcmVkKClcIj5cbiAgICAgICAgICAmbHQ7Jmx0O1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTUgdGV4dC1jZW50ZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cImNvLXNlbGVjdGFibGUtaXRlbXMtc2VsZWN0ZWQtZmlsdGVyXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIlxuICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09XCJzZWxlY3RlZEZpbHRlclwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgIGlkPVwiY28tc2VsZWN0YWJsZS1pdGVtcy1zZWxlY3RlZC1saXN0XCJcbiAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydoZWlnaHQnOmxpc3RIZWlnaHR9XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIlxuICAgICAgICAgICAgICAqbmdGb3I9XCIjaXRlbSBvZiBzZWxlY3RhYmxlSXRlbXNcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJnZXREaXNwbGF5Q2xhc3MoaXRlbSwgJ3NlbGVjdGVkJylcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZGVzZWxlY3RJdGVtKGl0ZW0pXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW0uZGlzcGxheU5hbWUgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb1NlbGVjdGFibGVJdGVtc0NtcCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RhYmxlSXRlbXM6IEFycmF5PGFueT5cbiAgQElucHV0KCkgcHVibGljIHNlbGVjdGVkSXRlbXM6IEFycmF5PGFueT5cbiAgQElucHV0KCkgcHVibGljIGxpc3RIZWlnaHRcbiAgcHVibGljIHNlbGVjdGFibGVGaWx0ZXIgPSBuZXcgQ29udHJvbCgnJylcbiAgcHVibGljIHNlbGVjdGVkRmlsdGVyID0gbmV3IENvbnRyb2woJycpXG5cbiAgcHVibGljIG5nT25Jbml0ICgpIHtcbiAgICB0aGlzLmluaXRWYWx1ZXMoKVxuICAgIHRoaXMuc3Vic2NyaWJlVG9DaGFuZ2VzKClcbiAgfVxuXG4gIHB1YmxpYyBzdWJzY3JpYmVUb0NoYW5nZXMgKCkge1xuICAgIC8vIHN1YnNjcmliZSB0byBmaWx0ZXIgdXBkYXRlc1xuICAgIHRoaXMuc2VsZWN0YWJsZUZpbHRlci52YWx1ZUNoYW5nZXNcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyU2VsZWN0YWJsZSh0aGlzLnNlbGVjdGFibGVJdGVtcywgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgdGhpcy5zZWxlY3RlZEZpbHRlci52YWx1ZUNoYW5nZXNcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWQodGhpcy5zZWxlY3RhYmxlSXRlbXMsIHZhbHVlKVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJTZWxlY3RhYmxlIChpdGVtcywgdmFsdWUpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmZpbHRlcmVkT3V0U2VsZWN0YWJsZSA9ICAhdGhpcy5maWx0ZXJJdGVtKGl0ZW0uZGlzcGxheU5hbWUsIHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZmlsdGVyU2VsZWN0ZWQgKGl0ZW1zLCB2YWx1ZSkge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RlZCA9ICF0aGlzLmZpbHRlckl0ZW0oaXRlbS5kaXNwbGF5TmFtZSwgdmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBpbml0VmFsdWVzICgpIHtcbiAgICBsZXQgc2VsZWN0YWJsZUxlbmd0aCA9IHRoaXMuc2VsZWN0YWJsZUl0ZW1zLmxlbmd0aFxuICAgIGxldCBpXG4gICAgZm9yIChpID0gMDsgaSA8IHNlbGVjdGFibGVMZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlbGVjdGFibGVJdGVtID0gdGhpcy5zZWxlY3RhYmxlSXRlbXNbaV1cbiAgICAgIHNlbGVjdGFibGVJdGVtLmZpbHRlcmVkT3V0U2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgc2VsZWN0YWJsZUl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RhYmxlID0gZmFsc2VcbiAgICAgIHNlbGVjdGFibGVJdGVtLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoKHNlbGVjdGVkSXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gZGVlcEVxdWFsKHNlbGVjdGVkSXRlbSwgc2VsZWN0YWJsZUl0ZW0ucmVmVmFsdWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJJdGVtIChpdGVtU3RyLCBmaWx0ZXJTdHIpIHtcbiAgICBsZXQgaXRlbVN0ckxjID0gaXRlbVN0ci50b0xvd2VyQ2FzZSgpXG4gICAgbGV0IGZpbHRlclN0ckxjID0gZmlsdGVyU3RyLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gaXRlbVN0ckxjLmluZGV4T2YoZmlsdGVyU3RyTGMpICE9PSAtMVxuICB9XG5cbiAgcHVibGljIHNob3VsZEhpZGUgKGl0ZW0sIGxpc3RUeXBlKSB7XG4gICAgbGV0IGhpZGUgPSBmYWxzZVxuICAgIGxldCBzZWxlY3RhYmxlQW5kU2VsZWN0ZWQgPSBsaXN0VHlwZSA9PT0gJ3NlbGVjdGFibGUnICYmIGl0ZW0uc2VsZWN0ZWRcbiAgICBsZXQgc2VsZWN0YWJsZUFuZEZpbHRlcmVkT3V0ID0gbGlzdFR5cGUgPT09ICdzZWxlY3RhYmxlJyAmJiBpdGVtLmZpbHRlcmVkT3V0U2VsZWN0YWJsZVxuICAgIGxldCBzZWxlY3RlZEFuZE5vdFNlbGVjdGVkID0gbGlzdFR5cGUgPT09ICdzZWxlY3RlZCcgJiYgIWl0ZW0uc2VsZWN0ZWRcbiAgICBsZXQgc2VsZWN0ZWRBbmRGaWx0ZXJlZE91dCA9IGxpc3RUeXBlID09PSAnc2VsZWN0ZWQnICYmIGl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RlZFxuICAgIGlmIChzZWxlY3RhYmxlQW5kU2VsZWN0ZWQgfHwgc2VsZWN0ZWRBbmROb3RTZWxlY3RlZCB8fCBzZWxlY3RhYmxlQW5kRmlsdGVyZWRPdXQgfHwgc2VsZWN0ZWRBbmRGaWx0ZXJlZE91dCkge1xuICAgICAgaGlkZSA9IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGhpZGVcbiAgfVxuXG4gIHB1YmxpYyBnZXREaXNwbGF5Q2xhc3MgKGl0ZW0sIGxpc3RUeXBlKSB7XG4gICAgbGV0IGRpc3BsYXlDbGFzcyA9IFZJU0lCTEVfQ0xBU1NcbiAgICBpZiAodGhpcy5zaG91bGRIaWRlKGl0ZW0sIGxpc3RUeXBlKSkge1xuICAgICAgZGlzcGxheUNsYXNzID0gSU5WSVNJQkxFX0NMQVNTXG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5Q2xhc3NcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RJdGVtIChpdGVtVG9TZWxlY3QpIHtcbiAgICBpdGVtVG9TZWxlY3Quc2VsZWN0ZWQgPSB0cnVlXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbVRvU2VsZWN0LnJlZlZhbHVlKVxuICB9XG5cbiAgcHVibGljIHNlbGVjdEFsbEZpbHRlcmVkICgpIHtcbiAgICB0aGlzLnNlbGVjdGFibGVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQgJiYgIWl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbShpdGVtKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZGVzZWxlY3RJdGVtIChpdGVtVG9VbnNlbGVjdCkge1xuICAgIGl0ZW1Ub1Vuc2VsZWN0LnNlbGVjdGVkID0gZmFsc2VcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaCgoc2VsZWN0ZWRJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGlzRXF1YWwgPSBkZWVwRXF1YWwoaXRlbVRvVW5zZWxlY3QucmVmVmFsdWUsIHNlbGVjdGVkSXRlbSlcbiAgICAgIGlmIChpc0VxdWFsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZGVzZWxlY3RBbGxGaWx0ZXJlZCAoKSB7XG4gICAgdGhpcy5zZWxlY3RhYmxlSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgJiYgIWl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0SXRlbShpdGVtKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTQ1NjAxMy9qYXZhc2NyaXB0LWRlZXBlcXVhbC1jb21wYXJpc29uXG5mdW5jdGlvbiBkZWVwRXF1YWwgKHgsIHkpIHtcbiAgaWYgKCh0eXBlb2YgeCA9PSAnb2JqZWN0JyAmJiB4ICE9IG51bGwpICYmICh0eXBlb2YgeSA9PSAnb2JqZWN0JyAmJiB5ICE9IG51bGwpKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHgpLmxlbmd0aCAhPSBPYmplY3Qua2V5cyh5KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBmb3IgKHZhciBwcm9wIGluIHgpIHtcbiAgICAgIGlmICh5Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIGlmICghZGVlcEVxdWFsKHhbcHJvcF0sIHlbcHJvcF0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2UgaWYgKHggIT09IHkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9ub2RlX21vZHVsZXMifQ==
