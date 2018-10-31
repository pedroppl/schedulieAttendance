import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeManagerPage } from '../home-manager/home-manager';
import { LoginManagerProvider } from '../../providers/login-manager/login-manager';

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

  ngManagerEmail:any;
  ngManagerPassword:any;

  mLogin : LoginManagerProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams,  login: LoginManagerProvider) {

    this.mLogin = login;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginManagerPage');
  }


  connect(){

    this.mLogin.getLoginToken(this.ngManagerEmail, this.ngManagerPassword).subscribe(this.loginOk.bind(this), this.loginFail.bind(this) );

    this.navCtrl.push(HomeManagerPage);
  }


  loginOk(data:any){

    console.log(data['authResponse']);


    localStorage.setItem('token', data['authResponse'].token);
    localStorage.setItem('role_id', data['authResponse'].role_id);

  }


  loginFail(){

  }

}
