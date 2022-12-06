import { BookService } from 'src/app/_services/sv-book/book.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(private bookService:BookService){}
  books: any
  ngOnInit() {
    this.bookService.getBook()
      .subscribe(response => {
        this.books = response;
      });
  }
  searchText = '';
  isShowing : boolean = true

  handerInput(event:any){
    console.log(event.target.value)
  }

  toggleBooks(){
    this.isShowing= !this.isShowing
  }
}
