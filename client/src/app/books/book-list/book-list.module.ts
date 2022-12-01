import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from 'src/app/_services/sv-book/book.service';

@NgModule({
  declarations: [],
  providers:[BookService],
  imports: [
    CommonModule
  ]
})
export class BookListModule { }
