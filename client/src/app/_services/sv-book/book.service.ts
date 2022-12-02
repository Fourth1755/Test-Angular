import { Injectable } from '@angular/core';
import Data from '../../../assets/json/db.json'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBook(){
    return Data
  }
  getBookById(){
    return  {
      "id":1,
      "name":"Sword art online",
      "year":2012,
      "studios":"A-1 Pictures",
      "seasonal":"Summer",
      "episodes":25,
      "image":"https://cdn.myanimelist.net/images/anime/11/39717.jpg",
      "trailer":"https://www.youtube.com/embed/6ohYYtxfDCg",
      "trailer_start":"",
      "wallpaper":"https://wallpaperaccess.com/full/1122002.jpg",
      "duration":"23 min. per ep.",
      "score":7.2
    }
  }
  constructor() { }
}
