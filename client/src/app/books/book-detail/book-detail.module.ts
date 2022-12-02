import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail.component';
import { BookDetailRoutingModule } from './book-detail-routing.module';
import { BookService } from 'src/app/_services/sv-book/book.service';


@NgModule({
  declarations: [BookDetailComponent],
  providers:[BookService],
  imports: [
    CommonModule,
    BookDetailRoutingModule
  ],
  exports:[
    BookDetailComponent
  ],
})
export class BookDetailModule { }
