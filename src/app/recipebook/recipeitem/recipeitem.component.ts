import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent {
  @Input() currentRecipe: Recipe;
  @Input() currentIndex: Number;
    
  constructor(private recipeService: RecipeService, private router: Router){

  }
   itemClicked(event: Event, data: Recipe){
    this.recipeService.selectedRecipe = data;
    this.recipeService.recipeSelected.emit(data);
   }
}