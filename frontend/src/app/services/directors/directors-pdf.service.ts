import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { Directors } from '../../models/directors';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint: string = "http://localhost:8000/api/downloadDirectorsPDF";

  constructor(private httpClient: HttpClient) { }

  getDirectorsByProjectId(projectId): Observable<Directors[]>{
    return this.httpClient.get<Directors[]>(this.endpoint + "/projects/" + projectId).pipe(
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


 