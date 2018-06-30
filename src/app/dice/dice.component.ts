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

  roll(x){
    let die = document.getElementById(`die${x}`);

    let numString = {
      1 : 'one',
      2 : 'two',
      3 : 'three',
      4 : 'four',
      5 : 'five',
      6 : 'six'
    }

    let newNum = this.randNum(1,6);
    die.className = `animated-die fas fa-dice-${numString[newNum]}`;
    setTimeout(()=> die.classList.toggle('rolled'), 300);
    
  }

  constructor() { }

  ngOnInit() {
  }

}
