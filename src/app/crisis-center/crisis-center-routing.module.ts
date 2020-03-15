import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";
import { CrisisCenterComponent } from "./crisis-center/crisis-center.component";

const crisisCenterRoutes = [
  {
    path: "",
    component: CrisisCenterComponent,
    children: [
      { path: "list", component: CrisisListComponent },
      {
        path: "crisis/:id",
        component: CrisisDetailComponent
      },
      { path: "", redirectTo: "list", pathMatch: "full" }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule {}
