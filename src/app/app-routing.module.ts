import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActingHomeComponent } from './OtherComponents/acting-home/acting-home.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './OtherComponents/jumbotron/jumbotron.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { HotelsComponent } from './accommodationType/hotels/hotels.component';
import { GuestHouseComponent } from './accommodationType/guest-house/guest-house.component';
import { ApartmentComponent } from './accommodationType/apartment/apartment.component';
import { AparthotelComponent } from './accommodationType/aparthotel/aparthotel.component';

const routes: Routes = [
  {path:'',redirectTo:'/actingHome',pathMatch:'full'},
  {path:'user', component:UserComponent,
  children:[
    {path:'jumbo',component:JumbotronComponent},
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
  ]
},
{path:'actingHome',component:ActingHomeComponent},
{path:'apartment',component:ApartmentComponent},
{path:'hotels',component:HotelsComponent},{path:'home',component:HomeComponent},
{path:'guest',component:GuestHouseComponent},
{path:'aparthotel',component:AparthotelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
