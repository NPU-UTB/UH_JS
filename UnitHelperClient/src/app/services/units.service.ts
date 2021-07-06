import { Injectable } from '@angular/core';
import { Unit } from '../models/unit';
import { HttpClient } from '@angular/common/http';

const baseUrl : string = 'http://localhost:62366/api/Units';
@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http : HttpClient) { }

  getPre()
  {
    return [
      {
        Id : 1,
        Name : "Tactical Squad",
        FactionId : 1,
        Approved : true
      },
      {
       Id : 2,
       Name : "Assault Squad",
       FactionId : 1,
       Approved : true
     },
     {
       Id : 3,
       Name : "Devastator Squad",
       FactionId : 1,
       Approved : true
     },
     {
       Id : 4,
       Name : "Scout Squad",
       FactionId : 1,
       Approved : true
     },
     {
       Id : 5,
       Name : "Necron Warriors",
       FactionId : 2,
       Approved : true
     },
     {
       Id : 6,
       Name : "Immortals",
       FactionId : 2,
       Approved : true
     },
     {
       Id : 7,
       Name : "Tomb Blades",
       FactionId : 2,
       Approved : true
     },
     {
       Id : 8,
       Name : "Canoptek Scarab Swarm",
       FactionId : 2,
       Approved : true
     },
     {
       Id : 9,
       Name : "Poxwalkers",
       FactionId : 3,
       Approved : false
     },
     {
       Id : 10,
       Name : "Plague Marines",
       FactionId : 3,
       Approved : false
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
