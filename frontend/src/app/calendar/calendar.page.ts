
import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { Schedule } from '../models/schedule';
import { SchedulesService } from '../services/schedule.service';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  public scheduleArray: Array<Schedule> = [];
  public schedule: Schedule;
  project_id = this.activatedRoute.snapshot.paramMap.get('id');;
  
 

  constructor(private router: Router, private scheduleService: SchedulesService, private activatedRoute: ActivatedRoute,
  ) {}

  
  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(){
    this.scheduleService.getSchedulesByProjectId(this.project_id).subscribe((s: Array<Schedule>) => {
      this.scheduleArray = s;
      console.log(this.project_id);
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

  // addSchedule(){
  //   const schedule: Schedule = { id: 0, model: "peperonilla", year: 1976 };
  //   this.scheduleService.createSchedule(schedule).subscribe(() => {
  //     this.loadInfo();
  //   });
  // }

  goCreate(){
    this.router.navigate(['create']);
  }

  goUpdate(idSchedule: number){
    this.router.navigate(['update/', idSchedule]);
  }

}