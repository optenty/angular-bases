import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent} from "./pages/main-page.component";
import { ListComponent } from './componentes/list/list.component';
import { AddCharacterComponent } from './componentes/add-character/add-character.component';



@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }

