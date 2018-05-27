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
    if (this.life < 1){return 0};
    return this.life = this.life - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
