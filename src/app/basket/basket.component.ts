import { Component, OnInit } from "@angular/core";
import BasketService from "src/services/basket.service";
import { Book } from "../models/book";
import { BookService } from "src/services/book.service";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"],
  providers: [BasketService, BookService],
})
export class BasketComponent implements OnInit {
  user_id: string;
  bookInBasket: Book[] = [];
  constructor(
    private basketService: BasketService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.user_id = JSON.parse(localStorage.getItem("user")).id;
    this.basketService.getBasketById(this.user_id).subscribe((res) => {
      // this.bookService.getBooks(0).subscribe((books) => console.log(books));
      this.bookInBasket = res;
    });
  }
}
