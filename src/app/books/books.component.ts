import { Component, OnInit } from "@angular/core";
import { Book } from "../models/book";
import { BookRepository } from "../models/book.repository";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  books: Book[];
  bookRepository: BookRepository;

  constructor() {
    this.bookRepository=new BookRepository()
    this.books = this.bookRepository.getBooks();
  }

  ngOnInit() {}
}
