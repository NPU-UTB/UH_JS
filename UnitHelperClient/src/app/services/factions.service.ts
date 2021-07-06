import { Injectable } from '@angular/core';
import { Faction } from '../models/faction';
import { HttpClient } from "@angular/common/http";

const baseUrl : string = 'http://localhost:62366/api/Factions';
@Injectable({
  providedIn: 'root'
})
export class FactionsService {

  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get(baseUrl);
  }

  get(id: number)
  {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Faction)
  {
    return this.http.post(baseUrl, data);
  }

  update(id : number, data : Faction)
  {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id : number)
  {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll()
  {
    return this.http.delete(baseUrl);
  }
}
