import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarPage } from '../calendar/calendar.page';
import { Schedule } from '../models/schedule';
import { SchedulesService } from '../services/schedule.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private menu: MenuController) { }
  calendarGo() {
    this.router.navigate(['calendar']);

  }

  testsGo() {
    this.router.navigate(['tests']);

  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  
}


