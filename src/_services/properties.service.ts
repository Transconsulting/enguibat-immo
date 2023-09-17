import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Property, Location } from 'src/app/app.models'; 
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
public API_URL = environment.url_backend;

  public url = environment.url + '/assets/data/'; 
  public cachedData: any
  public apiKey = 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I';
  public _http= inject(HttpClient)
  constructor(public http:HttpClient, 
              public dialog: MatDialog,
              public translateService: TranslateService,
              @Inject(PLATFORM_ID) private platformId: Object) { }


              public listeProperty(): Observable<Property[]>{
                if(this.cachedData){
                 return of(this.cachedData)
                }
                else{
                return this.http.get<Property[]>(this.API_URL+'listeProperty')
                  .pipe(tap(stream=>this.cachedData = stream));

                }
              }

              public parcelleApartementDetail(uuidParcelAppartement: any): Observable<Property[]>{
                return this.http.get<Property[]>(this.API_URL+'parcelleApartementDetail/'+ uuidParcelAppartement);
              }



              public getAnnonceById(id: any): Observable<Property[]>{
                return this.http.get<any>(this.API_URL + 'listeProperty/dommaineByUuid/{uuid}?uuid='+ id);
              }

              public getProperties(): Observable<Property[]>{
                return this.http.get<Property[]>(this.url + 'properties.json');
              }

              public getPropertyById(id): Observable<Property>{
                return this.http.get<Property>(this.url + 'property-' + id + '.json');
              }
            
              public getFeaturedProperties(): Observable<Property[]>{
                return this.http.get<Property[]>(this.url + 'featured-properties.json');
              } 
            
              public getRelatedProperties(): Observable<Property[]>{
                return this.http.get<Property[]>(this.url + 'related-properties.json');
              }
            
              public getPropertiesByAgentId(agentId): Observable<Property[]>{
                return this.http.get<Property[]>(this.url + 'properties-agentid-' + agentId + '.json');
              }
            
              public getLocations(): Observable<Location[]>{
                return this.http.get<Location[]>(this.url + 'locations.json');
              }
            
              public getAddress(lat = 40.714224, lng = -73.961452){ 
                return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+this.apiKey);
              }
            
              public getLatLng(address){ 
                return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key='+this.apiKey+'&address='+address);
              }
            
              public getFullAddress(lat = 40.714224, lng = -73.961452){ 
                return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+this.apiKey).subscribe(data =>{ 
                  return data['results'][0]['formatted_address'];
                });
              }

            }
