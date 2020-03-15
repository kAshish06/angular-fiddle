import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-crisis-list",
  templateUrl: "./crisis-list.component.html",
  styleUrls: ["./crisis-list.component.scss"]
})
export class CrisisListComponent implements OnInit {
  public crisisList = [
    {
      id: 1,
      name: "alien attacks new york",
      description:
        "Aliens from another planet whose name is not known yet are creating havoc in NYC."
    },
    {
      id: 2,
      name: "Armed robbery in a bank, seattle",
      description:
        "5 robbers armed with modern automatic weapons have held the charterd bank of seatle hostage."
    },
    {
      id: 3,
      name: "child stuck in a house on fire, delhi",
      description:
        "A 6 year old child is stuck in house which is on fire in kalyanpur area of delhi."
    },
    {
      id: 4,
      name: "Thanos arrives in New york",
      description:
        "Mighty aggressor Thanos has arrived to wipe out of half of the population on earth."
    }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToHeroList() {
    this.router.navigate(["/hero-list"]);
  }
}
