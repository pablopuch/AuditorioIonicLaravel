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
  }

  ngOnInit() {
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
    this.scheduleCrudService.getScheduleById(id).subscribe((data) => {
      console.log(data);
      this.checkoutForm.setValue({
        project_id: data[0]["project_id"],
        type_schedules_id: data[0]['type_schedules_id'],
        room_id: data[0]['rooms_id'],
        date: data[0]['date'],
        hourRange: data[0]['hourRange'],
        note: data[0]['note']
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
    
    this.scheduleCrudService.updateSchedule(this.id, this.checkoutForm.value).subscribe(() => {
this.checkoutForm.reset();
    });
   this.router.navigate(['/calendar']);
    }

    

   
  }
  


}