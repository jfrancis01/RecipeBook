import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/headr.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { IngredientComponent } from './shoppinglist/ingredient/ingredient.component';
import { ShoppingeditlistComponent } from './shoppinglist/shoppingeditlist/shoppingeditlist.component';
import { RecipeComponent } from './recipebook/recipe/recipe.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipebook/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shopopinglist.service';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipebook/recipebook.component';
import { ChoosefromlistComponent } from './recipebook/choosefromlist/choosefromlist.component';
import { CommonModule } from '@angular/common';
import { EditRecipeComponent } from './recipebook/recipe/edit-recipe/edit-recipe.component';
import { RecipeService } from './recipebook/recipe/recipe.service';
import {HttpClientModule} from '@angular/common/http';
import { RecipeResolverSerice } from './recipebook/recipe/recipesresolverservice';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
// it is an array of routes and each route is just a javascript object inside the array
const appRoutes : Routes = [
  {path:'auth', component: AuthComponent},
  {path:'', component:RecipeBookComponent},
  {path:'recipes', component:RecipeComponent, children:[
    {path:'', component:ChoosefromlistComponent, pathMatch:'full'},
    {path:'new', component:EditRecipeComponent},
    {path:':index', component:RecipedetailComponent, resolve:[RecipeResolverSerice]},
    {path:':index/edit', component:EditRecipeComponent, resolve: [RecipeResolverSerice]}
  ]},
  {path:'shoppinglist', component:ShoppinglistComponent}
]; 
//    
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    ShoppinglistComponent, 
    IngredientComponent, 
    ShoppingeditlistComponent, 
    RecipedetailComponent,
    RecipeComponent, 
    RecipelistComponent, 
    RecipeitemComponent,     
    ChoosefromlistComponent, EditRecipeComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
