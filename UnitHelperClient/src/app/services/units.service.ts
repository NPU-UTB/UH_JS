import { Injectable } from '@angular/core';
import { Unit } from '../models/unit';
import { HttpClient } from '@angular/common/http';

const baseUrl : string = 'http://localhost:62366/api/Units';
@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http : HttpClient) { }

  getAll()
  {
    return this.http.get(baseUrl);
  }

  get(id: number)
  {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Unit)
  {
    return this.http.post(baseUrl, data);
  }

  update(id : number, data : Unit)
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
