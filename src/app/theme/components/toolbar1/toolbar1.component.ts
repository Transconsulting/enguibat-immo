import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/_services/shared.service';
import { UserService } from 'src/_services/user.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-toolbar1',
  templateUrl: './toolbar1.component.html'
})
export class Toolbar1Component implements OnInit {
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  public connected= false
 
  constructor(private _user: UserService, public  appService:AppService,private _router: Router, public sharedService: SharedService) { }

  ngOnInit() { 
    this.checkIfUserIsConnected()
  }
  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }

  checkIfUserIsConnected(){
    let connectionStatus= sessionStorage.getItem('auth-token-guine')
    if(connectionStatus != null){
      this.connected= true
    }
  }



  public signout(){
          let b= confirm("Voulez-vous vraiment vous deconnecter?")
          if(b){
            this.connected= false
            this._user.behavior.next(false)
            sessionStorage.clear()
          }
  }
}