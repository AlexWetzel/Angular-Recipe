import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail;
  // constructor(private shoppingListService: ShoppingListService) { }
  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
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
