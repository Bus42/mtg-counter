import { Component, OnInit } from '@angular/core';

import { PLAYERS } from '../PLAYERS';
import { CounterComponent } from '../counter/counter.component'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = PLAYERS;

  constructor() { }

  ngOnInit() {
  }

}
