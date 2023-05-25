import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";
import { BookCreateComponent } from "./books/book-create/book-create.component";
import { CategoryCreateComponent } from "./category/category-create/category-create.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "books", component: BooksComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "newBook", component: BookCreateComponent, canActivate: [AuthGuard] },
  { path: "books/category/:category_id", component: BooksComponent, canActivate: [AuthGuard] },
  { path: "books/:book_id", component: BookDetailComponent, canActivate: [AuthGuard] },
  { path: "newCategory", component: CategoryCreateComponent, canActivate: [AuthGuard] },
  { path: "auth", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
