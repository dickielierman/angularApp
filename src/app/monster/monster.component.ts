import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monsters',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonstersComponent implements OnInit {
  loggedIn = false

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.loggedIn) {
      this.router.navigate(['../'], { relativeTo: this.route })
    }
  }

}
