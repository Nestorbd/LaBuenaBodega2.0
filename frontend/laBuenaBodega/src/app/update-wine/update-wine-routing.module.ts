import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateWinePage } from './update-wine.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateWinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateWinePageRoutingModule {}
