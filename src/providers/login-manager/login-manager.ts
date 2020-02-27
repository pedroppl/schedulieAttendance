import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the LoginManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginManagerProvider {

  constructor(public http: HttpClient) {
    
  }



  public getLoginToken(email: string, password:string /* there are other optionals params that MUST be included */): Observable<any> {
    let url = "removed_url";

    let postParams = {email:'', password:''}
    postParams.email=email;
    postParams.password=password

    return this.http.post(url, postParams);
  }

}
