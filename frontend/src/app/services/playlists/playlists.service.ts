import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import {Playlists} from '../../models/playlists/playlists'

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  token="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };


  endpoint: string = "http://localhost:8000/api/playlists";

  constructor(private httpClient: HttpClient, private storage:Storage) {
    this.storage.get("access_token").then((token) => {
      this.httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
     
    })};

 getPlaylistProjectsByProjectId(projectId): Observable<Playlists[]>{
    return this.httpClient.get<Playlists[]>(this.endpoint + "/projects/" + projectId, this.httpOptions).pipe(
      tap(_=> console.log("PlaylistProject retrieved")),
      catchError(this.handleError<Playlists[]>("Get playlist project", []))
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


 