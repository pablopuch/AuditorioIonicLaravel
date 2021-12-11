
import { Component } from '@angular/core';
import { ConfigurationPage } from './configuration/configuration.page';
import { HomePage } from './home/home.page';
import { ProjectsPage } from './projects/projects.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent   {

  constructor() { }

//   private rootPage: any;
//   title = 'Inicio'
//   icon = 'home-music.svg';
//   pages = {home: {
//     component: HomePage,
//     title: 'Inicio',
//     icon: 'home-music.svg'
//  },
//  projects: {
//   component: ProjectsPage,
//   title: 'Proyectos',
//   icon: 'projects-icon.svg'
// },
// configuration: {
//   component: ConfigurationPage,
//   title: 'Configuración',
//   icon: 'configuration-icon.svg'
// }
    
//   }
  
//  changeNameAndIcon(page){
//     this.rootPage = this.pages[page].component;
//     this.title = this.pages[page].title;
//      this.icon = this.pages[page].icon;

//   }
  


}