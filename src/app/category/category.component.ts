import { Component, OnInit } from "@angular/core";
import { Category } from "../models/category";
import { CategoryService } from "src/services/category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  categories: Category[]=[];
  selectedCategory: Category;
  displayAll: boolean;
  loader:boolean=true

  constructor(private categoryService: CategoryService) {
    this.selectedCategory = null;
    this.displayAll = true;
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data)=>{
      this.loader=false
      this.categories=data
    })
  }

  getBooksToCategory(category?: Category) {
    if (category) {
      this.displayAll = false;
      this.selectedCategory = category;
    } else {
      this.displayAll = true;
      this.selectedCategory = null;
    }
  }
}
