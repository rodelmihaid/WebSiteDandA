import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoPageComponent } from './components/logo-page/logo-page.component';
import { ServiciiComponent } from './components/servicii/servicii.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogoPageComponent,
    ServiciiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
