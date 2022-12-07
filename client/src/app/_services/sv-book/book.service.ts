import { Injectable } from '@angular/core';
import Data from '../../../assets/json/db.json'
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
export class Book{
  name!:string
  image!:string
  score!:number
  year!:string
}
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:8080';
  constructor(private httpClient:HttpClient){
  }
  httpHeaders = new HttpHeaders().set('Content-Type','application/json')
  addBook(data:Book):Observable<any>{
      return this.httpClient.post<any>(this.url+"/book",data).pipe(
        catchError(this.handleError)
      )
  }
  getBook(){
    return this.httpClient.get(this.url+"/book")
  }
  getBookById(id:any){
    return this.httpClient.get(this.url+"/book/"+id,{headers:this.httpHeaders})
  }
  updateBook(id:any,data:any):Observable<any>{
    return this.httpClient.put<any>(this.url+"/book",data).pipe(
      catchError(this.handleError)
    )
  }
  deleteBook(id:any):Observable<any>{
    return this.httpClient.delete(this.url+"/book/"+id,{headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    let errorMessage=''
    if(error.error instanceof ErrorEvent){
      //Handle client error
      errorMessage = error.error.message
    }else{
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
