import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct()
  {
    return this.http.get<any>("http://localhost:9123/product/getAllProduct").pipe(map((res: any) => {
      return res;
    }))
  }
}
