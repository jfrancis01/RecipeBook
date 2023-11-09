import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent {
  @Input() currentRecipe: Recipe;

    
  constructor(private recipeService: RecipeService){

  }
  itemClicked(event: Event, daata: Recipe){
    this.recipeService.recipeSelected.emit(this.currentRecipe);
  }
}