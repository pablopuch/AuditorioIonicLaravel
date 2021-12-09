import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public id : string;
  
  constructor(private router: Router) { this.id = this.router.url.substr(this.router.url.length - 1); }

  ngOnInit() {
   
  }

}
