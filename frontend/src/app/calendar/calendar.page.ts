
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../models/schedule';
import { SchedulesService } from '../services/schedule.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  public scheduleArray: Array<Schedule> = [];
  public myBike: Schedule;

  constructor(private router: Router, private scheduleService: SchedulesService) {}
  
  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(){
    this.scheduleService.getSchedules().subscribe((s: Array<Schedule>) => {
      this.scheduleArray = s;
    })
  }

  goToOtherPage(){
    this.router.navigateByUrl("/other-page");
  }

  // addAnotherSchedule(){
  //   console.log("addAnotherSchedule")
  //   const schedule: Schedule = { id: 0, model: "peperonilla", year: 1976 };
  //   this.scheduleService.createSchedule(schedule).subscribe(() => {
  //     this.loadInfo();
  //   });
  // }

  // addAnotherScheduleUsingJSON(){
  //   console.log("addAnotherScheduleUsingJSON")
  //   const schedule: Schedule = { id: 0, model: "peperonilla", year: 1976 };
  //   this.scheduleService.createScheduleUsingJSON(schedule).subscribe(() => {
  //     this.loadInfo();
  //   });
  // }

  // deleteSchedule(idSchedule: number){
  //   this.scheduleService.deleteSchedule(idSchedule).subscribe(() => {
  //     this.loadInfo();
  //   });
  // }

}