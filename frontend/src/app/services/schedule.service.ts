import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Schedule } from '../models/schedule';
import { catchError, tap } from 'rxjs/operators';

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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  endpoint: string = "http://localhost:8000/api/schedule";

  constructor(private httpClient: HttpClient) { }

  getSchedules(): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(this.endpoint);
  }

  getScheduleById(id: number): Observable<Schedule>{
    return this.httpClient.get<Schedule>(this.endpoint + "/" + id);
  }

  createSchedule(schedule: Schedule): Observable<Schedule>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("project_id", schedule.project_id.toString());
    bodyEncoded.append("type_schedules_id", schedule.type_schedules_id.toString());
    bodyEncoded.append("room_id", schedule.rooms_id.toString());
    bodyEncoded.append("date", schedule.date.toString());
    bodyEncoded.append("hourRange", schedule.hourRange.toString());
    bodyEncoded.append("note", schedule.note.toString());
   
    const body = bodyEncoded.toString();

    console.log("createSchedule")
    console.log(JSON.stringify(schedule))
    return this.httpClient.post<Schedule>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  updateSchedule(id, schedule: Schedule): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(schedule), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Schedule updated: ${id}`)),
        catchError(this.handleError<Schedule[]>('Update Schedule'))
      );
  }

  // createScheduleUsingJSON(schedule: Schedule): Observable<Schedule>{
  //   return this.httpClient.post<Schedule>(this.endpoint, JSON.stringify(schedule), httpOptions);
  // }

  deleteSchedule(idSchedule: number): Observable<Schedule>{
    return this.httpClient.delete<Schedule>(this.endpoint + "/" + idSchedule);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}
}