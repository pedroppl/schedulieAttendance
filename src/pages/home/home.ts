import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import { ClockCheckPage } from '../clock-check/clock-check';
import { LoginManagerPage } from '../login-manager/login-manager';
import { ClockInOutServiceProvider } from '../../providers/clock-in-out-service/clock-in-out-service';

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

  mInputLenght : any = 0;

  action:any;
  action_ts:any;
  name:any;
  loading : any;
  staffID :any;

  constructor(public navCtrl: NavController,
     public nParams: NavParams, 
     public toastCtrl: ToastController, 
     public alertCtrl: AlertController,
     public mStaffInfo: ClockInOutServiceProvider,
     public loadingCtrl: LoadingController) {

      this.mNav = navCtrl;
      this.mNavParams = nParams;
      this.ngIdEmployee = "";

  }

  ionViewDidEnter() {

    this.mConnected = false;

    this.setLoadingWindow();

  }

  setLoadingWindow(){
    //lets prepare a loading popup.
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  }


  numberPad(numberInput:any){

    if(numberInput == "back"){
      if(this.ngIdEmployee.length > 0){
        this.ngIdEmployee = this.ngIdEmployee.slice(0, this.ngIdEmployee.length -1)
        this.mInputLenght--;
      }
    }else{
      if(this.mInputLenght <=4){
        this.ngIdEmployee += numberInput;
        this.mInputLenght++;
      }
  
      if(this.mInputLenght >= 4){
        this.connect();

      }
    }

  }

  responseOk(data:any){

   // console.log(data);

    //Connection was succesful! if there is no data, show error. If so, lets do the next connection.
    if(data === null){

      if(this.mConnected != true){
        let toast = this.toastCtrl.create({
          message: 'Incorrect Employee PIN, Please try again.',
          duration: 3000,
          position: "top"
        });
        toast.present();
        this.loading.dismiss();
        this.setLoadingWindow();
  
        this.ngIdEmployee = "";
        this.mInputLenght = 0;
      }
  

    }else{
      this.mConnected = true;

      this.name = data.name;
      //We have the name of the user, lets check his clock data.

      this.staffID = data.id;

      this.mStaffInfo.getStaffClockInfo(data.id, localStorage.getItem('token')).subscribe(this.responseClockOk.bind(this), this.responseFail.bind(this) );

    }

  }


  responseClockOk(data:any){

    //console.log(data);
    
    this.action = data.action;
    this.action_ts = data.action_ts;

    this.loading.dismiss();

    this.mNav.push(ClockCheckPage, {
       'user_id':this.staffID, 
       'name':this.name,
       'last_action':this.action, 
       'date_time':this.action_ts
     });
 
 
     this.ngIdEmployee = "";
     this.mInputLenght = 0;

  }

  responseFail(data:any){

    console.log(data);
    let toast = this.toastCtrl.create({
      message: 'Cant connect with the server',
      duration: 3000,
      position: "top"
    });
    toast.present();
    this.ngIdEmployee = "";

  }


  connect(){

    this.loading.present();
   
    
  
    //If we dont get a response in 10 seconds, lets close the loading window and tell the user about it.
    setTimeout(() => {
      this.loading.dismiss();
      
    }, 10000);

   // console.log(localStorage.getItem('token'));

  
    let pin = this.ngIdEmployee;

    this.mStaffInfo.getStaffInfo(pin, localStorage.getItem('token')).subscribe(this.responseOk.bind(this), this.responseFail.bind(this) );

    
  }


  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Manager Options',
      message: "Enter a valid code",
      inputs: [
        {
          name: 'Code',
          placeholder: 'Code'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {

            console.log(data);
            if(data['Code'] === "exit"){
              this.navCtrl.setRoot(LoginManagerPage);
            }
          }
        }
      ]
    });
    prompt.present();
  }







}
