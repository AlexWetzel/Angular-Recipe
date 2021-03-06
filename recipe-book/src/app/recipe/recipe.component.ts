import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Component ({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    providers: [RecipeService]
})
export class RecipeComponent implements OnInit{
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {}

    ngOnInit() {
        this.recipeService.recipeSelected.subscribe(
            (recipe: Recipe) => {
                this.selectedRecipe = recipe
            }
        );
    }
}