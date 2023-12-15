import { Ingredient } from "src/app/shoppinglist/ingredient/ingredient.model";
import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>
    private recipes : Recipe[] = [];
    // [new Recipe("Chicken Biryani", "Asli chicken biryani", "https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani-1025x1536.jpg",
    // [new Ingredient("Whole Chicken", 1), new Ingredient("Shaan Masala", 1), new Ingredient("Onions", 3)]),
    // new Recipe("Summa Borscht", "Mennonite soup for the soul", "https://www.allrecipes.com/thmb/c8b01L28YKudTerjm5XkD44OC1g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/740688-5a6e95121c3d471bab75913834a718a8.jpg", 
    // [new Ingredient("Varsh", 1), new Ingredient("Cream", 1), new Ingredient("Dill", 3)]),
    // new Recipe("Chicken Shawarma", "A tasty grilled chicken sadwich", "https://amiraspantry.com/wp-content/uploads/2021/10/chicken-shawarma-I.jpg", [new Ingredient("Chicken breast", 3), new Ingredient("garlic", 1), new Ingredient("spice mix", 1)])];

    recipeSelected = new Subject<Recipe>();
    selectedRecipe: Recipe;
    DATABASE: string = "https://recipebook-31c59-default-rtdb.firebaseio.com";


    constructor(private http:HttpClient){
    }

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number){
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    onSaveData(){

        this.http.put(this.DATABASE + "/recipes.json", this.recipes).subscribe(responseData => {
            console.log(responseData);
        });

    }

    onFetchData(){
        this.http.get<Recipe[]>(this.DATABASE + "/recipes.json").subscribe(responseData => {
            console.log(responseData);
            this.recipes = responseData;
            this.recipesChanged.next(this.recipes.slice());
        });
    }
}

