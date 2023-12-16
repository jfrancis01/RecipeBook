import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Output } from "@angular/core";
import { Route, Router } from "@angular/router";
import { RecipeService } from "../recipebook/recipe/recipe.service";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
/* Just checking to see if git is working */
export class HeaderComponent{
    
    constructor(private router: Router, private http: HttpClient, private recipeService: RecipeService){

    }
    onSaveData(){
        this.recipeService.onSaveData();
    }

    onFetchData(){
        this.recipeService.onFetchData().subscribe();
    }

}
