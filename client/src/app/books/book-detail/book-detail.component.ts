import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/_services/sv-book/book.service';
import { Observable } from 'rxjs';

interface Book{
  name:string,
  year:number,
  score:number,
  image:string
}
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {

  constructor(
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    private bookService:BookService
  ){}
  bookId:any;
  book: any;
  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.book = this.bookService.getBookById();
  }
}
