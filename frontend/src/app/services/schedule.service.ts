import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Schedule } from '../models/schedule';
import { catchError, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  token="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };


  endpoint: string = "http://localhost:8000/api/schedule";

  constructor(private httpClient: HttpClient, private storage:Storage) {
    this.storage.get("access_token").then((token) => {
      this.httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
     
    });  }

  getSchedules(): Observable<Schedule[]>{
    console.log(this.token + " " + this.httpOptions);
    return this.httpClient.get<Schedule[]>(this.endpoint, this.httpOptions);
  }

  getScheduleById(id): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Schedule fetched: ${id}`)),
        catchError(this.handleError<Schedule[]>(`Get schedule id=${id}`))
      );
  }

  getSchedulesByProjectId(projectId): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(this.endpoint + "/projects/" + projectId, this.httpOptions).pipe(
      tap(_=> console.log("Schedule retrieved")),
      catchError(this.handleError<Schedule[]>("Get shedule", []))
    );
  }

  createSchedule(schedule: Schedule): Observable<Schedule>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("project_id", schedule.project_id.toString());
    bodyEncoded.append("type_schedules_id", schedule.type_schedules_id.toString());
    bodyEncoded.append("rooms_id", schedule.rooms_id.toString());
    bodyEncoded.append("date", schedule.date.toString());
    bodyEncoded.append("hourRange", schedule.hourRange.toString());
    bodyEncoded.append("note", schedule.note.toString());
   
    const body = bodyEncoded.toString();

    return this.httpClient.post<Schedule>(this.endpoint, body,  this.httpOptions);
  }

  updateSchedule(id, schedule: Schedule): Observable<any> {
    console.log(schedule.project_id.toString());
    let bodyEncoded = new URLSearchParams();
   
    bodyEncoded.append("project_id", schedule.project_id.toString());
  
    bodyEncoded.append("type_schedules_id", schedule.type_schedules_id.toString());
    bodyEncoded.append("rooms_id", schedule.rooms_id.toString());
    bodyEncoded.append("date", schedule.date.toString());
    bodyEncoded.append("hourRange", schedule.hourRange.toString());
  
    bodyEncoded.append("note", schedule.note.toString());

    const body = bodyEncoded.toString();



    return this.httpClient.put<Schedule>(this.endpoint + "/" + id, body, this.httpOptions).pipe(
      tap(_=> console.log(`Shedule update : ${id}`)),
      catchError(this.handleError<Schedule[]>("Update schdule"))
    );;
  }


  deleteSchedule(idSchedule: number): Observable<Schedule>{
    return this.httpClient.delete<Schedule>(this.endpoint + "/" + idSchedule, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}
}