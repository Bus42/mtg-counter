import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  randNum (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  roll(){
    let dice = document.getElementsByName('d6');

    let numString = {
      1 : 'one',
      2 : 'two',
      3 : 'three',
      4 : 'four',
      5 : 'five',
      6 : 'six'
    }

    for (var i = 0; i < dice.length; i++) {
      let current = dice[i];
      let newNum = this.randNum(1,6);
      current.className = `fas fa-dice-${numString[newNum]}`;
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
