import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hideMenu() {
    let menuEl = document.getElementById('menuWrapper');
    menuEl.classList.remove('menuActive');
    menuEl.classList.add('menuInactive');

    let bgList = document.getElementById('bgList');
    if (bgList.classList.contains('bgMenu-active')) {
      this.hideBgList();
    }

    let fontList = document.getElementById('fontList');
    if (fontList.classList.contains('fontList-active')) {
      this.hideFontList();
    }

    let rulesEl = document.getElementById('rules');
    if (rulesEl.classList.contains('rules-active')){
      this.hideRules();
    }

  }

  showBgList() {
    let bgList = document.getElementById('bgList');
    bgList.classList.remove('bgMenu-inactive');
    bgList.classList.add('bgMenu-active');

    let fontList = document.getElementById('fontList');
    if (fontList.classList.contains('fontList-active')) {
      this.hideFontList();
    }

    let rulesEl = document.getElementById('rules');
    if (rulesEl.classList.contains('rules-active')){
      this.hideRules();
    }
  }

  hideBgList() {
    let bgList = document.getElementById('bgList');
    bgList.classList.remove('bgMenu-active');
    bgList.classList.add('bgMenu-inactive');
  }

  changeBg(bg) {
    document.body.style.background = `url(../assets/${bg})`;
  }

  hideFontList() {
    let fontList = document.getElementById('fontList');
    fontList.classList.remove('fontList-active');
    fontList.classList.add('fontList-inactive');
  }

  showFontList() {
    let fontList = document.getElementById('fontList');
    fontList.classList.remove('fontList-inactive');
    fontList.classList.add('fontList-active');

    let bgList = document.getElementById('bgList');
    if (bgList.classList.contains('bgMenu-active')) {
      this.hideBgList();
    }

    let rulesEl = document.getElementById('rules');
    if (rulesEl.classList.contains('rules-active')){
      this.hideRules();
    }
  }

  changeFont(font) {
    document.body.style.fontFamily = `${font}, cursive`;
  }

  showRules(){
    let rulesEl = document.getElementById('rules');
    rulesEl.classList.remove('rules-inactive');
    rulesEl.classList.add('rules-active');

    let bgList = document.getElementById('bgList');
    if (bgList.classList.contains('bgMenu-active')) {
      this.hideBgList();
    }

    let fontList = document.getElementById('fontList');
    if (fontList.classList.contains('fontList-active')) {
      this.hideFontList();
    }
  }

  hideRules(){
    let rulesEl = document.getElementById('rules');
    rulesEl.classList.remove('rules-active');
    rulesEl.classList.add('rules-inactive');
  }

  constructor() { }

  ngOnInit() {
  }

}
