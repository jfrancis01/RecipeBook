import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Ingredient } from './ingredient/ingredient.model';
import { ShoppingListService } from './shopopinglist.service';
import { Recipe } from '../recipebook/recipe/recipe.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit{

  ingredients: Ingredient[] = [new Ingredient("Apples", 3), new Ingredient("Carrots", 5)];
  @Input() showComponent: boolean = false;

  constructor(private shoppingListService: ShoppingListService){
    
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients;
    }); 
  }
}