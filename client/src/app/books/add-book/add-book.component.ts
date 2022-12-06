import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/_services/sv-book/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
  ) {}
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
