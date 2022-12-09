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
  updateForm:FormGroup;
  bookId:any;
  book: any;
  constructor(
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    private bookService:BookService,
    
  ){
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(this.bookId)
      .subscribe(res=> {
        this.updateForm.setValue({
          name: res,
          image: res,
          score: res,
          year: res,
        })
      });
      this.updateForm = this.formBuilder.group({
        name: [''],
        image: [''],
        score: [''],
        year: [''],
      });
  }

}
