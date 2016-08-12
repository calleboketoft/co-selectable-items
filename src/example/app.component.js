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
var AppComponent = (function () {
    function AppComponent() {
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
    AppComponent.prototype.selectedChanged = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'selectable-items-example',
            template: "\n    <div class='container' style='margin-top: 25px;'>\n      <h3>selectable-items example</h3>\n      <br>\n      <selectable-items\n        [selectableItems]='selectableItems'\n        [selectableHeader]='\"Selectable\"'\n        [selectedItems]='selectedItems'\n        [selectedHeader]='\"Selected\"'\n        [listHeight]='\"150px\"'\n        (selectedChanged)=\"selectedChanged($event)\">\n      </selectable-items>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map