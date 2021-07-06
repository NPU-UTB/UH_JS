import { Component, OnDestroy, OnInit } from '@angular/core';
import { Faction } from 'src/app/models/faction';
import { Keyword } from 'src/app/models/keyword';
import { Unit } from 'src/app/models/unit';
import { UnitsKeyword } from 'src/app/models/unitskeywords';

import { UnitsService } from 'src/app/services/units.service';
import { KeywordsService } from 'src/app/services/keywords.service';
import { UnitKeyService } from 'src/app/services/unit-key.service';

import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit, OnDestroy {

  faction : Faction;
  units: Unit[];
  keywords : Keyword[];
  uks : UnitsKeyword[];
  subscription : Subscription;
  selectedUnit? : Unit;
  editMode : boolean;

  constructor(private unitsService : UnitsService,
     private keyService : KeywordsService,
     private ukeyService : UnitKeyService,
     private shared : SharedService)
     {
       this.units = [
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

       this.keywords = [
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

       this.uks = [
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

  ngOnInit(): void {
    this.subscription = this.shared.currentData.subscribe(faction => this.faction = faction);
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelect(unit : Unit)
  {
    this.selectedUnit = unit;
  }

  doApprove(unit : Unit)
  {
    unit.Approved = true;
  }

  editOn()
  {
    this.editMode = true;
  }
  editOff()
  {
    this.editMode = false;
  }

  addUnit(uname : string)
  {
    var unit : Unit = {
      Id : this.units.length+1,
      Name : uname,
      FactionId : this.faction.Id,
      Approved : false
    };
    this.units.push(unit);
    //+ aktualizacja bazy
    this.editOff();
  }
}
