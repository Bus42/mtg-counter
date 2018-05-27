import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  changeBg(){
    console.log('switchBg() called');
  }

  changeFont(){
    console.log('changeFont() called');
  }

  hideMenu(){
    let menuEl = document.getElementById('menuWrapper');
    menuEl.classList.remove('menuActive');
    menuEl.classList.add('menuInactive');
  }

    constructor() { }

  ngOnInit() {
  }

}
