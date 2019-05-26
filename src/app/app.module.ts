import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { HeaderAutoriseComponent } from './components/header/header-autorise/header-autorise.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/body/course/course.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageComponent } from './components/body/manage/manage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      HeaderAutoriseComponent,
      HeaderLogoComponent,
      CourseComponent,
      FooterComponent,
      ManageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
