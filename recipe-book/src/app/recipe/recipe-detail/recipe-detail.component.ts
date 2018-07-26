import { Component, OnInit } from '@angular/core';

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

  toShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients)
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    // Alt:
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
