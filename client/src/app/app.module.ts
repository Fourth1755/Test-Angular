import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderMenuComponent } from './_base-components/header-menu/header-menu.component';
import { BookListModule } from './books/book-list/book-list.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
