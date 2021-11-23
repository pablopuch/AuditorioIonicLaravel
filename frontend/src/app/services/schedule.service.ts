import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule';

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

  endpoint: string = "http://localhost:8000/api/schedule";

  constructor(private httpClient: HttpClient) { }

  getSchedules(): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(this.endpoint);
  }

  getScheduleById(id: number): Observable<Schedule>{
    return this.httpClient.get<Schedule>(this.endpoint + "/" + id);
  }

  // createSchedule(schedule: Schedule): Observable<Schedule>{
  //   let bodyEncoded = new URLSearchParams();
  //   bodyEncoded.append("model", schedule.model);
  //   bodyEncoded.append("year", schedule.year.toString());
  //   const body = bodyEncoded.toString();

  //   console.log("createSchedule")
  //   console.log(JSON.stringify(schedule))
  //   return this.httpClient.post<Schedule>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  // }

  createScheduleUsingJSON(schedule: Schedule): Observable<Schedule>{
    return this.httpClient.post<Schedule>(this.endpoint, JSON.stringify(schedule), httpOptions);
  }

  deleteSchedule(idSchedule: number): Observable<Schedule>{
    return this.httpClient.delete<Schedule>(this.endpoint + "/" + idSchedule);
  }
}