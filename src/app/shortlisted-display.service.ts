import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shortlist } from './shortlisted';

@Injectable({
  providedIn: 'root'
})
export class ShortlistedDisplayService {

  constructor(public http: HttpClient) { }

  storeCartDetails(c: Shortlist):Observable<string>
  {
    return this.http.post("http://localhost:9123/shortlist/storeShort", c, { responseType: 'text' })
  }
}
