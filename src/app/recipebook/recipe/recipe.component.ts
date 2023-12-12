import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit{
  @Input() showComponent: boolean = true;
  selectedRecipe: Recipe;

  ngOnInit(): void {
      this.recipeService.recipeSelected.subscribe((recipe:Recipe) =>{
        this.selectedRecipe = recipe;
      }
      );
  }

  constructor(private recipeService: RecipeService){}
}

