import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrimaryComponent } from './primary/primary.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
// import { LoginComponent } from './Pages/login/login.component';
// import { ForgetPasswordComponent } from './Pages/forget-password/forget-password.component';
// import { SettingsComponent } from './Pages/settings/settings.component';


const routes: Routes = [
  // {
  //   path: "login",
  //   component: LoginComponent,
  // },
  // {
  //   path: "forget-password",
  //   component: ForgetPasswordComponent,
  // },
  {
    path: "",
    component: PrimaryComponent,
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "products",
        component: ProductsComponent,
      },
      {
        path: "",
        component: HomeComponent,
      },
      { path: "**", redirectTo: "" }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
