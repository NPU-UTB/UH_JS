import { Injectable } from '@angular/core';
import { UnitsKeyword } from '../models/unitskeywords';
import { HttpClient } from '@angular/common/http';

const baseUrl : string = 'http://localhost:62366/api/UnitsKeywords';
@Injectable({
  providedIn: 'root'
})
export class UnitKeyService {

  constructor(private http : HttpClient) { }

  getPre()
  {
    return [
      {
        Id : 1,
        UnitId : 1,
        KeywordId : 1
      },
      {
       Id : 2,
       UnitId : 1,
       KeywordId : 2
     },
     {
       Id : 3,
       UnitId : 1,
       KeywordId : 8
     },
     {
       Id : 4,
       UnitId : 2,
       KeywordId : 1
     },
     {
       Id : 5,
       UnitId : 2,
       KeywordId : 2
     },
     {
       Id : 6,
       UnitId : 2,
       KeywordId : 8
     },
     {
       Id : 7,
       UnitId : 3,
       KeywordId : 1
     },
     {
       Id : 8,
       UnitId : 3,
       KeywordId : 2
     },
     {
       Id : 9,
       UnitId : 4,
       KeywordId : 1
     },
     {
       Id : 10,
       UnitId : 4,
       KeywordId : 2
     },
     {
       Id : 11,
       UnitId : 4,
       KeywordId : 6
     },
     {
       Id : 12,
       UnitId : 4,
       KeywordId : 7
     },
     {
       Id : 13,
       UnitId : 5,
       KeywordId : 1
     },
     {
       Id : 14,
       UnitId : 5,
       KeywordId : 2
     },
     {
       Id : 15,
       UnitId : 5,
       KeywordId : 11
     },
     {
       Id : 16,
       UnitId : 6,
       KeywordId : 1
     },
     {
       Id : 17,
       UnitId : 6,
       KeywordId : 2
     },
     {
       Id : 18,
       UnitId : 6,
       KeywordId : 11
     },
     {
       Id : 19,
       UnitId : 6,
       KeywordId : 12
     },
     {
       Id : 20,
       UnitId : 7,
       KeywordId : 1
     },
     {
       Id : 21,
       UnitId : 7,
       KeywordId : 3
     },
     {
       Id : 22,
       UnitId : 7,
       KeywordId : 4
     },
     {
       Id : 23,
       UnitId : 8,
       KeywordId : 4
     },
     {
       Id : 24,
       UnitId : 8,
       KeywordId : 5
     },
     {
       Id : 25,
       UnitId : 8,
       KeywordId : 9
     },
     {
       Id : 26,
       UnitId : 9,
       KeywordId : 2
     },
     {
       Id : 27,
       UnitId : 10,
       KeywordId : 1
     },
     {
       Id : 28,
       UnitId : 10,
       KeywordId : 2
     },
     {
       Id : 29,
       UnitId : 10,
       KeywordId : 10
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
