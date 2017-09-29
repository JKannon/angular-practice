import { 
	Component, 
	OnInit,
	ViewChild, 
	ElementRef,
	Input, 
	Output, 
	EventEmitter
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') ingNameInput:ElementRef;
	@ViewChild('amountInput') ingAmountInput:ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(){
  	/* Store Constants Method */
  	const ingName = this.ingNameInput.nativeElement.value;
  	const ingAmount = this.ingAmountInput.nativeElement.value;
  	const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);

  	/* Pass Local Reference Data Method */
  	// this.selectedIngredient.emit({
  	// 	name: this.ingNameInput.nativeElement.value,
  	// 	amount: this.ingAmountInput.nativeElement.value
  	// });
  }

}
