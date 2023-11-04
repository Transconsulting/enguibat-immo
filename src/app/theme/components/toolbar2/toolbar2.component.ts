import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html'
})
export class Toolbar2Component implements OnInit {
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  public connected= false
  
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.checkIfUserIsConnected()
   }

  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }

  public signout(){
    let b= confirm("Voulez-vous vraiment vous deconnecter?")
    if(b){
      this.connected= false
      sessionStorage.clear()
    }
}

checkIfUserIsConnected(){
  let connectionStatus= sessionStorage.getItem('auth-token-guine')
  if(connectionStatus != null){
    this.connected= true
  }
}
}