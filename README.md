# co-selectable-items

This component can be used when you have a large list of items from which you wish to select a subset to be part of another list.

## Run the example code

- `npm install`
- `npm run build`
- `npm start` serve the files
- navigate to `localhost:3000` in web browser

## Use in your app

- `npm install --save @calle/ng2-selectable-items`
- Import module `import { SelectableItemsModule } from '@calle/ng2-selectable-items'`
- See `Concept of component` below for usage instructions

## Run tests

- `npm test`
- `npm run test-unit` only unit tests
- `npm run test-e2e` only e2e tests

## Develop

- `npm watch` starts the TypeScript compilation watcher
- `npm start` serve the files


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
<selectable-items
  [selectableItems]="selectableItems"
  [selectedItems]="selectedItems"
  [listHeight]="'150px'"
  [selectableHeader]="'Selectable Items'"
  [selectedHeader]="'Selected Items'"
  (selectedChanged)="someFunction($event)">
</selectable-items>
```
