import { Category } from "./category";

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      { id: 1, name: "Bilim Kurgu" },
      { id: 2, name: "Komedi" },
      { id: 3, name: "Macera" },
      { id: 4, name: "Korku" },
      { id: 5, name: "Kişisel Gelişim" },
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
