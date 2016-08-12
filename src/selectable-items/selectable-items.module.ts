import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { SelectableItemsComponent } from './selectable-items.component'

@NgModule({
  declarations: [SelectableItemsComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [SelectableItemsComponent]
})
export class SelectableItemsModule { }