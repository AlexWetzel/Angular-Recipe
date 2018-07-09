import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameElement: ElementRef;
  @ViewChild('amountInput') amountElement: ElementRef;
  @Output() shoppingInputs = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    var name = this.nameElement.nativeElement.value;
    var amount = this.amountElement.nativeElement.value;
    this.shoppingInputs.emit(new Ingredient(name, amount));
  }
}
