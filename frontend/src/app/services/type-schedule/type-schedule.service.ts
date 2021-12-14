import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { TypeSchedule } from 'src/app/models/typee-schedule/type-schedule';

@Injectable({
  providedIn: 'root'
})
export class TypeScheduleService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint: string = "http://localhost:8000/api/type-schedule";

  constructor(private httpClient: HttpClient) { }

  getTypeScheduleById(id): Observable<TypeSchedule[]> {
    return this.httpClient.get<TypeSchedule[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Schedule fetched: ${id}`)),
        catchError(this.handleError<TypeSchedule[]>(`Get type schedule id=${id}`))
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

