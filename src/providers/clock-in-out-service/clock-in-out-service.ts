import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the ClockInOutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClockInOutServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ClockInOutServiceProvider Provider');
  }


  public recordClockAction(id:string, action: string, action_ts:string , token:any/* there are other optionals params that MUST be included */): Observable<any> {
    //let url = "";
    let url = "removed_url"
    url = url + id + "/clock";

      let options = {token:''}
      
      options.token=token;

    let postParams = {/* token:'', */action:'', action_ts:''}
   //postParams.token=token;
    postParams.action=action;
    postParams.action_ts=action_ts
   
    return this.http.post(url, postParams, {params:options});
  }


  public getStaffInfo(pin: string, token:any /* there are other optionals params that MUST be included */): Observable<any> {
    let url = "removed_url"


    let options = {pin:'', token:''}
    options.pin=pin;
    options.token=token

   
    return this.http.get(url, {params:options});
  }


  public getStaffClockInfo(id: string, token:any /* there are other optionals params that MUST be included */): Observable<any> {
    let url = "removed_url/"+id+"/";


    let options = {token:''}
    
    options.token=token

   
    return this.http.get(url, {params:options});
  }


  


}
