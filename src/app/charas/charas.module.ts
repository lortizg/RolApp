import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { charasPageRoutingModule } from './charas-routing.module';

import { charasPage } from './charas.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    charasPageRoutingModule
  ],
  declarations: [charasPage]
})
export class charasPageModule {}
