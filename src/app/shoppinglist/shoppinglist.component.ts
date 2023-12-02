import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from './ingredient/ingredient.model';
import { ShoppingListService } from './shopopinglist.service';
import { Recipe } from '../recipebook/recipe/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit, OnDestroy{

  ingredients: Ingredient[] = [new Ingredient("Apples", 3), new Ingredient("Carrots", 5)];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService){
    
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientAdded.subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients;
    }); 
  }

  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }
}