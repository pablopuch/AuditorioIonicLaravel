import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Schedule } from '../../models/schedule';
import { SchedulesService } from '../../services/schedule.service';
import { Projects } from '../../models/projects';
import { ProjectsService } from '../../services/projects.service';
import { TypeScheduleService } from '../../services/type-schedule/type-schedule.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public schedule: Schedule;
  public projects_id: number[] = [];
  public projects: Projects;
  public project_id = this.activatedRoute.snapshot.paramMap.get('id');
  public scheduleArray: Schedule[] = [];

  constructor(private router: Router, private projectsService: ProjectsService,
    private scheduleService: SchedulesService, private typeScheduleService: TypeScheduleService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadInfo();

  }


  loadInfo() {
    this.projectsService.getProjects().subscribe((p: Array<Projects>) => {
      for (let project of p) {
        if (project.published == true) {
          this.projects_id.push(project.id);
          this.getSchedules();

        }
      }
    });



  }


  getSchedules() {
    for (let i of this.projects_id) {

      this.scheduleService.getSchedulesByProjectId(i).subscribe((s: Array<Schedule>) => {
        this.scheduleArray = s;

      });
    }

  }


}
