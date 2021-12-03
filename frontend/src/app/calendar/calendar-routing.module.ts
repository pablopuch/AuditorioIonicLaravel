import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPage } from './calendar.page';

const routes: Routes = [
  {
   
    path: '',
    component: CalendarPage,
    children: [
      {
        path: 'members',
        children: [
          {
            path: '',
            loadChildren: () => import('../members/members.module').then(m => m.MembersPageModule)
          }
        ]
      },
      // {
      //   path: 'calendar',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../calendar/calendar.module').then(m => m.CalendarPageModule)
      //     }
      //   ]
      // },
      {
        path: 'works',
        children: [
          {
            path: '',
            loadChildren: () => import('../works/works.module').then(m => m.WorksPageModule)
          }
        ]
      },
      {
        path: 'orchestation',
        children: [
          {
            path: '',
            loadChildren: () => import('../orchestation/orchestation.module').then(m => m.OrchestationPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'schedule',
        pathMatch: 'full'
      }


    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPageRoutingModule { }
