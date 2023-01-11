import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { ColorItDirective } from './components/custom-directives/directives/color-it.directive';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInDirectivesComponent,
    CustomDirectivesComponent,
    ColorItDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
