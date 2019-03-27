import { Component, OnInit, OnDestroy} from '@angular/core';

import { Monster } from '../monster.model';
import { MonsterService } from '../monster.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit, OnDestroy {
  monsters: Monster[]
  subscription: Subscription

  constructor(private monsterService: MonsterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.monsterService.monstersChanged.subscribe(
      (monsters: Monster[]) => {
        this.monsters = monsters
      }
    )
    this.monsters = this.monsterService.getRecipes()
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
