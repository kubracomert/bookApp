import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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
    category_id: "",
  };
  loader:boolean
  
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

  formForBook = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(2)]),
    url: new FormControl("",[Validators.required,Validators.minLength(5)]),
    detail: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
    category_id: new FormControl("",Validators.required),
  });

  clearField() {
    this.formForBook.patchValue({
      name: "",
      url: "",
      detail: "",
      category_id: ""
    });
  }

  createBook() {
    this.loader=true
    const book = {
      id: 0,
      name: this.formForBook.value.name,
      detail: this.formForBook.value.detail,
      url: this.formForBook.value.url,
      category_id: this.formForBook.value.category_id,
    };

    this.bookService.createBook(book).subscribe((data) => {
      this.loader=false
      this.router.navigate(["/books", data.name]);
    });
  }

}
