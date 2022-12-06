import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    name: "",
    image: "",
    score: 0,
    year: "",
  });
  res=""
  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    // this.bookService.addBook({this.checkoutForm.value})
    //     .subscribe(response => {
    //       this.res = response;
    //     });
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
