import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo: 'add-book' },
  {
    path: 'book-list',
    loadChildren: () =>
      import('./books/book-list/book-list.module').then(
        (m) => m.BookListModule,
      ),
  },
  {
    path: 'book-detail/:id',
    loadChildren: () =>
      import('./books/book-detail/book-detail.module').then(
        (m) => m.BookDetailModule,
      ),
  },
  {
    path: 'add-book',
    loadChildren: () =>
      import('./books/add-book/add-book.module').then(
        (m) => m.AddBookModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
