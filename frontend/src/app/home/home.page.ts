import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarPage } from '../calendar/calendar.page';
import { Schedule } from '../models/schedule';
import { SchedulesService } from '../services/schedule.service';
import { MenuController } from '@ionic/angular';
import { Projects } from '../models/projects';
import { ProjectsService } from '../services/projects.service';
import { TypeSchedule } from '../models/typee-schedule/type-schedule';
import { TypeScheduleService } from '../services/type-schedule/type-schedule.service';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public performanceArray: Array<Schedule> = [];
  public essayArray: Array<Schedule> = [];
  public schedule: Schedule;
  public projects_id: number[] = [];
  public projectsArray: Array<Projects> = [];
  public projects: Projects;
  public project_id = this.activatedRoute.snapshot.paramMap.get('id');
  @ViewChild('mySlider', { static: true }) slides: IonSlides;




  constructor(private router: Router, private projectsService: ProjectsService, 
    private scheduleService: SchedulesService, private typeScheduleService: TypeScheduleService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadInfo();

  }

  swipeNext(){
    this.slides.slideNext();
  }

  loadInfo() {
    this.projectsService.getProjects().subscribe((p: Array<Projects>) => {
      for (let project of p) {
        if (project.published == true) {
          this.projectsArray.push(project);

          this.projects_id.push(project.id);
      
        }
      }

      for (let i of this.projects_id) {
      
        this.scheduleService.getSchedulesByProjectId(i).subscribe((s: Array<Schedule>) => {
 
          for (let event of s) {

            this.typeScheduleService.getTypeScheduleById(event.type_schedules_id).subscribe((typeScheduleArray: Array<TypeSchedule>) => {
              for (let t of typeScheduleArray) {
                if (t.nameType == "Ensayo AM" || t.nameType == "Ensayo PM" || t.nameType == "Ensayo General") {
                  this.essayArray.push(event);
                } else if (t.nameType == "Concierto") {
                  this.performanceArray.push(event);
                }
                   console.log("Conciertos: ", this.performanceArray, " y ensayos: ", this.essayArray);
              }
           
            });
          }
        });
      }
     
    })


    

    
  }

  goToOtherPage() {
    this.router.navigateByUrl("/other-page");
  }


}











