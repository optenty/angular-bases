import {Component, OnInit} from '@angular/core';
import {Character} from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {

  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegetta',
      power: 7500,
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

  newCharacter(character:Character):void{
    console.log('Main page: ');
    console.log(character);
  }

}
