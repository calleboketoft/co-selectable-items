"use strict";
function fixtures() {
    return {
        initSelectable: [
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
        ],
        initSelected: [
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
        ],
        initSelectedDifferentPropOrder: [
            {
                tasty: 'yep',
                color: 'red',
                item: 'fruit'
            },
            {
                item: 'plant',
                color: 'green',
                has: 'spikes'
            }
        ],
        initDone: [
            {
                "displayName": "Strawberry",
                "refValue": {
                    "color": "red",
                    "item": "fruit",
                    "tasty": "yep"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Bear",
                "refValue": {
                    "item": "animal"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Cactus",
                "refValue": {
                    "color": "green",
                    "item": "plant",
                    "has": "spikes"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Fire",
                "refValue": {
                    "color": "red",
                    "item": "element"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Calle",
                "refValue": {
                    "type": "person"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            }
        ],
        filterIsolatedBefore: [
            {
                "displayName": "Strawberry",
                "refValue": {
                    "color": "red"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Strong",
                "refValue": {
                    "item": "iron"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            }
        ],
        filterIsolatedSelectedAfter: [
            {
                "displayName": "Strawberry",
                "refValue": {
                    "color": "red"
                },
                "filteredOutSelected": true,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Strong",
                "refValue": {
                    "item": "iron"
                },
                "filteredOutSelected": true,
                "filteredOutSelectable": false,
                "selected": false
            }
        ],
        filterIsolatedSelectableAfter: [
            {
                "displayName": "Strawberry",
                "refValue": {
                    "color": "red"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": true,
                "selected": true
            },
            {
                "displayName": "Strong",
                "refValue": {
                    "item": "iron"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": true,
                "selected": false
            }
        ],
        selectedBearSelected: [
            {
                color: 'red',
                item: 'fruit',
                tasty: 'yep'
            },
            {
                color: 'green',
                item: 'plant',
                has: 'spikes'
            },
            {
                item: 'animal'
            }
        ],
        selectedBearSelectable: [
            {
                "displayName": "Strawberry",
                "refValue": {
                    "color": "red",
                    "item": "fruit",
                    "tasty": "yep"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Bear",
                "refValue": {
                    "item": "animal"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Cactus",
                "refValue": {
                    "color": "green",
                    "item": "plant",
                    "has": "spikes"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Fire",
                "refValue": {
                    "color": "red",
                    "item": "element"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Calle",
                "refValue": {
                    "type": "person"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            }
        ],
        deselectedCactusSelected: [
            {
                color: 'red',
                item: 'fruit',
                tasty: 'yep'
            }
        ],
        deselectedCactusSelectable: [
            {
                "displayName": "Strawberry",
                "refValue": {
                    "color": "red",
                    "item": "fruit",
                    "tasty": "yep"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Bear",
                "refValue": {
                    "item": "animal"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Cactus",
                "refValue": {
                    "color": "green",
                    "item": "plant",
                    "has": "spikes"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Fire",
                "refValue": {
                    "color": "red",
                    "item": "element"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Calle",
                "refValue": {
                    "type": "person"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            }
        ],
        selectFilteredSelectable: [
            {
                "displayName": "Strawberry",
                "refValue": {
                    "color": "red",
                    "item": "fruit",
                    "tasty": "yep"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Bear",
                "refValue": {
                    "item": "animal"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Cactus",
                "refValue": {
                    "color": "green",
                    "item": "plant",
                    "has": "spikes"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Fire",
                "refValue": {
                    "color": "red",
                    "item": "element"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": true,
                "selected": false
            },
            {
                "displayName": "Calle",
                "refValue": {
                    "type": "person"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": true
            }
        ],
        selectFilteredSelected: [
            {
                color: 'red',
                item: 'fruit',
                tasty: 'yep'
            },
            {
                color: 'green',
                item: 'plant',
                has: 'spikes'
            },
            {
                item: 'animal'
            },
            {
                type: 'person'
            }
        ],
        deselectFilteredSelectable: [
            {
                "displayName": "Strawberry",
                "refValue": {
                    "color": "red",
                    "item": "fruit",
                    "tasty": "yep"
                },
                "filteredOutSelected": true,
                "filteredOutSelectable": false,
                "selected": true
            },
            {
                "displayName": "Bear",
                "refValue": {
                    "item": "animal"
                },
                "filteredOutSelected": true,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Cactus",
                "refValue": {
                    "color": "green",
                    "item": "plant",
                    "has": "spikes"
                },
                "filteredOutSelected": false,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Fire",
                "refValue": {
                    "color": "red",
                    "item": "element"
                },
                "filteredOutSelected": true,
                "filteredOutSelectable": false,
                "selected": false
            },
            {
                "displayName": "Calle",
                "refValue": {
                    "type": "person"
                },
                "filteredOutSelected": true,
                "filteredOutSelectable": false,
                "selected": false
            }
        ],
        deselectFilteredSelected: [
            {
                "color": "red",
                "item": "fruit",
                "tasty": "yep"
            }
        ],
        itemSelectedNoFilter: {
            "displayName": "Calle",
            "refValue": {
                "type": "person"
            },
            "filteredOutSelected": false,
            "filteredOutSelectable": false,
            "selected": true
        },
        itemSelectedFilteredOutSelected: {
            "displayName": "Calle",
            "refValue": {
                "type": "person"
            },
            "filteredOutSelected": true,
            "filteredOutSelectable": false,
            "selected": true
        },
        itemSelectedFilteredOutSelectable: {
            "displayName": "Calle",
            "refValue": {
                "type": "person"
            },
            "filteredOutSelected": false,
            "filteredOutSelectable": true,
            "selected": true
        },
        itemSelectedFilteredOutBoth: {
            "displayName": "Calle",
            "refValue": {
                "type": "person"
            },
            "filteredOutSelected": true,
            "filteredOutSelectable": true,
            "selected": true
        },
        itemNotSelectedNoFilter: {
            "displayName": "Calle",
            "refValue": {
                "type": "person"
            },
            "filteredOutSelected": false,
            "filteredOutSelectable": false,
            "selected": false
        },
        itemNotSelectedFilteredOutSelectable: {
            "displayName": "Calle",
            "refValue": {
                "type": "person"
            },
            "filteredOutSelected": false,
            "filteredOutSelectable": true,
            "selected": false
        },
        itemNotSelectedFilteredOutSelected: {
            "displayName": "Calle",
            "refValue": {
                "type": "person"
            },
            "filteredOutSelected": true,
            "filteredOutSelectable": false,
            "selected": false
        },
        itemNotSelectedFilteredOutBoth: {
            "displayName": "Calle",
            "refValue": {
                "type": "person"
            },
            "filteredOutSelected": true,
            "filteredOutSelectable": true,
            "selected": false
        }
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fixtures;

//# sourceMappingURL=data:application/json;base64,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b24gZml4dHVyZXMgKCkge1xuICByZXR1cm4ge1xuICAgIGluaXRTZWxlY3RhYmxlOiBbXG4gICAgICB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiAnU3RyYXdiZXJyeScsXG4gICAgICAgIHJlZlZhbHVlOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgIGl0ZW06ICdmcnVpdCcsXG4gICAgICAgICAgdGFzdHk6ICd5ZXAnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRpc3BsYXlOYW1lOiAnQmVhcicsXG4gICAgICAgIHJlZlZhbHVlOiB7XG4gICAgICAgICAgaXRlbTogJ2FuaW1hbCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDYWN0dXMnLFxuICAgICAgICByZWZWYWx1ZToge1xuICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgIGl0ZW06ICdwbGFudCcsXG4gICAgICAgICAgaGFzOiAnc3Bpa2VzJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkaXNwbGF5TmFtZTogJ0ZpcmUnLFxuICAgICAgICByZWZWYWx1ZToge1xuICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICBpdGVtOiAnZWxlbWVudCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheU5hbWU6ICdDYWxsZScsXG4gICAgICAgIHJlZlZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogJ3BlcnNvbidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG5cbiAgICBpbml0U2VsZWN0ZWQ6IFtcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICBpdGVtOiAnZnJ1aXQnLFxuICAgICAgICB0YXN0eTogJ3llcCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICBpdGVtOiAncGxhbnQnLFxuICAgICAgICBoYXM6ICdzcGlrZXMnXG4gICAgICB9XG4gICAgXSxcblxuICAgIGluaXRTZWxlY3RlZERpZmZlcmVudFByb3BPcmRlcjogW1xuICAgICAge1xuICAgICAgICB0YXN0eTogJ3llcCcsXG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgaXRlbTogJ2ZydWl0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaXRlbTogJ3BsYW50JyxcbiAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgIGhhczogJ3NwaWtlcydcbiAgICAgIH1cbiAgICBdLFxuXG4gICAgaW5pdERvbmU6IFtcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIlN0cmF3YmVycnlcIixcbiAgICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICAgICAgICAgIFwiaXRlbVwiOiBcImZydWl0XCIsXG4gICAgICAgICAgXCJ0YXN0eVwiOiBcInllcFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkJlYXJcIixcbiAgICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJpdGVtXCI6IFwiYW5pbWFsXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhY3R1c1wiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiZ3JlZW5cIixcbiAgICAgICAgICBcIml0ZW1cIjogXCJwbGFudFwiLFxuICAgICAgICAgIFwiaGFzXCI6IFwic3Bpa2VzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRpc3BsYXlOYW1lXCI6IFwiRmlyZVwiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgXCJpdGVtXCI6IFwiZWxlbWVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJDYWxsZVwiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJwZXJzb25cIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXSxcblxuICAgIGZpbHRlcklzb2xhdGVkQmVmb3JlOiBbXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJTdHJhd2JlcnJ5XCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZWRcIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJTdHJvbmdcIixcbiAgICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJpdGVtXCI6IFwiaXJvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgIH1cbiAgICBdLFxuXG4gICAgZmlsdGVySXNvbGF0ZWRTZWxlY3RlZEFmdGVyOiBbXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJTdHJhd2JlcnJ5XCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZWRcIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogdHJ1ZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIlN0cm9uZ1wiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcIml0ZW1cIjogXCJpcm9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IHRydWUsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXSxcblxuICAgIGZpbHRlcklzb2xhdGVkU2VsZWN0YWJsZUFmdGVyOiBbXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJTdHJhd2JlcnJ5XCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZWRcIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IHRydWUsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIlN0cm9uZ1wiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcIml0ZW1cIjogXCJpcm9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiB0cnVlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICB9XG4gICAgXSxcblxuICAgIHNlbGVjdGVkQmVhclNlbGVjdGVkOiBbXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgaXRlbTogJ2ZydWl0JyxcbiAgICAgICAgdGFzdHk6ICd5ZXAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgaXRlbTogJ3BsYW50JyxcbiAgICAgICAgaGFzOiAnc3Bpa2VzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaXRlbTogJ2FuaW1hbCdcbiAgICAgIH1cbiAgICBdLFxuXG4gICAgc2VsZWN0ZWRCZWFyU2VsZWN0YWJsZTogW1xuICAgICAge1xuICAgICAgICBcImRpc3BsYXlOYW1lXCI6IFwiU3RyYXdiZXJyeVwiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgXCJpdGVtXCI6IFwiZnJ1aXRcIixcbiAgICAgICAgICBcInRhc3R5XCI6IFwieWVwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRpc3BsYXlOYW1lXCI6IFwiQmVhclwiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcIml0ZW1cIjogXCJhbmltYWxcIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJDYWN0dXNcIixcbiAgICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcImdyZWVuXCIsXG4gICAgICAgICAgXCJpdGVtXCI6IFwicGxhbnRcIixcbiAgICAgICAgICBcImhhc1wiOiBcInNwaWtlc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkZpcmVcIixcbiAgICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICAgICAgICAgIFwiaXRlbVwiOiBcImVsZW1lbnRcIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRpc3BsYXlOYW1lXCI6IFwiQ2FsbGVcIixcbiAgICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwicGVyc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgfVxuICAgIF0sXG5cbiAgICBkZXNlbGVjdGVkQ2FjdHVzU2VsZWN0ZWQ6IFtcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICBpdGVtOiAnZnJ1aXQnLFxuICAgICAgICB0YXN0eTogJ3llcCdcbiAgICAgIH1cbiAgICBdLFxuICAgIGRlc2VsZWN0ZWRDYWN0dXNTZWxlY3RhYmxlOiBbXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJTdHJhd2JlcnJ5XCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAgICAgICBcIml0ZW1cIjogXCJmcnVpdFwiLFxuICAgICAgICAgIFwidGFzdHlcIjogXCJ5ZXBcIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJCZWFyXCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiaXRlbVwiOiBcImFuaW1hbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJDYWN0dXNcIixcbiAgICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcImdyZWVuXCIsXG4gICAgICAgICAgXCJpdGVtXCI6IFwicGxhbnRcIixcbiAgICAgICAgICBcImhhc1wiOiBcInNwaWtlc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJGaXJlXCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAgICAgICBcIml0ZW1cIjogXCJlbGVtZW50XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhbGxlXCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInBlcnNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgIH1cbiAgICBdLFxuXG4gICAgc2VsZWN0RmlsdGVyZWRTZWxlY3RhYmxlOiBbXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJTdHJhd2JlcnJ5XCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiY29sb3JcIjogXCJyZWRcIixcbiAgICAgICAgICBcIml0ZW1cIjogXCJmcnVpdFwiLFxuICAgICAgICAgIFwidGFzdHlcIjogXCJ5ZXBcIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJCZWFyXCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiaXRlbVwiOiBcImFuaW1hbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhY3R1c1wiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiZ3JlZW5cIixcbiAgICAgICAgICBcIml0ZW1cIjogXCJwbGFudFwiLFxuICAgICAgICAgIFwiaGFzXCI6IFwic3Bpa2VzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRpc3BsYXlOYW1lXCI6IFwiRmlyZVwiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgXCJpdGVtXCI6IFwiZWxlbWVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhbGxlXCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInBlcnNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgc2VsZWN0RmlsdGVyZWRTZWxlY3RlZDogW1xuICAgICAge1xuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIGl0ZW06ICdmcnVpdCcsXG4gICAgICAgIHRhc3R5OiAneWVwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgIGl0ZW06ICdwbGFudCcsXG4gICAgICAgIGhhczogJ3NwaWtlcydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGl0ZW06ICdhbmltYWwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAncGVyc29uJ1xuICAgICAgfVxuICAgIF0sXG5cbiAgICBkZXNlbGVjdEZpbHRlcmVkU2VsZWN0YWJsZTogW1xuICAgICAge1xuICAgICAgICBcImRpc3BsYXlOYW1lXCI6IFwiU3RyYXdiZXJyeVwiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgICAgXCJpdGVtXCI6IFwiZnJ1aXRcIixcbiAgICAgICAgICBcInRhc3R5XCI6IFwieWVwXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IHRydWUsXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGVkXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJCZWFyXCIsXG4gICAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICAgIFwiaXRlbVwiOiBcImFuaW1hbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiB0cnVlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhY3R1c1wiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiZ3JlZW5cIixcbiAgICAgICAgICBcIml0ZW1cIjogXCJwbGFudFwiLFxuICAgICAgICAgIFwiaGFzXCI6IFwic3Bpa2VzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkZpcmVcIixcbiAgICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICAgICAgICAgIFwiaXRlbVwiOiBcImVsZW1lbnRcIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogdHJ1ZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJDYWxsZVwiLFxuICAgICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJwZXJzb25cIlxuICAgICAgICB9LFxuICAgICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogdHJ1ZSxcbiAgICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICAgIH1cbiAgICBdLFxuICAgIGRlc2VsZWN0RmlsdGVyZWRTZWxlY3RlZDogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gICAgICAgIFwiaXRlbVwiOiBcImZydWl0XCIsXG4gICAgICAgIFwidGFzdHlcIjogXCJ5ZXBcIlxuICAgICAgfVxuICAgIF0sXG5cbiAgICBpdGVtU2VsZWN0ZWROb0ZpbHRlcjoge1xuICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhbGxlXCIsXG4gICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwicGVyc29uXCJcbiAgICAgIH0sXG4gICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAgaXRlbVNlbGVjdGVkRmlsdGVyZWRPdXRTZWxlY3RlZDoge1xuICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhbGxlXCIsXG4gICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwicGVyc29uXCJcbiAgICAgIH0sXG4gICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgXCJzZWxlY3RlZFwiOiB0cnVlXG4gICAgfSxcbiAgICBpdGVtU2VsZWN0ZWRGaWx0ZXJlZE91dFNlbGVjdGFibGU6IHtcbiAgICAgIFwiZGlzcGxheU5hbWVcIjogXCJDYWxsZVwiLFxuICAgICAgXCJyZWZWYWx1ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInBlcnNvblwiXG4gICAgICB9LFxuICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGVkXCI6IGZhbHNlLFxuICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogdHJ1ZSxcbiAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAgaXRlbVNlbGVjdGVkRmlsdGVyZWRPdXRCb3RoOiB7XG4gICAgICBcImRpc3BsYXlOYW1lXCI6IFwiQ2FsbGVcIixcbiAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJwZXJzb25cIlxuICAgICAgfSxcbiAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiB0cnVlLFxuICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogdHJ1ZSxcbiAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgIH0sXG5cbiAgICBpdGVtTm90U2VsZWN0ZWROb0ZpbHRlcjoge1xuICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhbGxlXCIsXG4gICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwicGVyc29uXCJcbiAgICAgIH0sXG4gICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiBmYWxzZSxcbiAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICB9LFxuICAgIGl0ZW1Ob3RTZWxlY3RlZEZpbHRlcmVkT3V0U2VsZWN0YWJsZToge1xuICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhbGxlXCIsXG4gICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwicGVyc29uXCJcbiAgICAgIH0sXG4gICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICBcImZpbHRlcmVkT3V0U2VsZWN0YWJsZVwiOiB0cnVlLFxuICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgIH0sXG4gICAgaXRlbU5vdFNlbGVjdGVkRmlsdGVyZWRPdXRTZWxlY3RlZDoge1xuICAgICAgXCJkaXNwbGF5TmFtZVwiOiBcIkNhbGxlXCIsXG4gICAgICBcInJlZlZhbHVlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwicGVyc29uXCJcbiAgICAgIH0sXG4gICAgICBcImZpbHRlcmVkT3V0U2VsZWN0ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RhYmxlXCI6IGZhbHNlLFxuICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZVxuICAgIH0sXG4gICAgaXRlbU5vdFNlbGVjdGVkRmlsdGVyZWRPdXRCb3RoOiB7XG4gICAgICBcImRpc3BsYXlOYW1lXCI6IFwiQ2FsbGVcIixcbiAgICAgIFwicmVmVmFsdWVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJwZXJzb25cIlxuICAgICAgfSxcbiAgICAgIFwiZmlsdGVyZWRPdXRTZWxlY3RlZFwiOiB0cnVlLFxuICAgICAgXCJmaWx0ZXJlZE91dFNlbGVjdGFibGVcIjogdHJ1ZSxcbiAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2VcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZml4dHVyZXNcbiJdLCJzb3VyY2VSb290IjoiL25vZGVfbW9kdWxlcyJ9
