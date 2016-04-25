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
            template: "\n    <div class='row'>\n      <div class='col-xs-5 text-center'>\n\n        <div class='card'>\n          <div class='card-header'>\n            <input type='text' class='form-control'\n              id='co-selectable-items-selectable-filter'\n              placeholder='Filter'\n              [ngFormControl]='selectableFilter'>\n          </div>\n          <ul class='list-group list-group-flush text-left'\n            id='co-selectable-items-selectable-list'\n            [ngStyle]='{\"height\": listHeight}'>\n            <li class='list-group-item'\n              *ngFor='#item of selectableItems'\n              [ngClass]='getDisplayClass(item, \"selectable\")'\n              (click)='selectItem(item)'>\n              {{ item.displayName }}\n            </li>\n          </ul>\n        </div>\n\n      </div>\n\n      <div class='col-xs-2 text-center'>\n        <button type='button' class='btn btn-primary'\n          id='co-selectable-items-select-all'\n          (click)='selectAllFiltered()'>\n          &gt;&gt;\n        </button>\n        <br><br>\n        <button type='button' class='btn btn-primary'\n          id='co-selectable-items-deselect-all'\n          (click)='deselectAllFiltered()'>\n          &lt;&lt;\n        </button>\n      </div>\n\n      <div class='col-xs-5 text-center'>\n\n        <div class='card'>\n          <div class='card-header'>\n            <input type='text' class='form-control'\n              id='co-selectable-items-selected-filter'\n              placeholder='Filter'\n              [ngFormControl]='selectedFilter'>\n          </div>\n            <ul class='list-group list-group-flush text-left'\n              id='co-selectable-items-selected-list'\n              [ngStyle]='{\"height\":listHeight}'>\n            <li class='list-group-item'\n              *ngFor='#item of selectableItems'\n              [ngClass]='getDisplayClass(item, \"selected\")'\n              (click)='deselectItem(item)'>\n              {{ item.displayName }}\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvLXNlbGVjdGFibGUtaXRlbXMvY28tc2VsZWN0YWJsZS1pdGVtcy1jbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUlPLGVBRVAsQ0FBQyxDQUZxQjtBQUV0Qix1QkFNTyxpQkFFUCxDQUFDLENBRnVCO0FBRXhCLElBQU0sYUFBYSxHQUFHLFlBQVksQ0FBQTtBQUNsQyxJQUFNLGVBQWUsR0FBRyxjQUFjLENBQUE7QUFFdEMsNkJBQTZCO0FBK0U3QjtJQUFBO1FBSVMscUJBQWdCLEdBQUcsSUFBSSxnQkFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxnQkFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBc0d6QyxDQUFDO0lBcEdRLHVDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVNLGlEQUFrQixHQUF6QjtRQUFBLGlCQVdDO1FBVkMsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDZixLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNwRCxDQUFDLENBQUMsQ0FBQTtRQUVKLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTthQUM3QixTQUFTLENBQUMsVUFBQyxLQUFLO1lBQ2YsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLCtDQUFnQixHQUF2QixVQUF5QixLQUFLLEVBQUUsS0FBSztRQUFyQyxpQkFJQztRQUhDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2pCLElBQUksQ0FBQyxxQkFBcUIsR0FBSSxDQUFDLEtB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S0FBSyxDQUFBO1lBQ2QsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQTtJQUNiLENBQUM7QUFDSCxDQUFDIiwiZmlsZSI6ImNvLXNlbGVjdGFibGUtaXRlbXMvY28tc2VsZWN0YWJsZS1pdGVtcy1jbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSdcblxuaW1wb3J0IHtcbiAgTmdGb3IsXG4gIE5nQ2xhc3MsXG4gIE5nU3R5bGUsXG4gIEZPUk1fRElSRUNUSVZFUyxcbiAgQ29udHJvbFxufSBmcm9tICdhbmd1bGFyMi9jb21tb24nXG5cbmNvbnN0IFZJU0lCTEVfQ0xBU1MgPSAnY28tdmlzaWJsZSdcbmNvbnN0IElOVklTSUJMRV9DTEFTUyA9ICdjby1pbnZpc2libGUnXG5cbi8vIFNlbGVjdGFibGUgaXRlbXMgY29tcG9uZW50XG5AQ29tcG9uZW50KHtcbiAgZGlyZWN0aXZlczogW05nRm9yLCBOZ0NsYXNzLCBOZ1N0eWxlLCBGT1JNX0RJUkVDVElWRVNdLFxuICBzZWxlY3RvcjogJ2NvLXNlbGVjdGFibGUtaXRlbXMnLFxuICBzdHlsZXM6IFtgXG4gICAgLmxpc3QtZ3JvdXAge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuY28taW52aXNpYmxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgPGRpdiBjbGFzcz0nY29sLXhzLTUgdGV4dC1jZW50ZXInPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmQnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtaGVhZGVyJz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICBpZD0nY28tc2VsZWN0YWJsZS1pdGVtcy1zZWxlY3RhYmxlLWZpbHRlcidcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0ZpbHRlcidcbiAgICAgICAgICAgICAgW25nRm9ybUNvbnRyb2xdPSdzZWxlY3RhYmxlRmlsdGVyJz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3M9J2xpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCB0ZXh0LWxlZnQnXG4gICAgICAgICAgICBpZD0nY28tc2VsZWN0YWJsZS1pdGVtcy1zZWxlY3RhYmxlLWxpc3QnXG4gICAgICAgICAgICBbbmdTdHlsZV09J3tcImhlaWdodFwiOiBsaXN0SGVpZ2h0fSc+XG4gICAgICAgICAgICA8bGkgY2xhc3M9J2xpc3QtZ3JvdXAtaXRlbSdcbiAgICAgICAgICAgICAgKm5nRm9yPScjaXRlbSBvZiBzZWxlY3RhYmxlSXRlbXMnXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT0nZ2V0RGlzcGxheUNsYXNzKGl0ZW0sIFwic2VsZWN0YWJsZVwiKSdcbiAgICAgICAgICAgICAgKGNsaWNrKT0nc2VsZWN0SXRlbShpdGVtKSc+XG4gICAgICAgICAgICAgIHt7IGl0ZW0uZGlzcGxheU5hbWUgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPSdjb2wteHMtMiB0ZXh0LWNlbnRlcic+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5J1xuICAgICAgICAgIGlkPSdjby1zZWxlY3RhYmxlLWl0ZW1zLXNlbGVjdC1hbGwnXG4gICAgICAgICAgKGNsaWNrKT0nc2VsZWN0QWxsRmlsdGVyZWQoKSc+XG4gICAgICAgICAgJmd0OyZndDtcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxicj48YnI+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5J1xuICAgICAgICAgIGlkPSdjby1zZWxlY3RhYmxlLWl0ZW1zLWRlc2VsZWN0LWFsbCdcbiAgICAgICAgICAoY2xpY2spPSdkZXNlbGVjdEFsbEZpbHRlcmVkKCknPlxuICAgICAgICAgICZsdDsmbHQ7XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9J2NvbC14cy01IHRleHQtY2VudGVyJz5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWhlYWRlcic+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgaWQ9J2NvLXNlbGVjdGFibGUtaXRlbXMtc2VsZWN0ZWQtZmlsdGVyJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRmlsdGVyJ1xuICAgICAgICAgICAgICBbbmdGb3JtQ29udHJvbF09J3NlbGVjdGVkRmlsdGVyJz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIHRleHQtbGVmdCdcbiAgICAgICAgICAgICAgaWQ9J2NvLXNlbGVjdGFibGUtaXRlbXMtc2VsZWN0ZWQtbGlzdCdcbiAgICAgICAgICAgICAgW25nU3R5bGVdPSd7XCJoZWlnaHRcIjpsaXN0SGVpZ2h0fSc+XG4gICAgICAgICAgICA8bGkgY2xhc3M9J2xpc3QtZ3JvdXAtaXRlbSdcbiAgICAgICAgICAgICAgKm5nRm9yPScjaXRlbSBvZiBzZWxlY3RhYmxlSXRlbXMnXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT0nZ2V0RGlzcGxheUNsYXNzKGl0ZW0sIFwic2VsZWN0ZWRcIiknXG4gICAgICAgICAgICAgIChjbGljayk9J2Rlc2VsZWN0SXRlbShpdGVtKSc+XG4gICAgICAgICAgICAgIHt7IGl0ZW0uZGlzcGxheU5hbWUgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb1NlbGVjdGFibGVJdGVtc0NtcCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RhYmxlSXRlbXM6IEFycmF5PGFueT5cbiAgQElucHV0KCkgcHVibGljIHNlbGVjdGVkSXRlbXM6IEFycmF5PGFueT5cbiAgQElucHV0KCkgcHVibGljIGxpc3RIZWlnaHRcbiAgcHVibGljIHNlbGVjdGFibGVGaWx0ZXIgPSBuZXcgQ29udHJvbCgnJylcbiAgcHVibGljIHNlbGVjdGVkRmlsdGVyID0gbmV3IENvbnRyb2woJycpXG5cbiAgcHVibGljIG5nT25Jbml0ICgpIHtcbiAgICB0aGlzLmluaXRWYWx1ZXMoKVxuICAgIHRoaXMuc3Vic2NyaWJlVG9DaGFuZ2VzKClcbiAgfVxuXG4gIHB1YmxpYyBzdWJzY3JpYmVUb0NoYW5nZXMgKCkge1xuICAgIC8vIHN1YnNjcmliZSB0byBmaWx0ZXIgdXBkYXRlc1xuICAgIHRoaXMuc2VsZWN0YWJsZUZpbHRlci52YWx1ZUNoYW5nZXNcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyU2VsZWN0YWJsZSh0aGlzLnNlbGVjdGFibGVJdGVtcywgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgdGhpcy5zZWxlY3RlZEZpbHRlci52YWx1ZUNoYW5nZXNcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWQodGhpcy5zZWxlY3RhYmxlSXRlbXMsIHZhbHVlKVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJTZWxlY3RhYmxlIChpdGVtcywgdmFsdWUpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmZpbHRlcmVkT3V0U2VsZWN0YWJsZSA9ICAhdGhpcy5maWx0ZXJJdGVtKGl0ZW0uZGlzcGxheU5hbWUsIHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZmlsdGVyU2VsZWN0ZWQgKGl0ZW1zLCB2YWx1ZSkge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RlZCA9ICF0aGlzLmZpbHRlckl0ZW0oaXRlbS5kaXNwbGF5TmFtZSwgdmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBpbml0VmFsdWVzICgpIHtcbiAgICBsZXQgc2VsZWN0YWJsZUxlbmd0aCA9IHRoaXMuc2VsZWN0YWJsZUl0ZW1zLmxlbmd0aFxuICAgIGxldCBpXG4gICAgZm9yIChpID0gMDsgaSA8IHNlbGVjdGFibGVMZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlbGVjdGFibGVJdGVtID0gdGhpcy5zZWxlY3RhYmxlSXRlbXNbaV1cbiAgICAgIHNlbGVjdGFibGVJdGVtLmZpbHRlcmVkT3V0U2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgc2VsZWN0YWJsZUl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RhYmxlID0gZmFsc2VcbiAgICAgIHNlbGVjdGFibGVJdGVtLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoKHNlbGVjdGVkSXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gZGVlcEVxdWFsKHNlbGVjdGVkSXRlbSwgc2VsZWN0YWJsZUl0ZW0ucmVmVmFsdWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJJdGVtIChpdGVtU3RyLCBmaWx0ZXJTdHIpIHtcbiAgICBsZXQgaXRlbVN0ckxjID0gaXRlbVN0ci50b0xvd2VyQ2FzZSgpXG4gICAgbGV0IGZpbHRlclN0ckxjID0gZmlsdGVyU3RyLnRvTG93ZXJDYXNlKClcbiAgICByZXR1cm4gaXRlbVN0ckxjLmluZGV4T2YoZmlsdGVyU3RyTGMpICE9PSAtMVxuICB9XG5cbiAgcHVibGljIHNob3VsZEhpZGUgKGl0ZW0sIGxpc3RUeXBlKSB7XG4gICAgbGV0IGhpZGUgPSBmYWxzZVxuICAgIGxldCBzZWxlY3RhYmxlQW5kU2VsZWN0ZWQgPSBsaXN0VHlwZSA9PT0gJ3NlbGVjdGFibGUnICYmIGl0ZW0uc2VsZWN0ZWRcbiAgICBsZXQgc2VsZWN0YWJsZUFuZEZpbHRlcmVkT3V0ID0gbGlzdFR5cGUgPT09ICdzZWxlY3RhYmxlJyAmJiBpdGVtLmZpbHRlcmVkT3V0U2VsZWN0YWJsZVxuICAgIGxldCBzZWxlY3RlZEFuZE5vdFNlbGVjdGVkID0gbGlzdFR5cGUgPT09ICdzZWxlY3RlZCcgJiYgIWl0ZW0uc2VsZWN0ZWRcbiAgICBsZXQgc2VsZWN0ZWRBbmRGaWx0ZXJlZE91dCA9IGxpc3RUeXBlID09PSAnc2VsZWN0ZWQnICYmIGl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RlZFxuICAgIGlmIChzZWxlY3RhYmxlQW5kU2VsZWN0ZWQgfHwgc2VsZWN0ZWRBbmROb3RTZWxlY3RlZCB8fCBzZWxlY3RhYmxlQW5kRmlsdGVyZWRPdXQgfHwgc2VsZWN0ZWRBbmRGaWx0ZXJlZE91dCkge1xuICAgICAgaGlkZSA9IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGhpZGVcbiAgfVxuXG4gIHB1YmxpYyBnZXREaXNwbGF5Q2xhc3MgKGl0ZW0sIGxpc3RUeXBlKSB7XG4gICAgbGV0IGRpc3BsYXlDbGFzcyA9IFZJU0lCTEVfQ0xBU1NcbiAgICBpZiAodGhpcy5zaG91bGRIaWRlKGl0ZW0sIGxpc3RUeXBlKSkge1xuICAgICAgZGlzcGxheUNsYXNzID0gSU5WSVNJQkxFX0NMQVNTXG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5Q2xhc3NcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RJdGVtIChpdGVtVG9TZWxlY3QpIHtcbiAgICBpdGVtVG9TZWxlY3Quc2VsZWN0ZWQgPSB0cnVlXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbVRvU2VsZWN0LnJlZlZhbHVlKVxuICB9XG5cbiAgcHVibGljIHNlbGVjdEFsbEZpbHRlcmVkICgpIHtcbiAgICB0aGlzLnNlbGVjdGFibGVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uc2VsZWN0ZWQgJiYgIWl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbShpdGVtKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZGVzZWxlY3RJdGVtIChpdGVtVG9VbnNlbGVjdCkge1xuICAgIGl0ZW1Ub1Vuc2VsZWN0LnNlbGVjdGVkID0gZmFsc2VcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaCgoc2VsZWN0ZWRJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGlzRXF1YWwgPSBkZWVwRXF1YWwoaXRlbVRvVW5zZWxlY3QucmVmVmFsdWUsIHNlbGVjdGVkSXRlbSlcbiAgICAgIGlmIChpc0VxdWFsKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZGVzZWxlY3RBbGxGaWx0ZXJlZCAoKSB7XG4gICAgdGhpcy5zZWxlY3RhYmxlSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgJiYgIWl0ZW0uZmlsdGVyZWRPdXRTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0SXRlbShpdGVtKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTQ1NjAxMy9qYXZhc2NyaXB0LWRlZXBlcXVhbC1jb21wYXJpc29uXG5mdW5jdGlvbiBkZWVwRXF1YWwgKHgsIHkpIHtcbiAgaWYgKCh0eXBlb2YgeCA9PSAnb2JqZWN0JyAmJiB4ICE9IG51bGwpICYmICh0eXBlb2YgeSA9PSAnb2JqZWN0JyAmJiB5ICE9IG51bGwpKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHgpLmxlbmd0aCAhPSBPYmplY3Qua2V5cyh5KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBmb3IgKHZhciBwcm9wIGluIHgpIHtcbiAgICAgIGlmICh5Lmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIGlmICghZGVlcEVxdWFsKHhbcHJvcF0sIHlbcHJvcF0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2UgaWYgKHggIT09IHkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9ub2RlX21vZHVsZXMifQ==
