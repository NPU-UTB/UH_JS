import { Injectable } from '@angular/core';
import { Keyword } from '../models/keyword';
import { HttpClient } from '@angular/common/http';

const baseUrl : string = 'http://localhost:62366/api/Keywords';
@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  constructor(private http : HttpClient) { }

  getAll()
  {
    return this.http.get(baseUrl);
  }

  get(id: number)
  {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Keyword)
  {
    return this.http.post(baseUrl, data);
  }

  update(id : number, data : Keyword)
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
