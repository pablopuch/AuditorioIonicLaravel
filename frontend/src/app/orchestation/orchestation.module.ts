import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrchestationPageRoutingModule } from './orchestation-routing.module';

import { OrchestationPage } from './orchestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrchestationPageRoutingModule
  ],
  declarations: [OrchestationPage]
})
export class OrchestationPageModule {}
