import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './client/user-profile/user-profile.component';
import { ClientLoginGuardService } from './guard/client-login-guard.service';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { ClienthomeComponent } from './client/clienthome/clienthome.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddproductComponent } from './client/addproduct/addproduct.component';
import { ListproductComponent } from './client/listproduct/listproduct.component';
import { ContactComponent } from './contact/contact.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';

import { AdminClientGuardService } from './guard/admin-client-auth-guard.service';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  {path:'addproduct', component:AddproductComponent, canActivate: [AdminLoginGuardService]},
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [AdminLoginGuardService] },  
  { path: 'add-category', component: AddCategoryComponent , canActivate: [AdminLoginGuardService]},
  { path: 'add-sub-category', component: AddSubCategoryComponent , canActivate: [AdminLoginGuardService]},
  {path:'listproduct', component:ListproductComponent, canActivate: [AdminClientGuardService]},
  { path: 'profile', component: UserProfileComponent, canActivate: [ClientLoginGuardService] },
  { path: 'clienthome', component: ClienthomeComponent, canActivate: [ClientLoginGuardService] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
