import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { CategoryComponent } from './category/category.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [    // components
    AppComponent, NavbarComponent, BooksComponent, BookComponent, BookDetailComponent, CategoryComponent, BasketComponent
  ],
  imports: [ //modules
    BrowserModule
  ],
  providers: [], //services
  bootstrap: [AppComponent] //starter component
})
export class AppModule { }