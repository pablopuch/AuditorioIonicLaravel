import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrchestationPage } from './orchestation.page';

const routes: Routes = [
  {
    path: '',
    component: OrchestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrchestationPageRoutingModule {}
