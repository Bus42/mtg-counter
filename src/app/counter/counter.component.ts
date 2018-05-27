import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  life = 20;
  inc(){
    return this.life = this.life + 1;
  }
  dec(){
    return this.life = this.life - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
