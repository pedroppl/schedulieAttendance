import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClockCheckPage } from './clock-check';

@NgModule({
  declarations: [
    ClockCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(ClockCheckPage),
  ],
})
export class ClockCheckPageModule {}
