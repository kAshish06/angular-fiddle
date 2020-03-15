import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterState, Router } from "@angular/router";

@Component({
  selector: "app-hero-list",
  templateUrl: "./hero-list.component.html",
  styleUrls: ["./hero-list.component.scss"]
})
export class HeroListComponent implements OnInit {
  public heros1 = [
    { name: "Iron Man", id: 1 },
    { name: "Captain America", id: 2 },
    { name: "Thor", id: 3 },
    { name: "Hulk", id: 4 }
  ];
  public heros2 = [
    { name: "Ant Man", id: 5 },
    { name: "Spider Man", id: 6 },
    { name: "Doctor Strange", id: 7 }
  ];
  constructor(
    private activatedRoute: ActivatedRoute, // public routerState: RouterState
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute);
    console.log(RouterState);
  }

  navigateToHeroDetail(hero) {
    console.log(hero);
    this.router.navigate(["/hero-detail", hero.id, { id: hero.id }]);
  }

  navigateToCrisisList() {
    console.log("navigating to crisis list");
    this.router.navigate(["/crisis-center/list"]);
  }
}
