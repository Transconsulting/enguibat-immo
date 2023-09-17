import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
 public initialProperty=new BehaviorSubject([])
 public stream = this.initialProperty.asObservable()

  constructor() { }


}
