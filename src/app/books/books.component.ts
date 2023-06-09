import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Book } from "../models/book";
import { BookService } from "src/services/book.service";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/services/auth.service";
import AlertService from "src/services/alert.service";
import BasketService from "src/services/basket.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
  providers: [BookService, AlertService, BasketService],
})
export class BooksComponent implements OnInit {
  pageTitle: string;
  books: Book[] = [];
  error: any;
  loader: boolean = true;
  auth_id: string;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private alertService: AlertService,
    private basketService: BasketService
  ) {
    this.pageTitle = "All Books";
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.bookService.getBooks(params["category_id"]).subscribe(
        (data) => {
          this.books = data;
          this.loader = false;
        },
        (error) => {
          console.log({ error });
          this.error = error;
        }
      );
    });
  }
  private selectedEmpSub = new Subject<number>();

  // Observable string streams
  public myEmpSubj = this.selectedEmpSub.asObservable();
  
  addBookToBasket(id: string) {
    this.authService.user.subscribe((user) => {
      this.auth_id = user.id;
    });
    let deneme2: { count: number; updated: string }[]=[];

    this.basketService.getBasketById(this.auth_id).subscribe((res) => {
      Object.entries(res).map((book) => {
        if (id === book[1].book_id) {
          deneme2["count"]=book[1].count+1
          this.selectedEmpSub.next(book[1].count+1);
          this.selectedEmpSub.complete();

          deneme2["updated"]=book[0]
        }
      });
    });
    console.log({a:deneme2,b:this.myEmpSubj}, "ayrı gayrıı");
    this.bookService
      .addBookToBasket({
        detail:deneme2,
        tut:this.selectedEmpSub,
        user_id: this.auth_id,
        book_id: id,
      })
      .subscribe(() => {
        this.alertService.toastAlert("success");
      });
  }
}
