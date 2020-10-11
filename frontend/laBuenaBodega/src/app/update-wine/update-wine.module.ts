import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateWinePageRoutingModule } from './update-wine-routing.module';

import { UpdateWinePage } from './update-wine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateWinePageRoutingModule
  ],
  declarations: [UpdateWinePage]
})
export class UpdateWinePageModule {}
