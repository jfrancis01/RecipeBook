import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { ShoppingListService } from 'src/app/shoppinglist/shopopinglist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  selectedRecipe: Recipe
  index: number;

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private recipeService: RecipeService, 
    private shoppingListService: ShoppingListService){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.index = +params['index'];
      this.selectedRecipe = this.recipeService.getRecipe(this.index);
    });
  }

  addToShoppingList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }
}
