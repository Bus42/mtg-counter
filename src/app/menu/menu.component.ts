import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hideMenu(){
    let menuEl = document.getElementById('menuWrapper');
    menuEl.classList.remove('menuActive');
    menuEl.classList.add('menuInactive');
  }

  showBgList(){
    let bgList = document.getElementById('bgList');
    bgList.classList.replace('bgMenu-inactive', 'bgMenu-active');
  }

  hideBgList() {
    let bgList = document.getElementById('bgList');
    bgList.classList.replace('bgMenu-active', 'bgMenu-inactive');
  }

  changeBg(bg){
    document.body.style.background = `url(../assets/${bg})`;
  }

    constructor() { }

  ngOnInit() {
  }

}
