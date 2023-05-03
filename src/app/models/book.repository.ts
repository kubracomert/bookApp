import { Book } from "./book";

export class BookRepository {

  private books: Book[];
  
  constructor() {
    this.books = [
      {
        id: 1,
        category_id: 1,
        name: "Kızıl Veba",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0001872902001-1.jpg",
        detail: "Açıklama 1",
      },
      {
        id: 2,
        category_id: 1,
        name: "Jane Eyre",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0001788070001-1.jpg",
        detail: "Açıklama 2",
      },
      {
        id: 3,
        category_id: 2,
        name: "Kızıl Veba2",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0001917612001-1.jpg",
        detail: "Açıklama 3",
      },
      {
        id: 4,
        category_id: 3,
        name: "Kızıl Veba3",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0002022815001-1.jpg",
        detail: "Açıklama 4",
      },
      {
        id: 5,
        category_id: 4,
        name: "Kızıl Veb44",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0000000347422-1.jpg",
        detail: "Açıklama 5",
      },
      {
        id: 6,
        category_id: 4,
        name: "Kızıl Veba5",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0000000622480-1.jpg",
        detail: "Açıklama 6",
      },
      {
        id: 7,
        category_id: 5,
        name: "Kızıl Veba6",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0002037638001-1.jpg",
        detail: "Açıklama 7",
      },
      {
        id: 8,
        category_id: 6,
        name: "Kızıl Veba7",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0000000250242-1.jpg",
        detail: "Açıklama 8",
      },
      {
        id: 9,
        category_id: 1,
        name: "Kızıl Veba8",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0000000608697-1.jpg",
        detail: "Açıklama 9",
      },
      {
        id: 10,
        category_id: 3,
        name: "Kızıl Veba9",
        url: "https://i.dr.com.tr/cache/154x170-0/originals/0000000374848-1.jpg",
        detail: "Açıklama 10",
      },
    ];
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id:number): Book | undefined {
    return this.books.find((item) => item.id === id);
  }
}
