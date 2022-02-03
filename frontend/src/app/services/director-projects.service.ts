import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import {DirectorProjects} from '../models/director-projects'
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DirectorProjectsService {
  token="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };


  endpoint: string = "http://localhost:8000/api/director-projects";

  constructor(private httpClient: HttpClient, private storage:Storage) {
    this.storage.get("access_token").then((token) => {
      this.httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    })
   }

  getDirectorProjectsByProjectId(projectId): Observable<DirectorProjects[]>{
    return this.httpClient.get<DirectorProjects[]>(this.endpoint + "/projects/" + projectId, this.httpOptions).pipe(
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


 