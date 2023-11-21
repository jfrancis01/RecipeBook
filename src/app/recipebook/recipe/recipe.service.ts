import { Ingredient } from "src/app/shoppinglist/ingredient/ingredient.model";
import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class RecipeService{
    private recipes : Recipe[] = 
    [new Recipe("Chicken Biryani", "Asli chicken biryani", "https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani-1025x1536.jpg",
    [new Ingredient("Whole Chicken", 1), new Ingredient("Shaan Masala", 1), new Ingredient("Onions", 3)]),
    new Recipe("Summa Borscht", "Mennonite soup for the soul", "https://www.allrecipes.com/thmb/c8b01L28YKudTerjm5XkD44OC1g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/740688-5a6e95121c3d471bab75913834a718a8.jpg", 
    [new Ingredient("Varsh", 1), new Ingredient("Cream", 1), new Ingredient("Dill", 3)])];

    recipeSelected = new Subject<Recipe>();
    selectedRecipe: Recipe;
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number){
        return this.recipes[index];
    }
}

