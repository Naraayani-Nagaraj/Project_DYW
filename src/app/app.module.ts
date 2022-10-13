import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { ShortlistedComponent } from './shortlisted/shortlisted.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CarComponent } from './car/car.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import { UploadComponent } from './upload/upload.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UsersComponent } from './users/users.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './authguard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminloginComponent,
    AdminsignupComponent,
    ShortlistedComponent,
    CheckoutComponent,
    CarComponent,
    HeaderComponent,
    PaymentComponent,
    ProductsComponent,
    FilterPipe,
    UploadComponent,
    UserloginComponent,
    UserregisterComponent,
    UsersComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    {
      provide: ProductsComponent
    },
    {
      provide: AuthGuard
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
