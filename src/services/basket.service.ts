import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Book } from "src/app/models/book";

@Injectable()
export default class BasketService {
  firebase_url = "https://book-app-e77f0-default-rtdb.firebaseio.com/baskets/";

  constructor(private http: HttpClient) {}

  getBasketById(user_id:string): Observable<Book[]> {
    console.log("gelmez mi ")
    return this.http
      .get<Book[]>(this.firebase_url + user_id + ".json")
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError("Bir hata ile karşılaşıldı.");
  }
}
