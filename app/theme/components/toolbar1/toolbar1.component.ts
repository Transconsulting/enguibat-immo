import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/_services/shared.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-toolbar1',
  templateUrl: './toolbar1.component.html'
})
export class Toolbar1Component implements OnInit {
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  constructor(public appService:AppService, public sharedService: SharedService) { }

  ngOnInit() { 
  }

  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }
}