import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { DecoratorPipe } from './pipes/decorator.pipe';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { DataBindingChildExampleComponent } from './data-binding-child-example/data-binding-child-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesExampleComponent,
    DecoratorPipe,
    DataBindingExampleComponent,
    DataBindingChildExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DataBindingExampleComponent]
})
export class AppModule { }
