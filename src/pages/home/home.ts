import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import { ClockCheckPage } from '../clock-check/clock-check';
import { LoginManagerPage } from '../login-manager/login-manager';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mNav : any;
  mNavParams : any;
  ngIdEmployee : string;

  userList = new Array;

  mConnected : boolean;


  //TODO CREATE A LOGIN PAGE TO ALLOW A MANAGER TO LOG IN WITH EMAIL/USER AND PASSWORD.
  //CREATE A HOME PAGE TO ADD OPTIONS FOR THE MANAGER, ONE OF THE OPTIONS MUST BE THE CLOCK IN/OUT
  
  // change to pop to the employee home page 
  // Maybe changing the root at all?
  // There should be a special code to allow a manager to go back to the main manager page.



  constructor(public navCtrl: NavController, public nParams: NavParams, public toastCtrl: ToastController) {

    this.mNav = navCtrl;
    this.mNavParams = nParams;
    this.ngIdEmployee = "";

    
    console.log(localStorage.getItem('User_List'));

    
    //After the sign in, collect all the data from the user and push to the next page
      //Show the info collected and show the current time.
      //When check-in/check-out update the data and push to the next page
        //Show the updated info.
        //After 5 seconds, change the ROOT path of the App to home.

    
  }

  ionViewDidEnter() {

    this.mConnected = false;

  }


  connect(){



    //temporary workaround to get user info and "connect" the user to the app.
    let id = this.ngIdEmployee;

    let tempList = new Array();

    tempList = JSON.parse(localStorage.getItem('User_List'));

    if(id == "exit"){
      this.navCtrl.setRoot(LoginManagerPage);
      return;
    }


    for (let index = 0; index < tempList.length; index++) {

      if(id == tempList[index].user_id){

        this.mConnected = true;

        this.mNav.push(ClockCheckPage, {
          'user_id':id, 
          'name':tempList[index].name,
          'last_action':tempList[index].last_action, 
          'date_time':tempList[index].date_time
        });


        this.ngIdEmployee = "";
        break;
      }else{
        this.mConnected = false;
      }
    }

    //Shows a Toast if the connection PIN was wrong.
    if(this.mConnected != true){
      let toast = this.toastCtrl.create({
        message: 'Incorrect Employee PIN, Please try again.',
        duration: 3000,
        position: "top"
      });
      toast.present();

      this.ngIdEmployee = "";
    }

  }







}
