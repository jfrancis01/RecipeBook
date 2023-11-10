import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { ShoppingListService } from 'src/app/shoppinglist/shopopinglist.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private shoppingListService: ShoppingListService){

  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe)=>{
      this.selectedRecipe = recipe;
    })
  }

  addToShoppingList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }
}
