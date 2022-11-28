import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  book = "Angular"
  showBook(){
    console.log("The name of book is Angular")
  }
}
