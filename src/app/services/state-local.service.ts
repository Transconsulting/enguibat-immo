import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateLocalService {
  behaviorSubject = new BehaviorSubject<any>('')
  
  propertyDetail = this.behaviorSubject.asObservable()
  constructor() { }



    updateLocalState(data: any){
    this.behaviorSubject.next(data)
  }

}
