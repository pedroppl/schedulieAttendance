import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginManagerPage } from './login-manager';

@NgModule({
  declarations: [
    LoginManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginManagerPage),
  ],
})
export class LoginManagerPageModule {}
