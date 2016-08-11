import { Component } from '@angular/core'
import { SelectableItemsComponent } from '../selectable-items/selectable-items.component'

@Component({
  selector: 'selectable-items-example',
  directives: [SelectableItemsComponent],
  template:`
    <div class='container' style='margin-top: 25px;'>
      <h3>selectable-items example</h3>
      <br>
      <selectable-items
        [selectableItems]='selectableItems'
        [selectableHeader]='"Selectable"'
        [selectedItems]='selectedItems'
        [selectedHeader]='"Selected"'
        [listHeight]='"150px"'
        (selectedChanged)="selectedChanged($event)">
      </selectable-items>
    </div>
  `
})
export class AppComponent {

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

  public selectedChanged($event) {
    console.log($event)
  }
}
