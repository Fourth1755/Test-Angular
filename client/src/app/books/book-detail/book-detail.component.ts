import { Component, OnInit, ViewChild,NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/_services/sv-book/book.service';
import { Observable } from 'rxjs';

interface Book{
  name:string,
  year:string,
  score:number,
  image:string
}
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  bookId:any;
  book: Book={
    name:'',
    year:'',
    score:0,
    image:''
  }
  constructor(
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    private bookService:BookService,
    private ngZone: NgZone,
    
  ){
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(this.bookId)
      .subscribe((data : any)=> {
        this.book=data
      });
      // this.updateForm = this.formBuilder.group({
      //   name: [''],
      //   image: [''],
      //   score: [''],
      //   year: [''],
      // });
  }
  res=""
  updateBook(){
    this.bookService.updateBook(this.bookId,this.book)
        .subscribe({
          next:(book)=>{
            this.router.navigate(['book-list'])
          }
        })
  }
}
