import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';


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
  mTimer : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public elementRef: ElementRef) {

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


    //Checking if there is more than one page in the page stack, if so, ask if there are more than 2 pages. If so, delete the stacked pages.
    //We do this to prevent the timers to keep going even when the page is not visible.
   
    console.log("page stack count: " + this.navCtrl.length());
   
    
     this.mTimer = setTimeout(() => {

        if( this.navCtrl.length() > 1){
          if(this.navCtrl.length() > 2){
            this.navCtrl.remove(2);
            this.navCtrl.remove(3);
            
          }else{
           
            this.navCtrl.remove(1, 1);
          }
          
        }
       }, 30000);
  

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
        
        clearTimeout(this.mTimer);
      },
      error => {
       
      }
    ).catch(exception => {
     
    });


 

  }



   //30 seconds after the page is loaded, change the root to the HomePage
   ngOnInit(){
   

    ($(".clock") as any).FlipClock({
      
      clockFace: 'TwentyFourHourClock'
    }
  );

  
   
  }

}
