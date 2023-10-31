import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(public appService: AppService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.getDecodedToken()
  }


  getDecodedToken(){
    let user = sessionStorage.getItem('auth-token-guine')
    const b =this.tokenStorageService.getDecodedAccessToken(user) 
  }

}
