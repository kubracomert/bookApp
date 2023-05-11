import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Book } from "src/app/models/book";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class BookService {
  url = "http://localhost:3000/books";
  firebase_url = "https://book-app-e77f0-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) {}

  getBooks(category_id: number): Observable<Book[]> {
    let tempUrl = this.firebase_url + "books.json";
    return this.http.get<Book[]>(tempUrl).pipe(
      map((item) => {
        const temp: Book[] = [];
        for (const key in item) {
          if (category_id) {
            if (category_id == item[key].category_id) {
              temp.push({ ...item[key], id: key });
            }
          } else {
            temp.push({ ...item[key], id: key });
          }
        }
        return temp;
      }),
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  getBookById(book_id: string): Observable<Book> {
    let tempUrl = this.firebase_url + "books";
    if (book_id) {
      tempUrl += "/" + book_id + ".json";
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
      .post<Book>(this.firebase_url + "books.json", book, {
        headers: headerOptions,
      })
      .pipe(
        tap((data) => console.log({ data })),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError("Bir hata ile karşılaşıldı.");
  }
}
