import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeroDetailComponent } from "./hero-detail.component";
import { OverviewComponent } from "./overview/overview.component";
import { PowersComponent } from "./powers/powers.component";
import { CrisisComponent } from "./crisis/crisis.component";

const routes = [
  {
    path: "",
    component: HeroDetailComponent,
    children: [
      { path: "overview", component: OverviewComponent },
      { path: "powers", component: PowersComponent },
      { path: "crisis", component: CrisisComponent },
      { path: "", redirectTo: "overview", pathMatch: "full" }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroDetailRoutingModule {}
