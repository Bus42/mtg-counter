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
    let fontList = document.getElementById('fontList');
    menuEl.classList.remove('menuActive');
    menuEl.classList.add('menuInactive');
    if (bgList.classList.contains('bgMenu-active')) {
      bgList.classList.remove('bgMenu-active');
      bgList.classList.add('bgMenu-inactive');
    }
  }

  showBgList() {
    let bgList = document.getElementById('bgList');
    bgList.classList.remove('bgmenu-inactive');
    bgList.classList.add('bgMenu-active');
  }

  hideBgList() {
    let bgList = document.getElementById('bgList');
    bgList.classList.remove('bgMenu-active');
    bgList.classList.add('bgMenu-inactive');
  }

  changeBg(bg) {
    document.body.style.background = `url(../assets/${bg})`;
  }

  showFontList() {
    let fontList = document.getElementById('fontList');
    fontList.classList.remove('fontMenu-inactive');
    fontList.classList.add('fontMenu-active');
  }

  hideFontList(){
    let fontlist = document.getElementById('fontList');
    fontlist.classList.remove('fontMenu-active');
    fontlist.classList.add('fontMenu-inactive');
  }

  changeFont(font) {
    document.body.style.fontFamily = `${font}, cursive`;
  }


  constructor() { }

  ngOnInit() {
  }

}
