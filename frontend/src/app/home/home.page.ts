import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../models/schedule';
import { SchedulesService } from '../services/schedule.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public bikes: Array<Schedule> = [];
  public myBike: Schedule;

  constructor(private router: Router, private scheduleService: SchedulesService) {}
  
  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(){
    this.scheduleService.getSchedules().subscribe((b: Array<Schedule>) => {
      this.bikes = b;
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

  deleteSchedule(idSchedule: number){
    this.scheduleService.deleteSchedule(idSchedule).subscribe(() => {
      this.loadInfo();
    });
  }

}