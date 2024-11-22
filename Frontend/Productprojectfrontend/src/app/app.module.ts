import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { AddproductComponent } from './client/addproduct/addproduct.component';
import { ListproductComponent } from './client/listproduct/listproduct.component';
import { RegisterComponent } from './register/register.component';
import { ClientheaderComponent } from './client/clientheader/clientheader.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClienthomeComponent } from './client/clienthome/clienthome.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserProfileComponent } from './client/user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { AppHomeComponent } from './app-home/app-home.component';
import {MatIconModule} from '@angular/material/icon';
import { ClientLoginGuardService } from './guard/client-login-guard.service';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule} from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { AdminClientGuardService } from './guard/admin-client-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ListproductComponent,
    RegisterComponent,
    AdminheaderComponent,
    AdminDashboardComponent,
    ClienthomeComponent,
    AppheaderComponent,
    ClientheaderComponent,
    ContactComponent,
    AboutusComponent,
    UserProfileComponent,
    LoginComponent,
    AppHomeComponent,
    UpdateProfileComponent,
    AddCategoryComponent,
    AddSubCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService, ClientLoginGuardService, AdminLoginGuardService,AdminClientGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
