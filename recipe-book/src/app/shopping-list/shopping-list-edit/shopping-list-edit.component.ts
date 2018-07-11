import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameElement: ElementRef;
  @ViewChild('amountInput') amountElement: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    var name = this.nameElement.nativeElement.value;
    var amount = this.amountElement.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
