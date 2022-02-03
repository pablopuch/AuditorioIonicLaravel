import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import {SoloistProjects} from '../../models/soloist-projects'

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SoloistProjectsService {

  token="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };

  endpoint: string = "http://localhost:8000/api/soloist-projects";

  constructor(private httpClient: HttpClient, private storage:Storage) {
    this.storage.get("access_token").then((token) => {
      this.httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
     
    })};

 getSoloistProjectsByProjectId(projectId): Observable<SoloistProjects[]>{
    return this.httpClient.get<SoloistProjects[]>(this.endpoint + "/projects/" + projectId, this.httpOptions).pipe(
      tap(_=> console.log("SoloistProject retrieved")),
      catchError(this.handleError<SoloistProjects[]>("Get soloist project", []))
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


 