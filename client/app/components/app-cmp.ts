import { Component } from 'angular2/angular2'
import { CoSelectableItemsCmp } from './co-selectable-items/co-selectable-items-cmp'

@Component({
  selector: 'app',
  templateUrl: 'app/components/app-cmp.html',
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