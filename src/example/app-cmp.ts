import { Component } from 'angular2/angular2'
import { CoSelectableItemsCmp } from '../co-selectable-items/co-selectable-items-cmp'

@Component({
  selector: 'co-selectable-items-example',
  directives: [CoSelectableItemsCmp],
  template:`
    <div class="container" style="margin-top: 25px;">
      <h3>co-selectable-items</h3>
      <co-selectable-items
        [selectable-items]="selectableItems"
        [selected-items]="selectedItems"
        [list-height]="'150px'">
      </co-selectable-items>
    </div>
  `
})
export class AppCmp {
  
  selectableItems
  
  selectedItems
  
  constructor () {
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
    ]
    
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
    ]
  }
}
