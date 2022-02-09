import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharSelectPage } from './char-select.page';

const routes: Routes = [
  {
    path: '',
    component: CharSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharSelectPageRoutingModule {}
