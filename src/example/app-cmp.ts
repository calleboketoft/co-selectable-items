import { Component } from 'angular2/angular2'
import { CoSelectableItemsCmp } from '../co-selectable-items/co-selectable-items-cmp'

@Component({
  selector: 'co-selectable-items-example',
  template:`
    <div class="container" style="margin-top: 25px;">
      <h3>co-selectable-items</h3>
      <co-selectable-items
        [selectable-items]="selectableItems"
        [selected-items]="selectedItems"
        [list-height]="'350px'">
      </co-selectable-items>
    </div>
  `,
  directives: [CoSelectableItemsCmp]
})
export class AppCmp {
  selectableItems
  selectedItems
  constructor () {
    this.selectableItems = [
      { refValue: { key: 'blipp', value: 'beep' },
        displayName: 'A blipper that beeps' },
      { refValue: { key: 'Testing', value: 'something' },
        displayName: 'Just testing' },
      { refValue: { key: 'Having a great', value: 'experiment going on' },
        displayName: 'Need to get this' },
      { refValue: { key: 'calle', value: 'tjena' },
        displayName: 'Carl' },
      { refValue: { key: 'asdf', value: 'tjefdsfna' },
        displayName: 'Lasse' }
    ]
    this.selectedItems = [
      { key: 'blipp', value: 'beep' },
      { key: 'Having a great', value: 'experiment going on' }
    ]
  }
}
