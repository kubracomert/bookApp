import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "src/app/models/book";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class BookService {
  url = "http://localhost:3000/books";

  constructor(private http: HttpClient) {}

  getBooks(category_id:number): Observable<Book[]> {
    let tempUrl=this.url
    if (category_id) {
      tempUrl+="?category_id="+category_id
    }
    return this.http.get<Book[]>(tempUrl);
  }

  getBookById(book_id:number):Observable<Book>{
    let tempUrl=this.url
    if (book_id) {
      tempUrl+="/"+book_id
    }
    return this.http.get<Book>(tempUrl).pipe(
      tap(data=>console.log(data))
    )
  }
}
