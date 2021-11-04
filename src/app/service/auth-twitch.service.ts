import { Injectable, EventEmitter } from '@angular/core';
import { UserManager, User } from 'oidc-client';

const settings: any = {
  authority: 'https://id.twitch.tv/oauth2',
  client_id: '---------',
  redirect_uri: 'http://localhost:4200',
  post_logout_redirect_uri: 'http://localhost:4200/',
  response_type: 'id_token token',
  scope: 'openid user:read:email',

  //silent_redirect_uri: 'http://localhost:4200/silent-renew.html',
  automaticSilentRenew: true,
  accessTokenExpiringNotificationTime: 4,
  // silentRequestTimeout:10000,

  filterProtocolClaims: true,
  loadUserInfo: true
};

@Injectable({
  providedIn: 'root'
})

export class AuthTwitchService {
  public mgr: UserManager = new UserManager(settings);
  currentUser: User = new User(settings);
  userLoadededEvent: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  login(){
    this.mgr.signinRedirect({ data: 'some data' }).then(function () {
      console.log('signinRedirect done');
    }).catch(function (err) {
      console.log(err);
    });
    
  }

  getmgr(){
    /*this.mgr.getUser().then((user: any) => {
      this.currentUser = user;
      console.log('got user', this.currentUser);
      this.userLoadededEvent.emit(user);
    }).catch(function (err) {
      console.log(err);
    });*/

    console.log(this.currentUser.access_token);
    console.log(window.location.href);
    let url = window.location.href;
    let cortada = url.split("=");
    console.log(cortada);
    let cortada2 = cortada[1].split("&");
    console.log(cortada2[0]);
  }

}
