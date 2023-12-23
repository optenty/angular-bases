import {Component, OnInit} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {


  constructor(private dbzService: DbzService) {
  }
  get characters(): Character[] {
  return [...this.dbzService.characters];

}
  deleteCharacter(id:String):void {
    this.dbzService.deleteCharacterById(id);
  }
  newChar(char: Character):void {
    this.dbzService.newCharacter(char);
  }
  ngOnInit() {
  }


}
