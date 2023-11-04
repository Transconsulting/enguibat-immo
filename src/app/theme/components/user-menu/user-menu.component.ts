import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from 'src/_services/user.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  public nomComplet =""
  public connected: Boolean = false
 public f: any
  constructor(
    public appService: AppService,
    private _router: Router,
     private tokenStorageService: TokenStorageService,
     private _user: UserService
     ) { }

  ngOnInit() {
    this.checkIfUserIsConnected()
    this.getDecodedToken()
  }

  public getUserByEmail(email: any){
    this._user.getUserByEmail(email)
      .subscribe((data: any)=>{
        this.nomComplet = data?.prenom + " " + data?.nom
      })
  }
  
  
  async checkIfUserIsConnected(){
   this._user.connected.subscribe((status: any)=>{
      this.connected= status
   })  
    // let connectionStatus= sessionStorage.getItem('auth-token-guine')
    // if(connectionStatus != null){
    //   this.connected= true
    // }
  }


  public signout(){
          let b= confirm("Voulez-vous vraiment vous deconnecter?")
          if(b){
            this.connected= false
            this._user.behavior.next(false)
            sessionStorage.clear()
            this._router.navigateByUrl("/")
          }
  }
  getDecodedToken(){
    let user = sessionStorage.getItem('auth-token-guine')
    const b =this.tokenStorageService.getDecodedAccessToken(user)
    if(b != null){
      this.getUserByEmail(b.sub)
    }
  }

}
