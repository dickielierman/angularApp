import { Component, OnInit } from '@angular/core';

import { Monster } from '../monster.model';
import { MonsterService } from '../monster.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent implements OnInit {
  monster: Monster;
  id: number

  constructor(private monsterService: MonsterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.monster = this.monsterService.getRecipe(this.id)
      }
    )
  }

  // onAddToShoppingList() {
  //   this.monsterService.addIngredientsToShoppingList(this.monster.ingredients)
  // }

  // onFavorite() {
  //   this.monsterService.favoriteMonster(this.id, !this.monster.favorite)
  // }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.monsterService.deleteRecipe(this.id)
    this.router.navigate(['/mine'])
  }
}
