import { Component, OnDestroy, OnInit } from '@angular/core';
import { Faction } from 'src/app/models/faction';
import { FactionsService } from 'src/app/services/factions.service';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  factions : Faction[];
  selected? : Faction;
  subscription : Subscription;

  constructor(private factionsService: FactionsService, private shared : SharedService) {
    /* */
    this.factions = [
      {
        Id : 0,
        Name : "Any",
        Metagroup : "",
        Approved : true
      },
      {
        Id : 1,
        Name : "Adeptus Astartes",
        Metagroup : "Imperium",
        Approved : true
      },
      {
        Id : 2,
        Name : "Necrons",
        Metagroup : "Xenos",
        Approved : true
      },
      {
        Id : 3,
        Name : "Death Guard",
        Metagroup : "Chaos",
        Approved : false
      }
    ];
   }

  ngOnInit(): void {
    this.subscription = this.shared.currentData.subscribe(faction => this.selected = faction);
    /*
    this.factionsService.getAll().subscribe((result) => {
      this.factions = result as Faction[];
    },
    (error) => { console.error(error);});
    */
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelect(faction : Faction)
  {
    this.selected = faction;
    this.shared.updateData(faction);
  }

}
