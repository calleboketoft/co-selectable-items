# co-selectable-items

This component can be used when you have a large list of items from which you wish to select a subset to be part of another list.

## Run the example code

- `npm install`
- `npm start`
- navigate to `localhost:3000` in web browser

## Run tests

- `npm test`
- Only unit tests `npm run test-unit`
- Only e2e tests `npm run test-e2e`


## Concept of component

A typical situation would be selecting which user roles a specific user should have. Then there is a list of all roles available and a list for each user specifying which roles the user has.

The component is initialised with two lists: `selectableItems`, which is the list of all the items available plus a display name, and `selectedItems`, which is the selected subset of items.

When selecting and deselecting items, the `selectedItems` list is modified.

An example of user roles:
```javascript
// The original items from the server could look like this:
var originalItems = [
  {
    role: 'admin'
  },
  {
    role: 'support'
  },
  {
    role: 'basic'
  }
]

// In order to use the list of items with this component you
// need to manually transform the list to have a displayName.
// The display name is the string shown to the user
// (especially useful when needing i18n). The actual item is
// stored under the refValue property.
var selectableItems = [
  {
    {
      refValue: {
        role: 'admin'
      },
      displayName: 'Administrator'
    },
    {
      refValue: {
        role: 'support'
      },
      displayName: 'Customer Support'
    },
    {
      refValue: {
        role: 'basic'
      },
      displayName: 'Basic User'
    }
  }
]

// The list of selected items, the roles that the user has.
var selectedItems = [
  {
    role: 'basic'
  },
  {
    role: 'support'
  }
]
```

Component HTML:
```html
<co-selectable-items
  [selectableItems]="selectableItems"
  [selectedItems]="selectedItems"
  [listHeight]="'150px'">
</co-selectable-items>
```
