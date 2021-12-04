import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import {DirectorProjects} from '../models/director-projects'

@Injectable({
  providedIn: 'root'
})
export class DirectorProjectsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint: string = "http://localhost:8000/api/director-projects";

  constructor(private httpClient: HttpClient) { }

  getDirectorProjectsByProjectId(projectId): Observable<DirectorProjects[]>{
    return this.httpClient.get<DirectorProjects[]>(this.endpoint + "/projects/" + projectId).pipe(
      tap(_=> console.log("DirectorProject retrieved")),
      catchError(this.handleError<DirectorProjects[]>("Get director project", []))
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


 