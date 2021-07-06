import { Injectable } from '@angular/core';
import { Keyword } from '../models/keyword';
import { HttpClient } from '@angular/common/http';

const baseUrl : string = 'http://localhost:62366/api/Keywords';
@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  constructor(private http : HttpClient) { }

  getPre()
  {
    return [
      {
        Id : 1,
        Text : "Core",
        FactionId : 0,
        Approved : true
      },
      {
       Id : 2,
       Text : "Infantry",
       FactionId : 0,
       Approved : true
     },
     {
       Id : 3,
       Text : "Biker",
       FactionId : 0,
       Approved : true
     },
     {
       Id : 4,
       Text : "Fly",
       FactionId : 0,
       Approved : true
     },
     {
       Id : 5,
       Text : "Swarm",
       FactionId : 1,
       Approved : true
     },
     {
       Id : 6,
       Text : "Scout",
       FactionId : 1,
       Approved : true
     },
     {
       Id : 7,
       Text : "Smokescreen",
       FactionId : 1,
       Approved : true
     },
     {
       Id : 8,
       Text : "Melta Bombs",
       FactionId : 1,
       Approved : true
     },
     {
       Id : 9,
       Text : "Canoptek",
       FactionId : 2,
       Approved : true
     },
     {
       Id : 10,
       Text : "Bubonic Astartes",
       FactionId : 3,
       Approved : false
     },
     {
       Id : 11,
       Text : "Gauss",
       FactionId : 2,
       Approved : true
     },
     {
       Id : 12,
       Text : "Tesla",
       FactionId : 2,
       Approved : true
     }
    ];
  }

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
