import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Schedule } from '../models/schedule';
import { SchedulesService } from '../services/schedule.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  checkoutForm = this.formBuilder.group({
    project_id: '',
    type_schedules_id: '',
    rooms_id: '',
    date: '',
    hourRange: '',
    note: ''
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private scheduleService: SchedulesService) { }

  ngOnInit() {
  }

  calendarGo() {
    this.router.navigate(['calendar']);

  }

  onSubmit(): void {
    const schedule: Schedule = {
      id: this.checkoutForm.get('project_id').value, project_id: this.checkoutForm.get('project_id').value,
      type_schedules_id: this.checkoutForm.get('type_schedules_id').value,
      date: this.checkoutForm.get('date').value, hourRange: this.checkoutForm.get('hourRange').value, note: this.checkoutForm.get('note').value,
      rooms_id: this.checkoutForm.get('rooms_id').value
    }

    this.scheduleService.createSchedule(schedule).subscribe(() => {

    });

    
    this.router.navigate(['/calendar']);

  }


}
