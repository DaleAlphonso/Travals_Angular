import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import {WorldComponent} from './world';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {cdComponent} from './cd';
import { NiceThemeDirective }  from './register/theme.directive';
import { FormsModule } from '@angular/forms';
import { ProperCasePipe } from './world/propercase.pipe';
import { RegisterauthComponent } from './registerauth/registerauth.component';
import { LoginauthComponent } from './loginauth/loginauth.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { EventService } from './event.service';
import { AustraliaComponent } from './australia/australia.component';
import{GoogleMapsModule} from '@angular/google-maps';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogService } from './shared/blog.service';
import { TransactionComponent } from './transaction/transaction.component';
import { LastpageComponent } from './lastpage/lastpage.component';
//import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WorldComponent,
    NiceThemeDirective,
    cdComponent,
    ProperCasePipe,
    routingComponents,
    RegisterauthComponent,
    LoginauthComponent,
    EventsComponent,
    SpecialEventsComponent,
    AustraliaComponent,
  // FileSelectDirective,
    PaymentComponent,
  BlogHomeComponent,
  BlogPostComponent,
  TransactionComponent,
  LastpageComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [AuthService, AuthGuard, EventService, BlogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
