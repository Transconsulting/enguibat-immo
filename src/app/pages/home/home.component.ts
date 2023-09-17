import { Component, OnInit, Input } from '@angular/core';
import { Settings, AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { Property, Pagination, Location } from '../../app.models';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PropertiesService } from 'src/_services/properties.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  watcher: Subscription;
  activeMediaQuery = '';
  public gallery: any
  public slides = [];
  public properties: Property[];
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public count: number = 8;
  public sort: string;
  public searchFields: any;
  public removedSearchField: string;
  public pagination:Pagination = new Pagination(1, 8, null, 2, 0, 0);
  public message:string;
  public featuredProperties: Property[];
  public locations: Location[];
  public annonce:  any
  public settings: Settings;
  public annonceId: any;
  public isLoading= true;
  constructor(private stateService: StateService,public appSettings:AppSettings, public appService:AppService, public mediaObserver: MediaObserver, private propertieService: PropertiesService) {
    this.settings = this.appSettings.settings;
    this.watcher = mediaObserver.asObservable()
    .pipe(filter((changes: MediaChange[]) => changes.length > 0), map((changes: MediaChange[]) => changes[0]))
    .subscribe((change: MediaChange) => {
      if(change.mqAlias == 'xs') {
        this.viewCol = 100;
      }
      else if(change.mqAlias == 'sm'){
        this.viewCol = 50;
      }
      else if(change.mqAlias == 'md'){
        this.viewCol = 33.3;
      }
      else{
        this.viewCol = 25;
      }
    });

  }

  ngOnInit() {
    this.removePropertyFromSessionStorage()
    this.getSlides();
    this.getLocations();
    this.getProperties();
    this.getFeaturedProperties();
  }

  public getProperties(){
          this.propertieService.listeProperty().subscribe((data1:any) => {
            if(this.properties && this.properties.length > 0){
              this.settings.loadMore.page++;
              this.pagination.page = this.settings.loadMore.page;
            }
            let result = this.filterData(data1);
            // this.setProprieteToSessionStorage(result.data1)
    
            if(result.data.length == 0){
              this.properties.length = 0;
              this.pagination = new Pagination(1, this.count, null, 2, 0, 0);
              this.message = 'Aucun résultat trouvé';
              return false;
            }
            if(this.properties && this.properties.length > 0){
              this.properties = this.properties.concat(result.data);
              this.isLoading= false
            }
            else{
              this.properties = result.data;
              this.isLoading= false
            }
      
            this.pagination = result.pagination;
            this.message = null;
      
            if(this.properties.length == this.pagination.total){
              this.settings.loadMore.complete = true;
              this.settings.loadMore.result = this.properties.length;
            }
            else{
              this.settings.loadMore.complete = false;
            }
            if(this.settings.header == 'map'){
              this.locations.length = 0;
              this.properties.forEach(p => {
                let loc = new Location(p.id, p.location.lat, p.location.lng);
                this.locations.push(loc);
              });
              this.locations = [...this.locations];
            }
          })
       
    
  }

  ngDoCheck(){
    if(this.settings.loadMore.load){
      this.settings.loadMore.load = false;
      this.getProperties();
    }
  }

  ngOnDestroy(){
    this.resetLoadMore();
    this.watcher.unsubscribe();
  }

  public getSlides(){
    this.appService.getHomeCarouselSlides().subscribe(res=>{
      this.slides = res;
    })
  }

  public getLocations(){
    this.appService.getLocations().subscribe(res =>{
      this.locations = res;
    })
  }

 

  public resetLoadMore(){
    this.settings.loadMore.complete = false;
    this.settings.loadMore.start = false;
    this.settings.loadMore.page = 1;
    this.pagination = new Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
  }

  public filterData(data){
    return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
  }

  public searchClicked(){
    this.properties.length = 0;
    this.getProperties();
  }
  public searchChanged(event){

    event.valueChanges.subscribe(() => {
      this.resetLoadMore();
      this.searchFields = event.value;
      setTimeout(() => {
        this.removedSearchField = null;
      });
      if(!this.settings.searchOnBtnClick){
        this.properties.length = 0;
      }
    });
    event.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => {
      if(!this.settings.searchOnBtnClick){
        this.getProperties();
      }
    });
  }
  public removeSearchField(field){
    this.message = null;
    this.removedSearchField = field;
  }



  public changeCount(count){
    this.count = count;
    this.resetLoadMore();
    this.removePropertyFromSessionStorage()
    this.properties.length = 0;
    this.getProperties();
  }

  removePropertyFromSessionStorage(){
    sessionStorage.removeItem('proprietes')
  }
  public changeSorting(sort){
    this.sort = sort;
    this.resetLoadMore();
    this.properties.length = 0;
    this.getProperties();
  }
  public changeViewType(obj){
    this.viewType = obj.viewType;
    this.viewCol = obj.viewCol;
  }

  setProprieteToSessionStorage(data){
    sessionStorage.setItem("proprietes", JSON.stringify(data))
  }

  public getProprieteFromSessionStorage(): any{
    let proprieteFromSessionStorage= JSON.parse(sessionStorage.getItem('proprietes'))

    return proprieteFromSessionStorage
  }
  public getFeaturedProperties(){
    this.appService.getFeaturedProperties().subscribe(properties=>{
      this.featuredProperties = properties;
    })
  }


   trouverAnnonceMoinsChere(tableau) {
    if (tableau.length === 0) {
      // Si le tableau est vide, renvoyer undefined ou une valeur par défaut
      return undefined;
    }
  
    var annonceMoinsChere = tableau[0]; // Supposons que la première personne annonce est la plus jeune
  
    for (var i = 1; i < tableau.length; i++) {
      if (tableau[i].priceDollar.rent < annonceMoinsChere.priceDollar.rent) {
        // Si le prix de  l'annonce actuelle est plus petit, la mettre à jour
        annonceMoinsChere = tableau[i];
      }
    }
  
    return annonceMoinsChere.id;
  }
  

  
  
  
  
  
  
  getMoinsCherAnnonce(){
  
  }
}
