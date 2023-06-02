import { Component, Input, OnInit, Output } from "@angular/core";
import { Book } from "../models/book";
import { BookService } from "src/services/book.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/services/auth.service";
import { AlertifyService } from "src/services/alertify.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: [BookService],
})
export class BooksComponent implements OnInit {
  pageTitle: string;
  books: Book[] = [];
  error: any;
  loader: boolean = true;
  auth_id:string

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private alertify:AlertifyService
  ) {
    this.pageTitle = "All Books";
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.bookService.getBooks(params["category_id"]).subscribe(
        (data) => {
          this.books = data;
          this.loader=false
        },
        (error) => {
          console.log({ error });
          this.error = error;
        }
      );
    });
  }

  addBookInBasket(id:string){
    this.authService.user.subscribe((user) => {
      this.auth_id=user.id
    });
    this.bookService.addBookInBasket({user_id:this.auth_id,book_id:id}).subscribe(()=>{
      console.log("veri eklendi git bak")
      this.alertify.success("Kitap Sepete Eklendi")
    })
  }

}
