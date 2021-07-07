import { Component, OnInit } from '@angular/core';
import { Faction } from 'src/app/models/faction';
import { FactionsService } from 'src/app/services/factions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  factions : Faction[];

  constructor(private fs: FactionsService) { }

  ngOnInit(): void {
    this.fs.getAll().subscribe((result) => {
      this.factions = result as Faction[];
    },
    (error) => { console.error(error);});
  }

}
