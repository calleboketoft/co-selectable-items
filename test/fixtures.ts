function fixtures () {
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
    ]
  }
}

export default fixtures
