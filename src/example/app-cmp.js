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
var co_selectable_items_cmp_1 = require('../co-selectable-items/co-selectable-items-cmp');
var AppCmp = (function () {
    function AppCmp() {
        // Prepared mock data
        this.selectableItems = [
            {
                displayName: 'Strawberry',
                refValue: {
                    color: 'red',
                    item: 'fruit',
                    tasty: 'yep'
                }
            },
            {
                displayName: 'Bear',
                refValue: {
                    item: 'animal'
                }
            },
            {
                displayName: 'Cactus',
                refValue: {
                    color: 'green',
                    item: 'plant',
                    has: 'spikes'
                }
            },
            {
                displayName: 'Fire',
                refValue: {
                    color: 'red',
                    item: 'element'
                }
            },
            {
                displayName: 'Calle',
                refValue: {
                    type: 'person'
                }
            }
        ];
        this.selectedItems = [
            {
                color: 'red',
                item: 'fruit',
                tasty: 'yep'
            },
            {
                color: 'green',
                item: 'plant',
                has: 'spikes'
            }
        ];
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'co-selectable-items-example',
            directives: [co_selectable_items_cmp_1.CoSelectableItemsCmp],
            template: "\n    <div class='container' style='margin-top: 25px;'>\n      <h3>co-selectable-items example</h3>\n      <br>\n      <co-selectable-items\n        [selectableItems]='selectableItems'\n        [selectableHeader]='\"Selectable\"'\n        [selectedItems]='selectedItems'\n        [selectedHeader]='\"Selected\"'\n        [listHeight]='\"150px\"'>\n      </co-selectable-items>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
//# sourceMappingURL=app-cmp.js.map