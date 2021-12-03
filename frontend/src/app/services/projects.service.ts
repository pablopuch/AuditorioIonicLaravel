import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import {Projects} from '../models/projects'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint: string = "http://localhost:8000/api/projects";

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(this.endpoint);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}
}


 