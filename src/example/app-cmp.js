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
            template: "\n    <div class='container' style='margin-top: 25px;'>\n      <h3>co-selectable-items</h3>\n      <co-selectable-items\n        [selectableItems]='selectableItems'\n        [selectedItems]='selectedItems'\n        [listHeight]='\"150px\"'>\n      </co-selectable-items>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUvYXBwLWNtcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQzFCLENBQUMsQ0FEd0M7QUFDekMsd0NBQXFDLGdEQUVyQyxDQUFDLENBRm9GO0FBZ0JyRjtJQU1FO1FBQ0UscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckI7Z0JBQ0UsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLFFBQVEsRUFBRTtvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsS0FBSztpQkFDYjthQUNGO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLFFBQVE7Z0JBQ3JCLFFBQVEsRUFBRTtvQkFDUixLQUFLLEVBQUUsT0FBTztvQkFDZCxJQUFJLEVBQUUsT0FBTztvQkFDYixHQUFHLEVBQUUsUUFBUTtpQkFDZDthQUNGO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLFFBQVEsRUFBRTtvQkFDUixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsU0FBUztpQkFDaEI7YUFDRjtZQUNEO2dCQUNFLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7YUFDRjtTQUNGLENBQUE7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsUUFBUTthQUNkO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUF4RUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxVQUFVLEVBQUUsQ0FBQyw4Q0FBb0IsQ0FBQztZQUNsQyxRQUFRLEVBQUMsZ1NBU1I7U0FDRixDQUFDOztjQUFBO0lBNERGLGFBQUM7QUFBRCxDQTNEQSxBQTJEQyxJQUFBO0FBM0RZLGNBQU0sU0EyRGxCLENBQUEiLCJmaWxlIjoiZXhhbXBsZS9hcHAtY21wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7IENvU2VsZWN0YWJsZUl0ZW1zQ21wIH0gZnJvbSAnLi4vY28tc2VsZWN0YWJsZS1pdGVtcy9jby1zZWxlY3RhYmxlLWl0ZW1zLWNtcCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY28tc2VsZWN0YWJsZS1pdGVtcy1leGFtcGxlJyxcbiAgZGlyZWN0aXZlczogW0NvU2VsZWN0YWJsZUl0ZW1zQ21wXSxcbiAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcicgc3R5bGU9J21hcmdpbi10b3A6IDI1cHg7Jz5cbiAgICAgIDxoMz5jby1zZWxlY3RhYmxlLWl0ZW1zPC9oMz5cbiAgICAgIDxjby1zZWxlY3RhYmxlLWl0ZW1zXG4gICAgICAgIFtzZWxlY3RhYmxlSXRlbXNdPSdzZWxlY3RhYmxlSXRlbXMnXG4gICAgICAgIFtzZWxlY3RlZEl0ZW1zXT0nc2VsZWN0ZWRJdGVtcydcbiAgICAgICAgW2xpc3RIZWlnaHRdPSdcIjE1MHB4XCInPlxuICAgICAgPC9jby1zZWxlY3RhYmxlLWl0ZW1zPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENtcCB7XG5cbiAgc2VsZWN0YWJsZUl0ZW1zXG5cbiAgc2VsZWN0ZWRJdGVtc1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBQcmVwYXJlZCBtb2NrIGRhdGFcbiAgICB0aGlzLnNlbGVjdGFibGVJdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdTdHJhd2JlcnJ5JyxcbiAgICAgICAgcmVmVmFsdWU6IHtcbiAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgaXRlbTogJ2ZydWl0JyxcbiAgICAgICAgICB0YXN0eTogJ3llcCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdCZWFyJyxcbiAgICAgICAgcmVmVmFsdWU6IHtcbiAgICAgICAgICBpdGVtOiAnYW5pbWFsJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXNwbGF5TmFtZTogJ0NhY3R1cycsXG4gICAgICAgIHJlZlZhbHVlOiB7XG4gICAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgICAgaXRlbTogJ3BsYW50JyxcbiAgICAgICAgICBoYXM6ICdzcGlrZXMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiAnRmlyZScsXG4gICAgICAgIHJlZlZhbHVlOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgIGl0ZW06ICdlbGVtZW50J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXNwbGF5TmFtZTogJ0NhbGxlJyxcbiAgICAgICAgcmVmVmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiAncGVyc29uJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIGl0ZW06ICdmcnVpdCcsXG4gICAgICAgIHRhc3R5OiAneWVwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgIGl0ZW06ICdwbGFudCcsXG4gICAgICAgIGhhczogJ3NwaWtlcydcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL25vZGVfbW9kdWxlcyJ9
