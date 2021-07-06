import { Injectable } from '@angular/core';
import { UnitsKeyword } from '../models/unitskeywords';
import { HttpClient } from '@angular/common/http';

const baseUrl : string = 'http://localhost:62366/api/UnitsKeywords';
@Injectable({
  providedIn: 'root'
})
export class UnitKeyService {

  constructor(private http : HttpClient) { }

  getAll()
  {
    return this.http.get(baseUrl);
  }

  get(id: number)
  {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: UnitsKeyword)
  {
    return this.http.post(baseUrl, data);
  }

  update(id : number, data : UnitsKeyword)
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
