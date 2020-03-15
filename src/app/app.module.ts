import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AppShellComponent } from "./app-shell/app-shell.component";
import { AuthGuard } from "./route-guards/auth-guard";

@NgModule({
  declarations: [AppComponent, LoginComponent, AppShellComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
