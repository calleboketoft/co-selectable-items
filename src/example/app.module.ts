import { NgModule } from '@angular/core'
import { BrowserModule  } from '@angular/platform-browser'
import { SelectableItemsModule } from '../../'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SelectableItemsModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
