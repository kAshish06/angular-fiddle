import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CrisisCenterComponent } from "./crisis-center/crisis-center.component";
import { CrisisCenterRoutingModule } from "./crisis-center-routing.module";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent
  ],
  imports: [CommonModule, CrisisCenterRoutingModule]
})
export class CrisisCenterModule {}
