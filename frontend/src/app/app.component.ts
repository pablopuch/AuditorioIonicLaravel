import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent   {

  constructor(private localStorageService:LocalStorageService) { }

}