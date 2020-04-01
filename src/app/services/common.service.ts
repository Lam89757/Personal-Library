import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {

  public books:any[]=[];

  // public books: Book[] = [
  //   new Book(1, 'Android book1', 23.24, 4, 'a book for android', [{ title: 'IT', checked: false }, { title: '金融', checked: true }, { title: '互联网', checked: true }]),
  //   new Book(2, 'Java book2', 25.56, 3, 'a book for Java', [{ title: 'IT', checked: false }, { title: '金融', checked: true }, { title: '互联网', checked: false }]),
  //   new Book(3, 'Typescript book3', 30.78, 4, 'a book for Typescript', [{ title: 'IT', checked: false }, { title: '金融', checked: true }, { title: '互联网', checked: false }]),
  //   new Book(4, 'C# book4', 43.50, 1, 'a book for C#', [{ title: 'IT', checked: true }, { title: '金融', checked: false }, { title: '互联网', checked: true }]),
  //   new Book(5, 'C++ book5', 12.43, 2, 'a book for C++', [{ title: 'IT', checked: false }, { title: '金融', checked: true }, { title: '互联网', checked: true }]),
  //   new Book(6, 'ASP.NET book6', 65.33, 5, 'a book for ASP.NET', [{ title: 'IT', checked: false }, { title: '金融', checked: false }, { title: '互联网', checked: true }]),
  //   new Book(7, 'Testing book7', 43.23, 2, 'a book for Testing', [{ title: 'IT', checked: true }, { title: '金融', checked: true }, { title: '互联网', checked: false }]),
  //   new Book(8, 'Javascript book8', 20.99, 3, 'a book for Javascript', [{ title: 'IT', checked: false }, { title: '金融', checked: false }, { title: '互联网', checked: true }]),
  // ]

  constructor(public http:HttpClient) { }

  public baseUrl="http://192.168.0.169:3000/api/"
  getBook():Observable<any> {
    return this.http.get(this.baseUrl+"book");
    
  }

  getBookByName(name){
    return this.http.get(this.baseUrl+"book/" +name);
  }

  getBookById(id){
    return this.http.get(this.baseUrl+"book/" +id);
}


}

// export class Book {

//   constructor(
//     public BookId: number,
//     public BookName: string,
//     public BookPrice: number,
//     public BookRating: number,
//     public BookDesc: string,
//     public BookCategory: {}) {
//   }
// }
