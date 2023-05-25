import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";
import { BookCreateComponent } from "./books/book-create/book-create.component";
import { CategoryCreateComponent } from "./category/category-create/category-create.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./guards/auth.guard";
import { BooksHomeComponent } from "./books/books-home/books-home.component";

const routes: Routes = [
  { path: "", redirectTo: "books", pathMatch: "full" },
  {
    path: "books",
    component: BooksHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: BooksComponent },
      {
        path: "newBook",
        component: BookCreateComponent,
      },
      {
        path: "category/:category_id",
        component: BooksComponent,
      },
      {
        path: ":book_id",
        component: BookDetailComponent,
      },
    ],
  },

  {
    path: "newCategory",
    component: CategoryCreateComponent,
    canActivate: [AuthGuard],
  },

  { path: "auth", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
