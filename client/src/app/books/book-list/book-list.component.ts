import { Component } from '@angular/core';
import Data from '../../../assets/json/db.json'

interface Book{
  name:string,
  year:number,
  score:number,
  image:string
}
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[]= Data
}
