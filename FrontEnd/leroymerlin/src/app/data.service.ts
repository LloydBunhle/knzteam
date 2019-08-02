import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts()
{
  return this.http.get('http://10.1.0.81:3000/profiles/luntu');
}

}
