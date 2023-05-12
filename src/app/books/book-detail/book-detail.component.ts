import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Book } from "src/app/models/book";
import { BookService } from "src/services/book.service";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"],
  providers: [BookService],
})
export class BookDetailComponent implements OnInit {
  book: Book;
  loader:boolean=true

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.bookService.getBookById(params["book_id"]).subscribe((data) => {
        this.loader=false
        this.book = data;
      });
    });
  }
}
