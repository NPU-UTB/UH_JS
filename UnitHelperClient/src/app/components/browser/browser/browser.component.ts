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

import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

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

  form : FormGroup;

  constructor(private unitsService : UnitsService,
     private keyService : KeywordsService,
     private ukeyService : UnitKeyService,
     private shared : SharedService,
     private fb : FormBuilder)
     {
       /*
       this.units = this.unitsService.getPre();
       this.keywords = this.keyService.getPre();
       this.uks = this.ukeyService.getPre();
       */

       this.form = this.fb.group({
         checkArray: this.fb.array([])
       });
     }

  ngOnInit(): void {
    //get Units
    this.unitsService.getAll().subscribe((result) => {
      this.units = result as Unit[];
    },
    (error) => { console.error(error);});
    //get Keywords
    this.keyService.getAll().subscribe((result) => {
      this.keywords = result as Keyword[];
    },
    (error) => { console.error(error);});
    //get Units_Keywords
    this.ukeyService.getAll().subscribe((result) => {
      this.uks = result as UnitsKeyword[];
    },
    (error) => { console.error(error);});

    this.subscription = this.shared.currentData.subscribe(faction => 
      this.faction = faction);
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
    this.unitsService.update(unit.Id, unit);
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
    this.unitsService.create(unit).subscribe(response => {
      console.log(response);
    },
    error => console.log(error));

    let checkArray : FormArray = this.form.get('checkArray') as FormArray;
    checkArray.controls.forEach((item: FormControl) => {
      var value = item.value as number;
      //console.log(value);
      var uk : UnitsKeyword = {
        Id : this.uks.length+1,
        UnitId : unit.Id,
        KeywordId : value
      };
      this.uks.push(uk);
      //+ aktualizacja bazy
      this.ukeyService.create(uk).subscribe(response => {
        console.log(response);
      },
      error => console.log(error));;
    });
    
    this.editOff();
  }

  doDelete(unit: Unit)
  {
    //usuwanie z bazy
    this.uks.forEach(uk => {
      if(uk.UnitId == unit.Id) 
      this.ukeyService.delete(uk.Id).subscribe(response => {
        console.log(response);
      },
      error => console.log(error));;
      //tablica?
      //delete this.uks[this.uks.indexOf(uk)];
    });
    this.unitsService.delete(unit.Id).subscribe(response => {
      console.log(response);
    },
    error => console.log(error));
    this.selectedUnit = null;

    //usuń z tablicy... albo zaktualizuj tablicę?
    //delete this.units[this.units.indexOf(unit)];
  }


  onCheckboxChange(e)
  {
    const checkArray : FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked)
    {
      checkArray.push(new FormControl(e.target.value));
    } else
    {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if(item.value == e.target.value)
        {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
