import { NgModule } from "@angular/core";
import { EditRecipeComponent } from "./recipe/edit-recipe/edit-recipe.component";
import { RecipedetailComponent } from "./recipedetail/recipedetail.component";
import { RecipeitemComponent } from "./recipeitem/recipeitem.component";
import { RecipelistComponent } from "./recipelist/recipelist.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeBookComponent } from "./recipebook.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    declarations:[
        RecipedetailComponent,
        RecipeComponent, 
        RecipelistComponent, 
        RecipeitemComponent,
        EditRecipeComponent,
        RecipeBookComponent
    ],
    imports: [RouterModule, CommonModule, ReactiveFormsModule],

    exports:[
        RecipedetailComponent,
        RecipeComponent, 
        RecipelistComponent, 
        RecipeitemComponent,
        EditRecipeComponent,
        RecipeBookComponent
    ]
})
export class RecipesModule{

}