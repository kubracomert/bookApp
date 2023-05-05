import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books/books.component";

const routes: Routes = [
  { path: "books", component: BooksComponent },
  { path: "", redirectTo: "books", pathMatch: "full" },
  { path: "books/category/:category_id", component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
