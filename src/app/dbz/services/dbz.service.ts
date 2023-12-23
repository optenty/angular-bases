import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {v4 as uuid} from "uuid";
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 7500,
    }
  ];
  newCharacter(character:Character):void{
    /*Con el Spread operator simplemente le añadimos el uuid y todas las propiedades que tenga character, esto es genial porque no necesitamos
    * saber qué propiedades tenemos que asignar, automáticamente añade el uuid y conserva los datos de character*/
    const newCharacter: Character={...character, id: uuid()};
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id : String): void {
    let index=this.characters.findIndex((char)=>{return char.id === id})
    this.characters.splice(index,1);
  }


}
