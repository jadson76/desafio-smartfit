  import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location-interface';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit{

  @Input() unitsList: Location[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.unitsList);
  }

}
