import { Component, OnInit, Input } from '@angular/core';
import { PropertiesService } from 'src/_services/properties.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-hot-offer-today',
  templateUrl: './hot-offer-today.component.html',
  styleUrls: ['./hot-offer-today.component.scss']
})
export class HotOfferTodayComponent implements OnInit {
  @Input('propertyId') propertyId;
  public property;
  constructor(public appService:AppService, private propertieService: PropertiesService) { }

  ngOnInit() {
    this.appService.getPropertyById(this.propertyId).subscribe(property=>{
      this.property = property;
    }) 
    this.getProperties()
  }


  public getProperties(){
    this.propertieService.getProperties()
      .subscribe((data)=>{
        this.property= data
        console.log(this.propertyFunction(data))
      })
  }

  public propertyFunction( data: any){
    let objetMoinsCher= data[0]
      for(let i=0; i<data.length; i++){
        const obj= data[i]
        if(obj.priceDollar.sale < objetMoinsCher.priceDollar.sale){
          objetMoinsCher= obj
        }
      }
    
      return objetMoinsCher;
    }
}
