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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
