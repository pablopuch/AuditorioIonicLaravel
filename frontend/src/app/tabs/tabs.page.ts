import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
id = this.activatedRoute.snapshot.paramMap;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.id);
  }

}
