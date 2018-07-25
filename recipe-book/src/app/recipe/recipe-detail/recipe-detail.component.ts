import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '../../../../node_modules/@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeDetail = this.recipeService.getRecipe(this.id);
      }
    )
  }

  // toShoppingList(ingredients: Ingredient[]) {
  //   console.log(ingredients);
  //   ingredients.forEach(ingredient => {
  //     this.shoppingListService.addIngredient(ingredient);
  //   });
  // }

  toShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients)
  }
}
