import { Recipe } from "../recipebook/recipe/recipe.model";
import { Ingredient } from "./ingredient/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [new Ingredient("Apples", 2), new Ingredient("Bread", 1)];
    ingredientAdded = new Subject<Ingredient[]>();
    
    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients);
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients);
    }

    removeIngredient(index: number){
        if(index > -1){
            this.ingredients.splice(index, 1);
            this.ingredientAdded.next(this.ingredients.slice());
        }
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientAdded.next(this.ingredients.slice());
    }
}