import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './Guard/auth.guard';
import { TestComponent } from './test/test.component';
import { DetailsPhoneComponent } from './details-phone/details-phone.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { UpdatePhoneComponent } from './update-phone/update-phone.component';
const routes : Routes = [
  {path:"",redirectTo:"home",pathMatch:'full',canActivate: [AuthGuard]},
  {path:"home",component:HomeComponent,canActivate: [AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"phones/details/:id",component:DetailsPhoneComponent,canActivate: [AuthGuard]},
  {path:"phones/edit/:id",component:UpdatePhoneComponent,canActivate: [AuthGuard]},
  {path:"phones/add",component:AddPhoneComponent,canActivate: [AuthGuard]},
  {path:"register",component:RegisterComponent},
  {path:"test",component:TestComponent}, 
  {path:"**",component:PageNotFoundComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
