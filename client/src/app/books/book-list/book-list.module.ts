import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from 'src/app/_services/sv-book/book.service';
import { BookListComponent } from './book-list.component';
import { BookListRoutingModule } from './book-list-routing.module';


@NgModule({
  declarations: [
    BookListComponent,
  ],
  providers:[BookService],
  imports: [
    CommonModule,
    BookListRoutingModule
  ],
  exports:[
    BookListComponent
  ],
})
export class BookListModule { }
