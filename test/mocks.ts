let mocks = {
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

  caseInsensitiveBefore: [
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
    }
  ],

  caseInsensitiveAfter: [
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
    }
  ]
}

export default mocks
