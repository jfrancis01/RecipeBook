import { Component, Output,Input, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit{
  recipes : Recipe[];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  constructor(private recipeService: RecipeService){

  }
  
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
