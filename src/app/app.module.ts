import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { ColorItDirective } from './components/custom-directives/directives/color-it.directive';
import {ColorIt2Directive} from "./components/custom-directives/directives/color-it2.directive";
import {CustomIfDirective} from "./components/custom-directives/directives/custom-if.directive";

@NgModule({
  declarations: [
    AppComponent,
    BuiltInDirectivesComponent,
    CustomDirectivesComponent,
    ColorItDirective,
    ColorIt2Directive,
    CustomIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
