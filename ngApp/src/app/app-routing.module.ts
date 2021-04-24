import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
//import { LoginComponent } from './login';
//import { RegisterComponent } from './register';
import { LoginauthComponent } from './loginauth';
import { RegisterauthComponent } from './registerauth';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { AustraliaComponent } from './australia/australia.component';
//import { WorldComponent } from './world';
import { PaymentComponent } from './payment/payment.component';
import { cdComponent } from './cd';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'australia', component: AustraliaComponent},
  {path: 'payment', component: PaymentComponent},
  // {
  //   path: 'login', component: LoginauthComponent},
  // { path: 'register', component: RegisterauthComponent },
  { path: 'world', component: SpecialEventsComponent },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
   
    component: SpecialEventsComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'loginauth',
    component: LoginauthComponent
  },
  {
    path: 'registerauth',
    component: RegisterauthComponent
  },
  { path: 'cd', component: cdComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginauthComponent]
