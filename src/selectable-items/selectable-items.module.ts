import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SelectableItemsComponent } from './selectable-items.component'

@NgModule({
  declarations: [SelectableItemsComponent],
  imports: [BrowserModule],
  exports: [SelectableItemsComponent]
})
export class SelectableItemsModule { }