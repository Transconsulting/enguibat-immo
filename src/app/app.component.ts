import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Settings, AppSettings } from './app.settings';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   
  public settings: Settings;
  constructor(public appSettings:AppSettings, 
              public router:Router, 
              @Inject(PLATFORM_ID) private platformId: Object,
              public translate: TranslateService){
    this.settings = this.appSettings.settings;
    translate.addLangs(['en','de','fr','ru','tr']);
    translate.setDefaultLang('en'); 
    translate.use('en');

    // alert("bonjour,\n "+
    // " La derniere fois on a reussi à implementer le filtrage par ville puis par commune.\n"+
    // "vous remarquerez que le resultat de recherche quand vous selectionnez la ville est égale à 0.\n"+
    // "Cela est dû au fait qu'il n'y a pas d'annonces faites pour la ville choisie.\n"+
    // "\n\n"+
    // "Allez-y dans le composant app.component pour supprimer cet alert")
  }

  ngAfterViewInit(){ 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {   
        setTimeout(() => {
          if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0,0);
          }
        }); 
      }            
    });    
  }

}
