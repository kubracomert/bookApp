import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "src/app/models/category";
import { CategoryService } from "src/services/category.service";

@Component({
  selector: "app-category-create",
  templateUrl: "./category-create.component.html",
  styleUrls: ["./category-create.component.css"],
  providers: [CategoryService],
})
export class CategoryCreateComponent implements OnInit {
  constructor(private router: Router, private categoryService: CategoryService) {}

  ngOnInit() {}

  createCategory(name: string) {
    const category: Category = {
      name: name,
    };
    this.categoryService.createCategory(category).subscribe((data) => {
      this.router.navigate(["/"]);
    });
  }
}
