import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Book } from "src/app/models/book";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class BookService {
  url = "http://localhost:3000/books";

  constructor(private http: HttpClient) {}

  getBooks(category_id: number): Observable<Book[]> {
    let tempUrl = this.url;
    if (category_id) {
      tempUrl += "?category_id=" + category_id;
    }
    return this.http.get<Book[]>(tempUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  getBookById(book_id: number): Observable<Book> {
    let tempUrl = this.url;
    if (book_id) {
      tempUrl += "/" + book_id;
    }
    return this.http.get<Book>(tempUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  createBook(book: Book): Observable<Book> {
    let headerOptions = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Token",
    });
    return this.http
      .post<Book>(this.url, book, { headers: headerOptions })
      .pipe(
        tap((data) => console.log({ data }, "fajgkjf")),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError("Bir hata ile karşılaşıldı.");
  }
}
