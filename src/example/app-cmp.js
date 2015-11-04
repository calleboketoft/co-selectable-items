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
var co_selectable_items_cmp_1 = require('../co-selectable-items/co-selectable-items-cmp');
var AppCmp = (function () {
    function AppCmp() {
        this.selectableItems = [
            { refValue: { key: 'blipp', value: 'beep' },
                displayName: 'A blipper that beeps' },
            { refValue: { key: 'Testing', value: 'something' },
                displayName: 'Just testing' },
            { refValue: { key: 'Having a great', value: 'experiment going on' },
                displayName: 'Need to get this' },
            { refValue: { key: 'calle', value: 'tjena' },
                displayName: 'Carl' },
            { refValue: { key: 'asdf', value: 'tjefdsfna' },
                displayName: 'Lasse' }
        ];
        this.selectedItems = [
            { key: 'blipp', value: 'beep' },
            { key: 'Having a great', value: 'experiment going on' }
        ];
    }
    AppCmp = __decorate([
        angular2_1.Component({
            selector: 'co-selectable-items-example',
            template: "\n    <div class=\"container\" style=\"margin-top: 25px;\">\n      <h3>co-selectable-items</h3>\n      <co-selectable-items\n        [selectable-items]=\"selectableItems\"\n        [selected-items]=\"selectedItems\">\n      </co-selectable-items>\n    </div>\n  ",
            directives: [co_selectable_items_cmp_1.CoSelectableItemsCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
//# sourceMappingURL=app-cmp.js.map