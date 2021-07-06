import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Faction } from '../models/faction';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private data = new BehaviorSubject(null);
  currentData = this.data.asObservable();

  constructor() { }

  updateData(faction : Faction)
  {
    this.data.next(faction);
  }
}
