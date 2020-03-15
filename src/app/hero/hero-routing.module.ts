import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeroListComponent } from "./hero-list/hero-list.component";

const routes = [{ path: "", component: HeroListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
