import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
darkMode: boolean = true;
  constructor() {
  }
  ngOnInit() {
  }

  enableDarkMode(){
    document.body.classList.toggle('dark')
    
  }
}
