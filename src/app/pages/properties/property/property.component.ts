import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from 'src/app/app.service';
import { Property } from 'src/app/app.models';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppSettings, Settings } from 'src/app/app.settings';
import { CompareOverviewComponent } from 'src/app/shared/compare-overview/compare-overview.component';
import { EmbedVideoService } from 'ngx-embed-video'; 
import { PropertiesService } from 'src/_services/properties.service';
import { UserService } from 'src/_services/user.service';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { InteresseService } from 'src/_services/interesse.service';
import { ModalService } from 'src/app/_services/modal.service';
import { StateLocalService } from 'src/app/services/state-local.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;  
  public btnClicked= false
  public statutInteresse: any
  @ViewChildren(SwiperDirective) swipers: QueryList<SwiperDirective>;
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation:true
  };

  public sidenavOpen:boolean = true;
  public config: SwiperConfigInterface = {}; 
  public config2: SwiperConfigInterface = {}; 
  private sub: any;
  public property:Property; 
  public settings: Settings;  
  public embedVideo: any;
  public relatedProperties: Property[];
  public featuredProperties: Property[];
  public agent:any;
  public mortgageForm: UntypedFormGroup;
  public monthlyPayment:any;
  public annonceId: string
  public contactForm: UntypedFormGroup;
  isReady: boolean= false;
  detailParceLApp: any;
  constructor(public appSettings:AppSettings, 
              public appService:AppService,
              private _detailProperty: StateLocalService,
              private modalService: ModalService,
              public userService: UserService,
              private router: Router,
              public tokenStorageService: TokenStorageService,
              public proprieteService: PropertiesService,
              private activatedRoute: ActivatedRoute, 
              private embedService: EmbedVideoService,
              private interesseService: InteresseService,
              public fb: UntypedFormBuilder) {
              this.settings = this.appSettings.settings; 
              this.annonceId= this.activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => { 
      this.getPropertyById(params['id']); 
    });
    if(window.innerWidth < 960){
      this.sidenavOpen = false;
      if(this.sidenav){
        this.sidenav.close();
      } 
    };
  } 

  public getPropertyById(id){
    this._detailProperty.propertyDetail
      .subscribe((data: any)=>{
      this.property = data;  
      this.getParcelleApartementDetail(this.property.location.propertyId)
      this.embedVideo = this.embedService.embed(this.property.videos[1].link);
      setTimeout(() => { 
        this.config.observer = true;
        this.config2.observer = true; 
        this.swipers.forEach(swiper => { 
          if(swiper){
            swiper.setIndex(0);
          } 
        }); 
      });
      this.isReady= true
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.getDataFromLocalState()
  }  

  getDataFromLocalState(){
    this._detailProperty.propertyDetail
      .subscribe((data: any)=>{
        // console.log("-----------------------property",data)
      })
  }

   getUserInfosAndAnnonceInfo(){
    this.btnClicked= true
    // Verifier si l'utilisateur est connecté
    if(sessionStorage.getItem('auth-token-guine') != null){
      
      this.interesseService.saveInteresse(this.property.location.propertyId)
      .subscribe((data: any)=>{
        if(data.statut== "Error"){
          this.modalService.openModal("error")
          this.statutInteresse= "error"
        }
        else{
          this.modalService.openModal("succes")
          this.statutInteresse= "succes"
        }
        
      }
      )
      
    }
    else{
      // Enregistrer dans la session que nous venons de cette page
      sessionStorage.setItem("navigatedFrom","/properties/" + this.annonceId)
      this.router.navigateByUrl("/custum/login")
    }
    
  }

  
  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true; 
  }

  

  // public getPropertyById(id){
  //   this.proprieteService.getAnnonceById(id).subscribe((data: any)=>{
  //     this.property = data[0];  
  //     this.getParcelleApartementDetail(this.property.location.propertyId)
  //     this.embedVideo = this.embedService.embed(this.property.videos[1].link);
  //     setTimeout(() => { 
  //       this.config.observer = true;
  //       this.config2.observer = true; 
  //       this.swipers.forEach(swiper => { 
  //         if(swiper){
  //           swiper.setIndex(0);
  //         } 
  //       }); 
  //     });
  //     this.isReady= true
  //   });
  // }

  ngAfterViewInit(){
    this.config = {
      observer: false,
      slidesPerView: 1,
      spaceBetween: 0,       
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,        
      loop: false,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    };

    this.config2 = {
      observer: false,
      slidesPerView: 4,
      spaceBetween: 16,      
      keyboard: true,
      navigation: false,
      pagination: false, 
      grabCursor: true,       
      loop: false, 
      preloadImages: false,
      lazy: true,  
      breakpoints: {
        200: {
          slidesPerView: 2
        },
        480: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 4
        } 
      }
    } 

  }
  

  public onOpenedChange(){ 
    this.swipers.forEach(swiper => { 
      if(swiper){
        swiper.update();
      } 
    });     
  }

  public selectImage(index:number){ 
    this.swipers.forEach(swiper => {
      if(swiper['elementRef'].nativeElement.id == 'main-carousel'){
        swiper.setIndex(index);
      }      
    }); 
  }

  public getParcelleApartementDetail(id){
    this.proprieteService.parcelleApartementDetail(id)
      .subscribe((d: any)=>{
        this.detailParceLApp= d
      })
  }

  public onIndexChange(index: number) {  
    this.swipers.forEach(swiper => { 
      let elem = swiper['elementRef'].nativeElement;
      if(elem.id == 'small-carousel'){
        swiper.setIndex(index);  
        for (let i = 0; i < elem.children[0].children.length; i++) {
          const element = elem.children[0].children[i]; 
          if(element.classList.contains('thumb-'+index)){
            element.classList.add('active-thumb'); 
          }
          else{
            element.classList.remove('active-thumb'); 
          }
        }
      } 
    });     
  }

  public addToCompare(){
    this.appService.addToCompare(this.property, CompareOverviewComponent, (this.settings.rtl) ? 'rtl':'ltr'); 
  }

  public onCompare(){
    return this.appService.Data.compareList.filter(item=>item.id == this.property.id)[0];
  }

  public addToFavorites(){
    this.appService.addToFavorites(this.property, (this.settings.rtl) ? 'rtl':'ltr');
  }

  public onFavorites(){
    return this.appService.Data.favorites.filter(item=>item.id == this.property.id)[0];
  }

  public getRelatedProperties(){
    this.appService.getRelatedProperties().subscribe(properties=>{
      this.relatedProperties = properties;
    })
  }

  public getFeaturedProperties(){
    this.appService.getFeaturedProperties().subscribe(properties=>{
      this.featuredProperties = properties.slice(0,3); 
    })
  } 

  public getAgent(agentId:number = 1){
    var ids = [1,2,3,4,5]; //agent ids 
    agentId = ids[Math.floor(Math.random()*ids.length)]; //random agent id
    this.agent = this.appService.getAgents().filter(agent=> agent.id == agentId)[0]; 
  }

  public onContactFormSubmit(values:Object){
    if (this.contactForm.valid) { 
    } 
  }

  public onMortgageFormSubmit(values:Object){ 
    if (this.mortgageForm.valid) { 
      var principalAmount = values['principalAmount']
      var down = values['downPayment']
      var interest = values['interestRate']
      var term = values['period']
      this.monthlyPayment = this.calculateMortgage(principalAmount, down, interest / 100 / 12, term * 12).toFixed(2);
    }     
  }
  public calculateMortgage(principalAmount:any, downPayment:any, interestRate:any, period:any){    
    return ((principalAmount-downPayment) * interestRate) / (1 - Math.pow(1 + interestRate, -period));
  } 

}