import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "src/app/models/book";
import { Observable } from "rxjs";

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
}
