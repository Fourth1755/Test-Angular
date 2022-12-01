import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  { path:'books',component:BooksComponent},
  { 
    path:'books-list',
    loadChildren : ()=>
      import('./components/books-list/books-list.component').then(
        (m)=>m.BooksListComponent,
      )
  },
  { 
    path:'add-book',
    loadChildren : ()=>
      import('./components/add-book/add-book.component').then(
        (m)=>m.AddBookComponent,
      )
  },
  { 
    path:'edit-book/:id',
    loadChildren : ()=>
      import('./components/book-detail/book-detail.component').then(
        (m)=>m.BookDetailComponent,
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
