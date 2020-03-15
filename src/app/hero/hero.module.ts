import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroRoutingModule } from "./hero-routing.module";

@NgModule({
  declarations: [HeroListComponent],
  imports: [CommonModule, HeroRoutingModule]
})
export class HeroModule {}
