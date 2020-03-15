import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroDetailComponent } from "./hero-detail.component";
import { OverviewComponent } from "./overview/overview.component";
import { PowersComponent } from "./powers/powers.component";
import { CrisisComponent } from "./crisis/crisis.component";
import { HeroDetailRoutingModule } from "./hero-detail-routing.module";

@NgModule({
  declarations: [
    HeroDetailComponent,
    OverviewComponent,
    PowersComponent,
    CrisisComponent
  ],
  imports: [CommonModule, HeroDetailRoutingModule]
})
export class HeroDetailModule {}
