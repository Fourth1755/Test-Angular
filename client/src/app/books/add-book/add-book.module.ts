import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookRoutingModule } from './add-book-routing.module';
import { AddBookComponent } from './add-book.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddBookComponent
  ],
  imports: [
    CommonModule,
    AddBookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddBookModule { }
