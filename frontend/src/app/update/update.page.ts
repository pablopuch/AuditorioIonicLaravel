import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SchedulesService } from './../services/schedule.service';
import { Schedule } from '../models/schedule';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  id: any;

  checkoutForm: FormGroup;



  constructor(
    private scheduleCrudService: SchedulesService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    console.log(this.id);
    
    this.fetchSchedule(this.id);
    this.checkoutForm = this.formBuilder.group({
      project_id: [''],
      type_schedules_id: [''],
      room_id: [''],
      date: [''],
      hourRange: [''],
      note: ['']
    })
  }

  fetchSchedule(id) {
    console.log(id);
    this.scheduleCrudService.getScheduleById(id).subscribe((data) => {
      console.log(this.scheduleCrudService.getScheduleById(id));
      this.checkoutForm.setValue({
        project_id: data['project_id'],
        type_schedules_id: data['type_schedules_id'],
        room_id: data['room_id'],
        date: data['date'],
        hourRange: data['hourRange'],
        note: data['note']
      });
    });
  }

  // onSubmit() {
  //   if (!this.checkoutForm.valid) {
  //     return false;
  //   } else {
  //     this.scheduleCrudService.updateSchedule(this.id, this.checkoutForm.value)
  //       .subscribe(() => {
  //         this.checkoutForm.reset();
  //         this.router.navigate(['/list']);
  //       })
  //   }
  // }

  calendarGo() {
    this.router.navigate(['calendar']);

  }
  onSubmit() {
    if (!this.checkoutForm.valid) {
    return false;
  } else{
    const schedule: Schedule = {
      id: this.checkoutForm.get('project_id').value, project_id: this.checkoutForm.get('project_id').value,
      type_schedules_id: this.checkoutForm.get('type_schedules_id').value,
      date: this.checkoutForm.get('date').value, hourRange: this.checkoutForm.get('hourRange').value, note: this.checkoutForm.get('note').value,
      rooms_id: this.checkoutForm.get('room_id').value
    }

    this.scheduleCrudService.updateSchedule(this.id, schedule).subscribe(() => {

    });

    this.calendarGo();
  }
  }


}