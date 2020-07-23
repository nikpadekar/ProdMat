import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { MyAppComponent, CustomizeAppDialog } from './my-app/my-app.component';
import { PublishStoryComponent } from './publish-story/publish-story.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SignupComponent } from './signup/signup.component';
// import { ModifyAppComponent } from './modals/modify-app/modify-app.component';
import { TemplatesComponent, CustomizeTemplateDialog } from './templates/templates.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
// import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  { path: 'my-app', component: MyAppComponent },
  { path: 'publish-story', component: PublishStoryComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPassComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    MyAppComponent,
    PublishStoryComponent,
    TemplatesComponent,
    AdminPanelComponent,
    LoginComponent,
    ForgotPassComponent,
    SignupComponent,
    CustomizeTemplateDialog,
    CustomizeAppDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MaterialModule,
    CarouselModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
