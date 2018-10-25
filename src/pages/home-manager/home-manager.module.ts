import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeManagerPage } from './home-manager';

@NgModule({
  declarations: [
    HomeManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeManagerPage),
  ],
})
export class HomeManagerPageModule {}
