import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInDirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
