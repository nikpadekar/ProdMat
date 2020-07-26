import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavComponent } from './_layouts/admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MyAppComponent, CustomizeAppDialog } from './my-app/my-app.component';
import { PublishStoryComponent } from './publish-story/publish-story.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { SignupComponent } from './signup/signup.component';
import { AssignUserRightsComponent } from './assign-user-rights/assign-user-rights.component';

import {
  TemplatesComponent,
  CustomizeTemplateDialog,
} from './templates/templates.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgxColorsModule } from 'ngx-colors';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { TreeChecklistComponent } from './publish-story/tree-checklist/tree-checklist.component';
import { MatTreeModule } from '@angular/material/tree';
import { MaterialFileInputModule } from 'ngx-material-file-input';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminNavComponent,
    children: [
      { path: 'my-app', component: MyAppComponent },
      { path: 'publish-story', component: PublishStoryComponent },
      { path: 'templates', component: TemplatesComponent },
      { path: 'admin-panel', component: AdminPanelComponent },
    ],
  },
  { path: '', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPassComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' },
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
    CustomizeAppDialog,
    AssignUserRightsComponent,
    DataTableComponent,
    UserTableComponent,
    TreeChecklistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MaterialModule,
    CarouselModule,
    NgxColorsModule,
    MatPaginatorModule,
    MatTreeModule,
    MaterialFileInputModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
