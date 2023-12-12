import { Component, Output,Input, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit, OnDestroy{
  recipes : Recipe[];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  subscription : Subscription;
  
  constructor(private recipeService: RecipeService, private router: Router){

  }
  
  ngOnInit(): void {
    this. subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
}

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  navigateNew(){
    this.router.navigate(["/recipes/new"]);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
