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
            template: "\n    <div class=\"container\" style=\"margin-top: 25px;\">\n      <h3>co-selectable-items</h3>\n      <co-selectable-items\n        [selectableItems]=\"selectableItems\"\n        [selectedItems]=\"selectedItems\"\n        [listHeight]=\"'150px'\">\n      </co-selectable-items>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUvYXBwLWNtcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUMxQixDQUFDLENBRHdDO0FBQ3pDLHdDQUFxQyxnREFFckMsQ0FBQyxDQUZvRjtBQUVyRjtJQW9CRUE7UUFDRUMscUJBQXFCQTtRQUNyQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0E7WUFDckJBO2dCQUNFQSxXQUFXQSxFQUFFQSxZQUFZQTtnQkFDekJBLFFBQVFBLEVBQUVBO29CQUNSQSxLQUFLQSxFQUFFQSxLQUFLQTtvQkFDWkEsSUFBSUEsRUFBRUEsT0FBT0E7b0JBQ2JBLEtBQUtBLEVBQUVBLEtBQUtBO2lCQUNiQTthQUNGQTtZQUNEQTtnQkFDRUEsV0FBV0EsRUFBRUEsTUFBTUE7Z0JBQ25CQSxRQUFRQSxFQUFFQTtvQkFDUkEsSUFBSUEsRUFBRUEsUUFBUUE7aUJBQ2ZBO2FBQ0ZBO1lBQ0RBO2dCQUNFQSxXQUFXQSxFQUFFQSxRQUFRQTtnQkFDckJBLFFBQVFBLEVBQUVBO29CQUNSQSxLQUFLQSxFQUFFQSxPQUFPQTtvQkFDZEEsSUFBSUEsRUFBRUEsT0FBT0E7b0JBQ2JBLEdBQUdBLEVBQUVBLFFBQVFBO2lCQUNkQTthQUNGQTtZQUNEQTtnQkFDRUEsV0FBV0EsRUFBRUEsTUFBTUE7Z0JBQ25CQSxRQUFRQSxFQUFFQTtvQkFDUkEsS0FBS0EsRUFBRUEsS0FBS0E7b0JBQ1pBLElBQUlBLEVBQUVBLFNBQVNBO2lCQUNoQkE7YUFDRkE7WUFDREE7Z0JBQ0VBLFdBQVdBLEVBQUVBLE9BQU9BO2dCQUNwQkEsUUFBUUEsRUFBRUE7b0JBQ1JBLElBQUlBLEVBQUVBLFFBQVFBO2lCQUNmQTthQUNGQTtTQUNGQSxDQUFBQTtRQUVEQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQTtZQUNuQkE7Z0JBQ0VBLEtBQUtBLEVBQUVBLEtBQUtBO2dCQUNaQSxJQUFJQSxFQUFFQSxPQUFPQTtnQkFDYkEsS0FBS0EsRUFBRUEsS0FBS0E7YUFDYkE7WUFDREE7Z0JBQ0VBLEtBQUtBLEVBQUVBLE9BQU9BO2dCQUNkQSxJQUFJQSxFQUFFQSxPQUFPQTtnQkFDYkEsR0FBR0EsRUFBRUEsUUFBUUE7YUFDZEE7U0FDRkEsQ0FBQUE7SUFDSEEsQ0FBQ0E7SUF4RUhEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSw2QkFBNkJBO1lBQ3ZDQSxVQUFVQSxFQUFFQSxDQUFDQSw4Q0FBb0JBLENBQUNBO1lBQ2xDQSxRQUFRQSxFQUFDQSx3U0FTUkE7U0FDRkEsQ0FBQ0E7O2VBNEREQTtJQUFEQSxhQUFDQTtBQUFEQSxDQXpFQSxBQXlFQ0EsSUFBQTtBQTNEWSxjQUFNLFNBMkRsQixDQUFBIiwiZmlsZSI6ImV4YW1wbGUvYXBwLWNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQgeyBDb1NlbGVjdGFibGVJdGVtc0NtcCB9IGZyb20gJy4uL2NvLXNlbGVjdGFibGUtaXRlbXMvY28tc2VsZWN0YWJsZS1pdGVtcy1jbXAnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvLXNlbGVjdGFibGUtaXRlbXMtZXhhbXBsZScsXG4gIGRpcmVjdGl2ZXM6IFtDb1NlbGVjdGFibGVJdGVtc0NtcF0sXG4gIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyNXB4O1wiPlxuICAgICAgPGgzPmNvLXNlbGVjdGFibGUtaXRlbXM8L2gzPlxuICAgICAgPGNvLXNlbGVjdGFibGUtaXRlbXNcbiAgICAgICAgW3NlbGVjdGFibGVJdGVtc109XCJzZWxlY3RhYmxlSXRlbXNcIlxuICAgICAgICBbc2VsZWN0ZWRJdGVtc109XCJzZWxlY3RlZEl0ZW1zXCJcbiAgICAgICAgW2xpc3RIZWlnaHRdPVwiJzE1MHB4J1wiPlxuICAgICAgPC9jby1zZWxlY3RhYmxlLWl0ZW1zPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENtcCB7XG5cbiAgc2VsZWN0YWJsZUl0ZW1zXG5cbiAgc2VsZWN0ZWRJdGVtc1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBQcmVwYXJlZCBtb2NrIGRhdGFcbiAgICB0aGlzLnNlbGVjdGFibGVJdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdTdHJhd2JlcnJ5JyxcbiAgICAgICAgcmVmVmFsdWU6IHtcbiAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaXRlbTogJ2ZydWl0JyxcbiAgICAgICAgICB0YXN0eTogJ3llcCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdCZWFyJyxcbiAgICAgICAgcmVmVmFsdWU6IHtcbiAgICAgICAgICBpdGVtOiAnYW5pbWFsJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXNwbGF5TmFtZTogJ0NhY3R1cycsXG4gICAgICAgIHJlZlZhbHVlOiB7XG4gICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgaXRlbTogJ3BsYW50JyxcbiAgICAgICAgICBoYXM6ICdzcGlrZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiAnRmlyZScsXG4gICAgICAgIHJlZlZhbHVlOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgIGl0ZW06ICdlbGVtZW50J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXNwbGF5TmFtZTogJ0NhbGxlJyxcbiAgICAgICAgcmVmVmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiAncGVyc29uJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIGl0ZW06ICdmcnVpdCcsXG4gICAgICAgIHRhc3R5OiAneWVwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgIGl0ZW06ICdwbGFudCcsXG4gICAgICAgIGhhczogJ3NwaWtlcydcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL25vZGVfbW9kdWxlcyJ9
