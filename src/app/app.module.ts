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
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shopopinglist.service';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipebook/recipebook.component';

// it is an array of routes and each route is just a javascript object inside the array
const appRoutes : Routes = [
  {path:'', component:RecipeBookComponent},
  {path:'recipes', component:RecipeComponent, children:[
    {path:':index', component:RecipedetailComponent}
  ]},
  {path:'shoppinglist', component:ShoppinglistComponent}
]; 

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    ShoppinglistComponent, 
    IngredientComponent, 
    ShoppingeditlistComponent, 
    RecipeComponent, 
    RecipelistComponent, 
    RecipeitemComponent, 
    RecipedetailComponent, 
    RecipeBookComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
