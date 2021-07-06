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
    this.factions = this.factionsService.getPre();
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
