import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeManagerPage } from '../home-manager/home-manager';

/**
 * Generated class for the LoginManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-manager',
  templateUrl: 'login-manager.html',
})
export class LoginManagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginManagerPage');
  }


  connect(){

    this.navCtrl.push(HomeManagerPage);
  }

}
