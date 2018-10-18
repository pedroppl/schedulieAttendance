import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


let userList = new Array;

let user1 = {

    'user_id': 'abc1',
    'name': 'John Woodlock',
    'last_action': 'Clocked In',
    'date_time': new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString()
  };
  let user2 = {

    'user_id': '1234',
    'name': 'Anna Roxane',
    'last_action': 'Clocked Out',
    'date_time': new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString()
  };
  let user3 = {

    'user_id': '3344',
    'name': 'Emily Timto',
    'last_action': 'null',
    'date_time': new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString()
  };


 
  userList[0] = user1;
  userList[1] = user2;
  userList[2] = user3;


  localStorage.setItem('User_List',JSON.stringify(userList));

