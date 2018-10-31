import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { ClockInOutServiceProvider } from '../../providers/clock-in-out-service/clock-in-out-service';


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
  rawDateTime : any;
  ngCheck : any = "";
  userId : any = "";
  mNav : any;
  mTimer : any;
  mClockInOut : ClockInOutServiceProvider
  newAction: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public elementRef: ElementRef, public clockInOut : ClockInOutServiceProvider) {

    this.mNav = navCtrl;

    this.mClockInOut = clockInOut;

    console.log(navParams.get('name'));

    this.ngName = navParams.get('name');
    this.ngAction = navParams.get('last_action');
    this.rawDateTime = navParams.get('date_time');
    
    this.userId = navParams.get('user_id');

    if(this.ngAction === "clock out"){

      this.ngCheck = "Clock In";
    }else{
      this.ngCheck = "Clock Out";
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];

  var weekday = new Array(7);
      weekday[0] =  "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

    let lastDate = new Date(this.rawDateTime);

    
    this.ngDateTime = lastDate.getHours() + "." + lastDate.getMinutes() + " " + weekday[lastDate.getDay()] + " " + this.getGetOrdinal(lastDate.getDate()) + " " + monthNames[lastDate.getMonth()] + " " + lastDate.getFullYear() 
    

    

    

  }

  getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
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

    let LastAction = this.ngAction;

    //Checking the last action of the user.
    if(LastAction === "clock out"){
      console.log("clocking in");

      this.newAction = "clock in";
      
      console.log(this.formatDate());
       this.mClockInOut.recordClockAction(this.userId, this.newAction, this.formatDate(), localStorage.getItem('token')).subscribe(this.responseOk.bind(this), this.responseFail.bind(this) );

    }else{
      console.log("clocking out");
      
      this.newAction = "clock out";

      this.mClockInOut.recordClockAction(this.userId, this.newAction, this.formatDate(), localStorage.getItem('token')).subscribe(this.responseOk.bind(this), this.responseFail.bind(this) );

      console.log(this.formatDate());
  
    }

  }


  formatDate(){
    let mTestDate = new Date();
          let year = mTestDate.getFullYear();
          let month = (mTestDate.getUTCMonth() + 1).toString();
          let day = mTestDate.getDate().toString();
          let hour = mTestDate.getHours().toString();
          let minutes = mTestDate.getMinutes().toString();
          let seconds =  mTestDate.getSeconds().toString();
            
          if(parseInt(month) < 10){
            let dummy = "0"+month;
            month = dummy;
            
          }
          if(parseInt(day) < 10){
            let dummy = "0"+day;
            day = (dummy);
          }
          if(parseInt(hour) < 10){
            let dummy = "0"+hour;
            hour = (dummy);
          }
          if(parseInt(minutes) < 10){
            let dummy = "0"+minutes;
            minutes = (dummy);
          }
          if(parseInt(seconds) < 10){
            let dummy = "0"+seconds;
            seconds = (dummy);
          }

          let formatedDate = year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds;

          return formatedDate;
  }



   //30 seconds after the page is loaded, change the root to the HomePage
   ngOnInit(){
   

    ($(".clock") as any).FlipClock({
      
      clockFace: 'TwentyFourHourClock'
    }
  );
   
  }

  responseOk(data:any){

    console.log(data);

    this.navCtrl.push(ConfirmPage, {'name':this.ngName, 'last_action':this.newAction}).then(
      response => {
        
        clearTimeout(this.mTimer);
      },
      error => {
       
      }
    ).catch(exception => {
     
    });



  }

  responseFail(data:any){

    console.log(data);

  }

}
