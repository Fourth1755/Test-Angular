import { Injectable } from '@angular/core';
import Data from '../../../assets/json/db.json'
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:8080';
  constructor(private httpClient:HttpClient){
  }
  addBook(
    name:string,
    image:string,
    score:number,
    year:string,
    ):Observable<any>{
      let body = {
        name:name,
        image:image,
        score:score,
        year:year,
        isActive:true
      };
      return this.httpClient.post<any>(this.url,body
        )
  }
  getBook(){
    return this.httpClient.get(this.url+"/book")
  }
  getBookById(id:any){
    return this.httpClient.get(this.url+"/book/"+id)
  }
}
