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
  books: any = []
  ngOnInit() {
    this.bookService.getBook()
      .subscribe(response => {
        this.books = response;
      });
  }
  searchText = '';
  isShowing : boolean = true
  handerDelete(id:any,i:any){
    console.log(id)
    if(window.confirm('Do you want to delete this book')){
      this.bookService.deleteBook(id).subscribe(response => {
        this.books.splice(i,1)
      });
    }
    
    
  }
  handerInput(event:any){
    console.log(event.target.value)
  }

  toggleBooks(){
    this.isShowing= !this.isShowing
  }
}
