import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe(
			'Chicken Parm', 
			'You Taste So Good', 
			'http://pbs.twimg.com/media/CaTCW7kUkAEnSWe.jpg',
			[
				new Ingredient('Chicken', 1),
				new Ingredient('Parmesan Cheese', 4),
				new Ingredient('Marinara Sauce', 1),
				new Ingredient('Bread Crumbs', 1000),
				new Ingredient('Onions', 1),
				new Ingredient('Garlic', 1),
				new Ingredient('Red Pepper Flakes', 1000000)
			]),
		new Recipe(
			'Rum Ham', 
			"I'm sorry rum ham", 
			'https://f4.bcbits.com/img/0003428886_10.jpg',
			[
				new Ingredient('10lb Canned Ham', 1),
				new Ingredient('Hunting Knife', 1),
				new Ingredient('1L Rum Bottle', 3),
				new Ingredient('Handgun', 1),
				new Ingredient('Box of Handgun Ammo', 1),
				new Ingredient('Bunch of Italian Parsley', 1),
			])
	];  

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
  	return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
  	this.shoppingListService.addIngredients(ingredients);
  }

}
