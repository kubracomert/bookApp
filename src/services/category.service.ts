import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Category } from "src/app/models/category";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class CategoryService {
  url = "http://localhost:3000/categories";
  firebase_url = "https://book-app-e77f0-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.firebase_url+"categories.json").pipe(
      map((data) => {
        const categories: Category[] = [];
        for (const key in data) {
          categories.push({ ...data[key], id: key });
        }
        return categories;
      })
    );
  }

  createCategory(category: Category): Observable<Category> {
    let headerOptions = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Token",
    });

    return this.http
      .post<Category>(this.firebase_url + "categories.json", category, {
        headers: headerOptions,
      })
      .pipe(
        tap((data) => console.log({ data })),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError("2Bir hata ile karşılaşıldı.");
  }
}
