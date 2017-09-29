import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ShoppingListService {
	ingredientChanged = new Subject<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Chicken', 2),
		new Ingredient('Parmesan Cheese', 5),
		new Ingredient('Marinara Sauce', 1),
		new Ingredient('Dinner Roll', 1)
	];
  
  constructor() { }

  getIngredients(){
  	return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
  	this.ingredients.push(ingredient);
  	this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]){
  	// For loop
  	// for(let ingredient of ingredients){
  	// 	this.addIngredient(ingredient);
  	// }

  	// Spread operator method
  	this.ingredients.push(...ingredients);
  	this.ingredientChanged.next(this.ingredients.slice());
  }

}
