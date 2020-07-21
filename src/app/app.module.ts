import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { MyAppComponent } from './my-app/my-app.component';
import { PublishStoryComponent } from './publish-story/publish-story.component';
import { TemplatesComponent } from './templates/templates.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component'
// import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  { path: 'my-app', component: MyAppComponent},
  { path: 'publish-story', component: PublishStoryComponent},
  { path: 'templates', component: TemplatesComponent},
  { path: 'admin-panel', component: AdminPanelComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    MyAppComponent,
    PublishStoryComponent,
    TemplatesComponent,
    AdminPanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
