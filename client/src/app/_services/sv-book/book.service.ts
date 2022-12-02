import { Injectable } from '@angular/core';
import Data from '../../../assets/json/db.json'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBook(){
    return Data
  }
  constructor() { }
}
