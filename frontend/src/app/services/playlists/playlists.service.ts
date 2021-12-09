import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import {Playlists} from '../../models/playlists/playlists'

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint: string = "http://localhost:8000/api/playlists";

  constructor(private httpClient: HttpClient) { }

 getPlaylistProjectsByProjectId(projectId): Observable<Playlists[]>{
    return this.httpClient.get<Playlists[]>(this.endpoint + "/projects/" + projectId).pipe(
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


 