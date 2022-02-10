import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from '../../models/projects';
import { ProjectsService } from '../../services/projects.service';
import { Browser } from '@capacitor/browser';
import { PdfService } from 'src/app/services/pdf/pdf.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
 

  public projectsArray: Array<Projects> = [];
  public projects: Projects;







  constructor( private router: Router, private projectsService: ProjectsService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.loadInfo();
  
  }



  loadInfo() {
    
    this.projectsService.getProjects().then(o => {
      o.subscribe((p: Array<Projects>) => {
        this.projectsArray = p.filter((project) => {
          return project.published == true;
        })
        // for (let project of p) {
        //   if (project.published == true) {
        //     this.projectsArray.push(project);
        //   }
        // }
      })
    })

  }


}

















