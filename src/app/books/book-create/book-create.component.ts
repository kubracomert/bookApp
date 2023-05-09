import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "src/app/models/category";
import { BookService } from "src/services/book.service";
import { CategoryService } from "src/services/category.service";

@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"],
  providers: [CategoryService, BookService],
})
export class BookCreateComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }
  createBook(name: any, url: any, detail: any, category_id: any) {
    const book = {
      id: 0,
      name: name.value,
      detail: detail.value,
      url: url.value,
      category_id: category_id.value,
    };

    this.bookService.createBook(book).subscribe((data) => {
      this.router.navigate(["/books",data.id])
    });
  }
}
