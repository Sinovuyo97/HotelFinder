import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ActingHomeComponent } from "./OtherComponents/acting-home/acting-home.component";
import { JumbotronComponent } from "./OtherComponents/jumbotron/jumbotron.component";
import { UserService } from "./shared/user/user.service";
import { LoginComponent } from "./user/login/login.component";
import { RegistrationComponent } from "./user/registration/registration.component";
import { UserComponent } from "./user/user.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './OtherComponents/open-close/open-close.component';
import { HotelsComponent } from './accommodationType/hotels/hotels.component';
import { AparthotelComponent } from './accommodationType/aparthotel/aparthotel.component';
import { ApartmentComponent } from './accommodationType/apartment/apartment.component';
import { GuestHouseComponent } from './accommodationType/guest-house/guest-house.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { LoaderComponent } from './loader/loader.component';
import { TotalpendingapprovalrejectionComponent } from "./OtherComponents/totalpendingapprovalrejection/totalpendingapprovalrejection.component";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    JumbotronComponent,
    ActingHomeComponent,
    OpenCloseComponent,
    HotelsComponent,
    TotalpendingapprovalrejectionComponent,
    AparthotelComponent,
    ApartmentComponent,
    GuestHouseComponent,
    
    LoaderComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
