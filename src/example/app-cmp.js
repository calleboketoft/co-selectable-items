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
}());
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUvYXBwLWNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQzFCLENBQUMsQ0FEd0M7QUFDekMsd0NBQXFDLGdEQUVyQyxDQUFDLENBRm9GO0FBZ0JyRjtJQU1FO1FBQ0UscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckI7Z0JBQ0UsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLFFBQVEsRUFBRTtvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLFFBQVEsRUFBRTtvQkFDUixLQUFLLEVBQUUsT0FBTztvQkFDZCxJQUFJLEVBQUUsT0FBTztvQkFDYixHQUFHLEVBQUUsUUFBUTtpQkFDZDthQUNGO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLFFBQVEsRUFBRTtvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsU0FBUztpQkFDaEI7YUFDRjtZQUNEO2dCQUNFLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7YUFDRjtTQUNGLENBQUE7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsUUFBUTthQUNkO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUF4RUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxVQUFVLEVBQUUsQ0FBQyw4Q0FBb0IsQ0FBQztZQUNsQyxRQUFRLEVBQUMsd1NBU1I7U0FDRixDQUFDOztjQUFBO0lBNERGLGFBQUM7QUFBRCxDQTNEQSxBQTJEQyxJQUFBO0FBM0RZLGNBQU0sU0EyRGxCLENBQUEiLCJmaWxlIjoiZXhhbXBsZS9hcHAtY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7IENvU2VsZWN0YWJsZUl0ZW1zQ21wIH0gZnJvbSAnLi4vY28tc2VsZWN0YWJsZS1pdGVtcy9jby1zZWxlY3RhYmxlLWl0ZW1zLWNtcCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY28tc2VsZWN0YWJsZS1pdGVtcy1leGFtcGxlJyxcbiAgZGlyZWN0aXZlczogW0NvU2VsZWN0YWJsZUl0ZW1zQ21wXSxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDI1cHg7XCI+XG4gICAgICA8aDM+Y28tc2VsZWN0YWJsZS1pdGVtczwvaDM+XG4gICAgICA8Y28tc2VsZWN0YWJsZS1pdGVtc1xuICAgICAgICBbc2VsZWN0YWJsZUl0ZW1zXT1cInNlbGVjdGFibGVJdGVtc1wiXG4gICAgICAgIFtzZWxlY3RlZEl0ZW1zXT1cInNlbGVjdGVkSXRlbXNcIlxuICAgICAgICBbbGlzdEhlaWdodF09XCInMTUwcHgnXCI+XG4gICAgICA8L2NvLXNlbGVjdGFibGUtaXRlbXM+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ21wIHtcblxuICBzZWxlY3RhYmxlSXRlbXNcblxuICBzZWxlY3RlZEl0ZW1zXG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8vIFByZXBhcmVkIG1vY2sgZGF0YVxuICAgIHRoaXMuc2VsZWN0YWJsZUl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBkaXNwbGF5TmFtZTogJ1N0cmF3YmVycnknLFxuICAgICAgICByZWZWYWx1ZToge1xuICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICBpdGVtOiAnZnJ1aXQnLFxuICAgICAgICAgIHRhc3R5OiAneWVwJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXNwbGF5TmFtZTogJ0JlYXInLFxuICAgICAgICByZWZWYWx1ZToge1xuICAgICAgICAgIGl0ZW06ICdhbmltYWwnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ2FjdHVzJyxcbiAgICAgICAgcmVmVmFsdWU6IHtcbiAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICBpdGVtOiAncGxhbnQnLFxuICAgICAgICAgIGhhczogJ3NwaWtlcydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdGaXJlJyxcbiAgICAgICAgcmVmVmFsdWU6IHtcbiAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaXRlbTogJ2VsZW1lbnQnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQ2FsbGUnLFxuICAgICAgICByZWZWYWx1ZToge1xuICAgICAgICAgIHR5cGU6ICdwZXJzb24nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG5cbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgaXRlbTogJ2ZydWl0JyxcbiAgICAgICAgdGFzdHk6ICd5ZXAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgaXRlbTogJ3BsYW50JyxcbiAgICAgICAgaGFzOiAnc3Bpa2VzJ1xuICAgICAgfVxuICAgIF1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvbm9kZV9tb2R1bGVzIn0=
