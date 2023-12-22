import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  //Existe un pipe que ya nos hace esto, pero estamos haciendolo como ejemplo

  //Si le ponemos el get, esto es una propiedad, podremos acceder a ella, sin embargo, si no lo ponemos es un método.
  //Por lo tanto, no tendríamos que invocarlo con paréntesis
  get capitalizedName(): string {
  return this.name.toUpperCase();
}

  //Si hacemos algo private, no podemos acceder a ello fuera de este scope

  //Al ser un método, lo invocamos con paréntesis
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = "Spiderman";
  }

  changeAge():void{
    this.age = 32;
  }

  resetForm():void{
    this.name = "ironman";
    this.age = 45;
  }


}
