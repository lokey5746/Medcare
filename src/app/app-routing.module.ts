import { AddNGOComponent } from './layout/dashboard/add-ngo/add-ngo.component';
import { ViewuserComponent } from './layout/dashboard/viewuser/viewuser.component';
import { MainComponent } from './layout/main/main.component';
import { ViewstockComponent } from './layout/dashboard/viewstock/viewstock.component';
import { SingnupComponent } from './layout/singnup/singnup.component';
import { LoginComponent } from './layout/login/login.component';

import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRequestComponent } from './layout/dashboard/view-request/view-request.component';
import { NgbdTableComplete } from './layout/dashboard/addmedcine/addmedcine.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SingnupComponent},
  {path: 'dashboard', component: DashboardComponent,
children: [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
 },
  {path: 'main', component: MainComponent },
  {path: 'addmed', component: NgbdTableComplete},
  {path: 'stock', component: ViewstockComponent},
  {path: 'user', component: ViewuserComponent},
  {path: 'request', component: ViewRequestComponent},
  {path: 'ngo', component: AddNGOComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
