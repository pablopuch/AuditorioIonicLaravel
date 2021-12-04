import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import {SoloistProjects} from '../../models/soloist-projects'

@Injectable({
  providedIn: 'root'
})
export class SoloistProjectsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint: string = "http://localhost:8000/api/soloist-projects";

  constructor(private httpClient: HttpClient) { }

 getSoloistProjectsByProjectId(projectId): Observable<SoloistProjects[]>{
    return this.httpClient.get<SoloistProjects[]>(this.endpoint + "/projects/" + projectId).pipe(
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


 