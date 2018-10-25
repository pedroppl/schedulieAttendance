import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {

  ngName : any = "";
  ngDateTime : any = "";
  ngLastAction : any = "";

  mNav : NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mNav = navCtrl;
    this.ngName = this.navParams.get('name');
    this.ngLastAction = this.navParams.get('last_action');
    this.ngDateTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();


  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ConfirmPage');
  }


  //5 seconds after the page is loaded, change the root to the HomePage
  ngOnInit(){
    setTimeout(() => {

      this.navCtrl.popToRoot(); 

    }, 5500);
  }

}
