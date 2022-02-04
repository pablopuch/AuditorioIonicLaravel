import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Projects } from '../models/projects'
import { Storage } from '@ionic/storage';
import { LocalStorageService } from './local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  token = this.localStorageService.getToken().then((o) => {
    this.token=o;
  });


  getHttpOptions() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    return httpOptions;
  }

  endpoint: string = "http://localhost:8000/api/projects";

  constructor(private httpClient: HttpClient, private storage: Storage, private localStorageService: LocalStorageService) {

  }

  getProjects:  Observable<Projects[]>() {
    return this.httpClient.get<Projects[]>(this.endpoint, this.getHttpOptions());
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}


