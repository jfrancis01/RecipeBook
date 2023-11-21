import { Recipe } from "../recipebook/recipe/recipe.model";
import { Ingredient } from "./ingredient/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{

    private ingredients: Ingredient[] = [];
    ingredientAdded = new EventEmitter<Ingredient[]>();
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients);
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients);
    }
}