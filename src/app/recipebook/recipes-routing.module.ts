import { NgModule } from "@angular/core";
import { AuthGuard } from "../auth/auth.guard";
import { EditRecipeComponent } from "./recipe/edit-recipe/edit-recipe.component";
import { ChoosefromlistComponent } from "./choosefromlist/choosefromlist.component";
import { RecipeResolverSerice } from "./recipe/recipesresolverservice";
import { RecipedetailComponent } from "./recipedetail/recipedetail.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path:'recipes', component:RecipeComponent, canActivate:[AuthGuard], children:[
        {path:'', component:ChoosefromlistComponent, pathMatch:'full'},
        {path:'new', component:EditRecipeComponent},
        {path:':index', component:RecipedetailComponent, resolve:[RecipeResolverSerice]},
        {path:':index/edit', component:EditRecipeComponent, resolve: [RecipeResolverSerice]}
      ]}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RecipesRoutingModules{

}