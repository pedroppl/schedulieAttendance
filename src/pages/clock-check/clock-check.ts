import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { HomePage } from '../home/home';


/**
 * Generated class for the ClockCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clock-check',
  templateUrl: 'clock-check.html',
})
export class ClockCheckPage {
  

  ngName : any = "";
  ngAction : any = "";
  ngDateTime : any = "";
  ngCheck : any = "";
  userId : any = "";
  mNav : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mNav = navCtrl;

    console.log(navParams.get('name'));

    this.ngName = navParams.get('name');
    this.ngAction = navParams.get('last_action');
    this.ngDateTime = navParams.get('date_time');
    
    this.userId = navParams.get('user_id');

    if(this.ngAction === "Clocked Out"){

      this.ngCheck = "Clock In";
    }else{
      this.ngCheck = "Clock Out";
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClockCheckPage');
  }


  update(){

    let mAction = this.ngAction;
    //let mDateTime = this.ngDateTime;
    let mId = this.userId;

    let newAction = "";
    let newDateTime = "";

    //Getting the user data and parse it
    let tempList = new Array();
    tempList = JSON.parse(localStorage.getItem('User_List'));

      //Looking for the user we need to update the data.
    for (let index = 0; index < tempList.length; index++) {
    
      if(mId == tempList[index].user_id){

        if(mAction === "Clocked Out"){

          console.log("wat");
          
          newAction = "Clocked In";
          newDateTime = new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString()

          //update the data in the tempList
          tempList[index].last_action = newAction; 
          tempList[index].date_time = newDateTime;

        }else{
          newAction = "Clocked Out";
          newDateTime =  new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString()

          //Update the data in the tempList
          tempList[index].last_action = newAction;
          tempList[index].date_time = newDateTime;
        }
      }
    }

    //Update the localStorage safely
    localStorage.removeItem('User_List');
    localStorage.setItem('User_List', JSON.stringify(tempList));

          console.log(JSON.parse(localStorage.getItem('User_List')));


    //this.navCtrl.setRoot(HomePage);


    //this.navCtrl.get

    
    this.navCtrl.push(ConfirmPage, {'name':this.ngName, 'last_action':newAction}).then(
      response => {
        console.log('Response ' + response);
      },
      error => {
        console.log('Error: ' + error);
      }
    ).catch(exception => {
      console.log('Exception ' + exception);
    });


 

  }



   //5 seconds after the page is loaded, change the root to the HomePage
   ngOnInit(){
    setTimeout(() => {
        // this.navCtrl.popToRoot();
        // might try this instead
        this.navCtrl.setRoot(HomePage);
    }, 30000);
  }


  /// Functions and stuff for clock widget




}
