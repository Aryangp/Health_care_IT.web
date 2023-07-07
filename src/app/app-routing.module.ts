import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    component:MainPageComponent,
    path:''
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:LoginComponent,
    path:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
