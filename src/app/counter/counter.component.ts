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

  getStyle(){
    if (this.life > 20) {
      return 'btn btn-primary'
    }
    if (this.life >= 14 && this.life <= 20) {
      return 'btn btn-default'
    };
    if (this.life >= 7 && this.life < 14) {
      return 'btn btn-warning'
    }
    if (this.life < 7) {
      return 'btn btn-danger'
    }
  }

  resetCounter(){
    this.life = 20;
    return this.life;
  }

  constructor() { }

  ngOnInit() {
  }

}
