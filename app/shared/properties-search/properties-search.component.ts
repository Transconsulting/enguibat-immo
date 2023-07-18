import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommuneService } from 'src/_services/commune.service';
import { TypeAnnonceService } from 'src/_services/type-annonce.service';
import { TypePrpertyService } from 'src/_services/type-prperty.service';
import { VilleService } from 'src/_services/ville.service';
import { AppService } from '../../app.service'; 
import { QuartierService } from 'src/_services/quartier.service';

@Component({
  selector: 'app-properties-search',
  templateUrl: './properties-search.component.html',
  styleUrls: ['./properties-search.component.scss']
})
export class PropertiesSearchComponent implements OnInit {
  public isLargeWindow = false
  @Input() variant:number = 1;
  @Input() vertical:boolean = false;
  @Input() searchOnBtnClick:boolean = false;
  @Input() removedSearchField:string;
  @Output() onSearchChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearchClick: EventEmitter<any> = new EventEmitter<any>();
  public showMore: boolean = false;
  public form: UntypedFormGroup;
  public propertyTypes : Observable<any[]>;
  public propertyStatuses : Observable<any[]>;
  public commune : Observable<any[]>;
  public ville : Observable<any[]>;
  public quartier : Observable<any[]>;
  public cities = [];
  public neighborhoods = [];
  public streets = [];
  public features = [];
  windowWidth: number;
  constructor(
    public appService:AppService,
     public fb: UntypedFormBuilder,
     private typeAnnonceService: TypeAnnonceService,
     private villeService: VilleService,
     private communeService: CommuneService,
     private quartierService: QuartierService,
     private typePropertyService: TypePrpertyService,
     ) {
      this.windowWidth= window.innerWidth
      }

  ngOnInit() {  
    if(this.vertical || this.windowWidth >= 597){
        this.showMore = true;
    };

    
    // this.propertyTypes = this.appService.getPropertyTypes();
    // this.propertyStatuses = this.appService.getPropertyStatuses();
    this.propertyTypes = this.typePropertyService.getPropertyTypes();
    this.propertyStatuses = this.typeAnnonceService.getPropertyStatuses();
    this.ville= this.villeService.getVilles()
    this.commune= this.communeService.getCommune()
    this.quartier = this.quartierService.getQuartier()
    this.cities = this.appService.getCities();

    this.neighborhoods = this.appService.getNeighborhoods();
    this.streets = this.appService.getStreets();
    this.features = this.appService.getFeatures();
    this.form = this.fb.group({
      propertyType: null,
      propertyStatus: null, 
      price: this.fb.group({
        from: null,
        to: null 
      }),
      city: null,
      villeUiid: null,
      communeUiid: null,
      quartierUiid: null,
      zipCode: null,
      neighborhood: null,
      street: null,
      bedrooms: this.fb.group({
        from: null,
        to: null 
      }),
      
      bathrooms: this.fb.group
      ({
        from: null,
        to: null 
      }),
      garages: this.fb.group({
        from: null,
        to: null 
      }),
      area: this.fb.group({
        from: null,
        to: null 
      }),
      yearBuilt: this.fb.group({
        from: null,
        to: null 
      }),       
      features: this.buildFeatures()
    }); 
    this.onSearchChange.emit(this.form);
  }
  
  addFilter(){
    this.isLargeWindow = !this.isLargeWindow
  }

  
  public buildFeatures() {
    const arr = this.features.map(feature => { 
      return this.fb.group({
        id: feature.id,
        name: feature.name,
        selected: feature.selected
      });
    })   
    return this.fb.array(arr);
  }

  ngOnChanges(){

    if(this.removedSearchField){ 
      if(this.removedSearchField.indexOf(".") > -1){
        let arr = this.removedSearchField.split(".");
        this.form.controls[arr[0]]['controls'][arr[1]].reset();
      } 
      else if(this.removedSearchField.indexOf(",") > -1){ 
        let arr = this.removedSearchField.split(","); 
        this.form.controls[arr[0]]['controls'][arr[1]]['controls']['selected'].setValue(false);  
      }
      else{
        this.form.controls[this.removedSearchField].reset();
      }  
    }  
  }


  
  public reset(){     
    this.form.reset({ 
      propertyType: null,
      propertyStatus: null, 
      price: {
        from: null,
        to: null 
      },
      city: null,
      zipCode: null,
      neighborhood: null,
      street: null,
      bedrooms: {
        from: null,
        to: null 
      },
      bathrooms: {
        from: null,
        to: null 
      },
      garages: {
        from: null,
        to: null 
      },
      area: {
        from: null,
        to: null 
      },
      yearBuilt: {
        from: null,
        to: null 
      },       
      features: this.features    
    }); 
  }

  public search(){
    this.onSearchClick.emit(); 
  }

  public onSelectCity(){
    this.form.controls['neighborhood'].setValue(null, {emitEvent: false});
    this.form.controls['street'].setValue(null, {emitEvent: false});
  }
  public onSelectNeighborhood(){
    this.form.controls['street'].setValue(null, {emitEvent: false});
  }

  public onSelectVille(event: any){
    // Quand on choisit la ville, on charge les ville de la commune
    this.commune= this.communeService.getCommuneByVille(event.value.uuid)
    // this.form.controls['villeUiid'].setValue(null, {emitEvent: false});
  }
  
  public onSelectQuartier(data: any){
    this.form.controls['quartierUiid'].setValue(null, {emitEvent: false});
  }

  public onSelectCommune(data: any){
    this.quartier= this.quartierService.getQuartierByCommune(data.value.uuid)
    // this.form.controls['communeUiid'].setValue(null, {emitEvent: false});
  }

  public getAppearance(){
    return (this.variant != 3) ? 'outline' : '';
  }
  public getFloatLabel(){
    return (this.variant == 1) ? 'always' : '';
  }


}
