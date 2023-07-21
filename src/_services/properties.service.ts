import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Property, Location } from 'src/app/app.models'; 
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/shared/confirm-dialog/confirm-dialog.component'; 
import { AlertDialogComponent } from 'src/app/shared/alert-dialog/alert-dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
public API_URL = environment.url_backend;

  public url = environment.url + '/assets/data/'; 
  public apiKey = 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I';
  
  constructor(public http:HttpClient, 
              private bottomSheet: MatBottomSheet, 
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              public translateService: TranslateService,
              @Inject(PLATFORM_ID) private platformId: Object) { }


              public listeProperty(): Observable<Property[]>{
                return this.http.get<Property[]>(this.API_URL+'listeProperty');
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
