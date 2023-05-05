import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "src/app/models/category";
import { Observable } from "rxjs";

@Injectable()
export class CategoryService {
  url = "http://localhost:3000/categories";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }
}
