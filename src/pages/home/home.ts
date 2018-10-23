import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import { ClockCheckPage } from '../clock-check/clock-check';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mNav : any;
  mNavParams : any;
  ngIdEmployee : string;

  userList = new Array;

  constructor(public navCtrl: NavController, public nParams: NavParams) {

    this.mNav = navCtrl;
    this.mNavParams = nParams;
    this.ngIdEmployee = "";

    
    console.log(localStorage.getItem('User_List'));



    
    //Create and reset all the data and vars needed calling a method to do so.
    //After the sign in, collect all the data from the user and push to the next page
      //Show the info collected and show the current time.
      //When check-in/check-out update the data and push to the next page
        //Show the updated info.
        //After 5 seconds, change the ROOT path of the App to home.

    
  }

  ionViewDidEnter() {
  //  this.ngIdEmployee = "";

    

    //Checking if there is more than one page in the page stack, if so, ask if there are more than 2 pages. If so, delete the stacked pages.
    //We do this to prevent the timers to keep going even when the page is not visible.
   
    
  }


  connect(){

    let id = this.ngIdEmployee;

    let tempList = new Array();

    tempList = JSON.parse(localStorage.getItem('User_List'));


    for (let index = 0; index < tempList.length; index++) {
      
      if(id == tempList[index].user_id){

        this.mNav.push(ClockCheckPage, {'user_id':id, 'name':tempList[index].name, 'last_action':tempList[index].last_action, 'date_time':tempList[index].date_time}).then(
          response => {
            console.log('Response ' + response);
          },
          error => {
            console.log('Error: ' + error);
          }
        ).catch(exception => {
          console.log('Exception ' + exception);
        });


        this.ngIdEmployee = "";
        break;
      }
    }

    /* this.mNav.push(ClockCheckPage, {'id':"this is not good at all"});


       this.ngIdEmployee = ""; 
    */

    //do whatever with the data in the input

      
     


  }







}
