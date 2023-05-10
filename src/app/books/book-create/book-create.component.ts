import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgModel } from '@angular/forms';
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
  model: any = {
    category_id:""
  };

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

  createBook() {
    const book = {
      id: 0,
      name: this.model.name,
      detail: this.model.detail,
      url: this.model.url,
      category_id: this.model.category_id,
    };

    this.bookService.createBook(book).subscribe((data) => {
      this.router.navigate(["/books", data.id]);
    });
  }

  handleChange(value:NgModel){
    console.log(value)
  }
}
