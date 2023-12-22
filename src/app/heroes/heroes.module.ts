import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {ListComponent} from "./list/list.component";
import {NgForOf, NgIf, TitleCasePipe} from "@angular/common";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    TitleCasePipe,
    NgIf,
    NgForOf
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ]
})
export class HeroesModule {}
