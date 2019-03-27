import { Monster  } from './monster.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class MonsterService {
    monstersChanged = new Subject<Monster[]>()

    private monsters: Monster[] = [
        new Monster('Dracula', 
        'This is simply a test', 
        true),

        new Monster('Swamp Thing', 
        'This is simply a test', 
        false)
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.monsters.slice()
    }

    getRecipe(index: number) {
        return this.monsters[index]
    }

    // addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //     this.slService.addIngredients(ingredients)
    // }

    addRecipe(monster: Monster) {
        this.monsters.push(monster)
        this.monstersChanged.next(this.monsters.slice())
    }

    updateRecipe(index: number, newMonster: Monster) {
        this.monsters[index] = newMonster
        this.monstersChanged.next(this.monsters.slice())
    }

    deleteRecipe(index: number) {
        this.monsters.splice(index, 1)
        this.monstersChanged.next(this.monsters.slice())
    }

    favoriteMonster(index: number, newMonster: Monster) {
        this.monsters[index] = newMonster
        this.monstersChanged.next(this.monsters.slice())
    }
}