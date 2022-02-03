import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { Directors } from '../../models/directors';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {
  token="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };

  endpoint: string = "http://localhost:8000/api/downloadDirectorsPDF";

  constructor(private httpClient: HttpClient, private storage:Storage) {
    this.storage.get("access_token").then((token) => {
      this.httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
     
    })};

  getDirectorsByProjectId(projectId): Observable<Directors[]>{
    return this.httpClient.get<Directors[]>(this.endpoint + "/projects/" + projectId, this.httpOptions).pipe(
      tap(_=> console.log("DirectorProject retrieved")),
      catchError(this.handleError<Directors[]>("Get director project", []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}
}


 