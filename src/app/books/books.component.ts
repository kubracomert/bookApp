import { Component, OnInit } from "@angular/core";
import { Book } from "../models/book";
import { BookService } from "src/services/book.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: [BookService],
})
export class BooksComponent implements OnInit {
  pageTitle: string;
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {
    this.pageTitle = "All Books";
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.bookService.getBooks(params["category_id"]).subscribe((data) => {
        this.books = data;
      });
    });
  }
}
