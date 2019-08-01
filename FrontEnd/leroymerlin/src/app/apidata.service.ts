import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:3000/";

  getAllProducts(){
    return this.http.get<ProductModel[]>(this.baseurl + 'garden/');
  }

}
