import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClick = new EventEmitter()
  
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test',
     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg'),
    new Recipe('Test Recipe 2', 'This is a test',
     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(recipe) {
    this.recipeClick.emit(recipe);
  }
}
