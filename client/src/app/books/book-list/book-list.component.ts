import { Component } from '@angular/core';
import { BookService } from 'src/app/_services/sv-book/book.service';
interface Book{
  id:number,
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
  constructor(private bookService:BookService){
    this.books= this.bookService.getBook()
  }
  books: Book[]
  searchText = '';
  isShowing : boolean = true

  handerInput(event:any){
    console.log(event.target.value)
  }

  toggleBooks(){
    this.isShowing= !this.isShowing
  }
}
