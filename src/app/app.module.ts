import { LoginModule } from './login/login.module';
import { ListUsersModule } from './list-users/list-users.module';
import { ConfirmService } from './confirm-service.service';
import { AuthService } from './auth-service.service';
import { LanguageService } from './language-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { DecoratorPipe } from './pipes/decorator.pipe';
import { DataBindingExampleComponent } from './data-binding-example/data-binding-example.component';
import { DataBindingChildExampleComponent } from './data-binding-child-example/data-binding-child-example.component';
import { TutorialDetailComponentComponent } from './tutorial-detail-component/tutorial-detail-component.component';

const ROUTES: Routes = [
 {path: '', redirectTo: 'directives', pathMatch: 'full'},
 {path: 'directives', component: DirectivesExampleComponent},
 {path: 'databinding', component: DataBindingExampleComponent},
 {path: 'detail/:id', component: TutorialDetailComponentComponent},
 //{path: 'detail', component: TutorialDetailComponentComponent}
 {path: 'detail', component: TutorialDetailComponentComponent, canActivate: [AuthService], canDeactivate: [ConfirmService]}
];

export function getLanguage(languageService: LanguageService){
  return languageService.getLanguage();
}
@NgModule({
  declarations: [
    AppComponent,
    DirectivesExampleComponent,
    DecoratorPipe,
    DataBindingExampleComponent,
    DataBindingChildExampleComponent,
    TutorialDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ListUsersModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    LanguageService,
    AuthService,
    ConfirmService,
    { provide: LOCALE_ID, 
      deps: [LanguageService],
      useFactory: getLanguage
    }
  ],
  //bootstrap: [DataBindingExampleComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
