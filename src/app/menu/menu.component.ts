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
    if (rulesEl.classList.contains('rules-active')) {
      this.hideRules();
    }

    let choosePlayers = document.getElementById('choosePlayers');
        if (choosePlayers.classList.contains('choosePlayers-active')){
      this.hideChoosePlayers();
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
    if (rulesEl.classList.contains('rules-active')) {
      this.hideRules();
    }

    let choosePlayers = document.getElementById('choosePlayers');
        if (choosePlayers.classList.contains('choosePlayers-active')){
      this.hideChoosePlayers();
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
    if (rulesEl.classList.contains('rules-active')) {
      this.hideRules();
    }

    let choosePlayers = document.getElementById('choosePlayers');
    if (choosePlayers.classList.contains('choosePlayers-active')){
      this.hideChoosePlayers;
    }
  }

  changeFont(font) {
    document.body.style.fontFamily = `${font}, cursive`;
  }

  showRules() {
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

    let choosePlayers = document.getElementById('choosePlayers');
    if (choosePlayers.classList.contains('choosePlayers-active')){
      this.hideChoosePlayers;
    }
  }

  hideRules() {
    let rulesEl = document.getElementById('rules');
    rulesEl.classList.remove('rules-active');
    rulesEl.classList.add('rules-inactive');
  }

  playerCount(x) {
    let playerEls = document.getElementsByClassName('li-wrapper');
    for (let i in playerEls) {
      let current = playerEls[i];
      if (i < x) {
        current.classList.remove('not-shown');
        current.classList.add('shown');
      }
      if (i >= x) {
        current.classList.remove('shown');
        current.classList.add('not-shown');
      }
    }
  }

  showChoosePlayers() {
    let choosePlayers = document.getElementById('choosePlayers');
    choosePlayers.classList.remove('choosePlayers-inactive');
    choosePlayers.classList.add('choosePlayers-active');

    let bgList = document.getElementById('bgList');
    if (bgList.classList.contains('bgMenu-active')) {
      this.hideBgList();
    }

    let fontList = document.getElementById('fontList');
    if (fontList.classList.contains('fontList-active')) {
      this.hideFontList();
    }

    let rulesEl = document.getElementById('rules');
    if (rulesEl.classList.contains('rules-active')) {
      this.hideRules();
    }
  }

  hideChoosePlayers(){
    console.log('hideChoosePlayers() called');
    let choosePlayers = document.getElementById('choosePlayers');
    choosePlayers.classList.remove('choosePlayers-active');
    choosePlayers.classList.add('choosePlayers-inactive');
  }

  changeColor(){
    alert('Sorry, this feature has yet to be implemented. \nIf you wish to contribute, please go to \n\nhttps://github.com/bus42/mtg-counter\n\nand have at it!');
    /*let inputValue = document.getElementById('inputValue');
    let colorLabel = document.getElementById('colorLabel');
    document.body.style.color = inputValue.innerText;
    colorLabel.style.color = inputValue.innerText;**/
  }

  constructor() { }

  ngOnInit() {
  }

}
