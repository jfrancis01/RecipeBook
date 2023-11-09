import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { ShoppingListService } from 'src/app/shoppinglist/shopopinglist.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent {

  @Input() currentRecipe: Recipe

  constructor(private shoppingListService: ShoppingListService){

  }

  addToShoppingList(){
    this.shoppingListService.addIngredients(this.currentRecipe.ingredients);
  }
}
