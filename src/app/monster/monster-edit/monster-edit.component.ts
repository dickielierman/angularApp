import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-monster-edit',
  templateUrl: './monster-edit.component.html',
  styleUrls: ['./monster-edit.component.css']
})
export class MonsterEditComponent implements OnInit {
  id: number
  editMode = false
  monsterForm: FormGroup
  
  constructor(private route: ActivatedRoute, private monsterService: MonsterService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.editMode = params['id'] != null
        this.initForm()
      }
    )
  }

  private initForm() {
    let monsterName = ''
    // let monsterImagePath = ''
    let monsterDescription = ''
    // let monsterIngredients = new FormArray([])
    let monsterFavorite: boolean

    if (this.editMode) {
      const monster = this.monsterService.getRecipe(this.id)
      monsterName = monster.name
      // monsterImagePath = monster.imagePath
      monsterDescription = monster.description
      monsterFavorite = monster.favorite

      // if (monster['ingredients']) {
      //   for (let ingredient of monster.ingredients) {
      //     monsterIngredients.push(
      //       new FormGroup({
      //         'name': new FormControl(ingredient.name, Validators.required),
      //         'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      //       })
      //     )
      //   }
      // }
    }

    this.monsterForm = new FormGroup({
      'name': new FormControl(monsterName, Validators.required),
      // 'imagePath': new FormControl(monsterImagePath, Validators.required),
      'description': new FormControl(monsterDescription, Validators.required),
      'favorite': new FormControl(monsterFavorite, Validators.required)
      // 'ingredients': monsterIngredients
    })
  }

  onSubmit() {
    // const newRecipe = new Monster(
    //   this.monsterForm.value['name'],
    //   this.monsterForm.value['description'],
    //   this.monsterForm.value['imagePath'],
    //   this.monsterForm.value['ingredients'])

    if (this.editMode) {
      this.monsterService.updateRecipe(this.id, this.monsterForm.value)
      console.log(this.monsterForm)
    } else {
      this.monsterService.addRecipe(this.monsterForm.value)
    }
    this.onCancel()
  }

  // onAddIngredient() {
  //   (<FormArray>this.monsterForm.get('ingredients')).push(
  //     new FormGroup({
  //       'name': new FormControl(null, Validators.required),
  //       'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
  //     })
  //   )
  // }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  // getControls() {
  //   return (<FormArray>this.monsterForm.get('ingredients')).controls;
  // }

  // onDeleteIngredient(index: number) {
  //   (<FormArray>this.monsterForm.get('ingredients')).removeAt(index)
  // }
}
