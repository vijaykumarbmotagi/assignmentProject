import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}

  public login(params: any): Observable<any> {
    const url = 'https://api.escuelajs.co/api/v1/auth/login';
    return this.http.post<any>(url, params);
  }
}
