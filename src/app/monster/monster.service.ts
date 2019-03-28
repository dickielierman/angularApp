import { Monster  } from './monster.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../quiz/shopping-list.service';
import { Subject } from 'rxjs';
import monsterData from '../../assets/monsters.json' ;
import { MonstersComponent } from './monster.component';

@Injectable()
export class MonsterService {
    monstersChanged = new Subject<Monster[]>()
    json:any = monsterData

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

    addRandomMonster() {
        let r = Math.floor(Math.random() * monsterData.length)
        let monster = new Monster(monsterData[r].name, monsterData[r].desc, false)

        this.monsters.push(monster)
        this.monstersChanged.next(this.monsters.slice())
    }

    removeAll() {
        this.monsters = []
        this.monstersChanged.next(this.monsters.slice())
    }

    createRandomTeam() {
        // First clear the list
        this.monsters = []
        this.monstersChanged.next(this.monsters.slice())

        // Now create the monsters
        for (let i = 0; i < 5; i++) {
            let r = Math.floor(Math.random() * monsterData.length)
            let monster = new Monster(monsterData[r].name, monsterData[r].desc, false)
    
            this.monsters.push(monster)
        }

        this.monstersChanged.next(this.monsters.slice())
    }

    unfavoriteAll() {
        for (let i = 0; i < this.monsters.length; i++) {
            this.monsters[i].favorite = false
        }

        this.monstersChanged.next(this.monsters.slice())
    }
}