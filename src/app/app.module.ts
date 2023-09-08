import { ViewuserComponent } from './layout/dashboard/viewuser/viewuser.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './layout/login/login.component';
import { SingnupComponent } from './layout/singnup/singnup.component';
import { ViewstockComponent } from './layout/dashboard/viewstock/viewstock.component';
import { MainComponent } from './layout/main/main.component';
import { AddNGOComponent } from './layout/dashboard/add-ngo/add-ngo.component';
import { ViewRequestComponent } from './layout/dashboard/view-request/view-request.component';
import { NgbdTableComplete } from './layout/dashboard/addmedcine/addmedcine.component';
import { NgbdSortableHeader } from './layout/dashboard/addmedcine/sortable.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    DashboardComponent,
    NgbdTableComplete,
    LoginComponent,
    SingnupComponent,
    ViewstockComponent,
    MainComponent,
    AddNGOComponent,
    ViewRequestComponent,
    ViewuserComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
