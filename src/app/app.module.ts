import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeroContainerComponent } from './components/hero-container/hero-container.component';
import { ServiceContainerComponent } from './components/service-container/service-container.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ReadKeyExpr } from '@angular/compiler';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    HeroContainerComponent,
    ServiceContainerComponent,
    CardContainerComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
