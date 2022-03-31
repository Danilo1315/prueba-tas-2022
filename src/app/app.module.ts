import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { StoreComponent } from './store';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    appRoutingModule

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    FooterComponent,
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent,StoreComponent]
})
export class AppModule { }
