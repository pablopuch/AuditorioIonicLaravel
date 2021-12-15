import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
darkMode: boolean = true;
  constructor() { const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  this.darkMode = prefersDark.matches;
  }
  ngOnInit() {
  }

  enableDarkMode(){
    this.darkMode =!this.darkMode;
    document.body.classList.toggle('dark');
  }
}
