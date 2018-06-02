import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hideMenu() {
    let menuEl = document.getElementById('menuWrapper');
    let bgList = document.getElementById('bgList');
    menuEl.classList.replace('menuActive', 'menuInactive');
    if (bgList.classList.contains('bgMenu-active')) {
      bgList.classList.replace('bgMenu-active', 'bgMenu-inactive');
    }
  }

  showBgList() {
    let bgList = document.getElementById('bgList');
    bgList.classList.replace('bgMenu-inactive', 'bgMenu-active');
  }

  hideBgList() {
    let bgList = document.getElementById('bgList');
    bgList.classList.replace('bgMenu-active', 'bgMenu-inactive');
  }

  changeBg(bg) {
    document.body.style.background = `url(../assets/${bg})`;
  }

  constructor() { }

  ngOnInit() {
  }

}
