import { Component, Output,Input, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit{
  recipes : Recipe[];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  constructor(private recipeService: RecipeService, private router: Router){

  }
  
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  navigateNew(){
    this.router.navigate(["/recipes/new"]);
  }

}
