import { Component, OnInit } from '@angular/core';
import { AuthTwitchService } from '../service/auth-twitch.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  

  constructor(public auth: AuthTwitchService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.login();
  }
  
  getmgr(){
    this.auth.getmgr();
  }

}
