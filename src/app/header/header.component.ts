import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu(){
    let menuEl = document.getElementById('menuWrapper');
    menuEl.classList.replace('menuInactive', 'menuActive');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
