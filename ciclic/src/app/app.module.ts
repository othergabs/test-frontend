import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreAppModule } from '../@core/core.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
