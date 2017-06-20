import { LanguageService } from './language-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { DecoratorPipe } from './pipes/decorator.pipe';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { DataBindingChildExampleComponent } from './data-binding-child-example/data-binding-child-example.component';

const ROUTES: Routes = [
 {path: '', redirectTo: 'directives', pathMatch: 'full'},
 {path: 'directives', component: DirectivesExampleComponent},
 {path: 'databinding', component: DataBindingExampleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DirectivesExampleComponent,
    DecoratorPipe,
    DataBindingExampleComponent,
    DataBindingChildExampleComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    LanguageService,
    { provide: LOCALE_ID, 
      deps: [LanguageService],
      useFactory: (LanguageService: LanguageService) => LanguageService.getLanguage()
    }
  ],
  //bootstrap: [DataBindingExampleComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
