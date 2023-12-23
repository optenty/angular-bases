import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

 /*El decorator impot hace que el valor de debajo si le pasamos los datos desde el padre recoja estos datos y sino tendrá los que le asociemos "por defecto", por así decirlo, en realidad es por el ciclo de vida pero bueno*/
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    }
  ];

  //emitir onDelete = Index value : number

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id:string):void{
    this.onDelete.emit(id)
  }

}
