import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShaerdService {

  private API_URL = environment.api_url;

  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public register(body: any) {
    return this.http.post<any>(this.API_URL + '/resgister', body, this.httpOption);
  }

}
