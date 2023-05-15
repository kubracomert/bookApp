import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BooksComponent } from "./books/books.component";
import { BookComponent } from "./books/book/book.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";
import { CategoryComponent } from "./category/category.component";
import { BasketComponent } from "./basket/basket.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BookCreateComponent } from './books/book-create/book-create.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    // components
    AppComponent,
    NavbarComponent,
    BooksComponent,
    BookComponent,
    BookDetailComponent,
    CategoryComponent,
    BasketComponent,
    BookCreateComponent,
    CategoryCreateComponent,
    LoaderComponent,
    AuthComponent,
  ],
  imports: [
    //modules
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent], //starter component
})
export class AppModule {}
