import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/headr.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { IngredientComponent } from './shoppinglist/ingredient/ingredient.component';
import { ShoppingeditlistComponent } from './shoppinglist/shoppingeditlist/shoppingeditlist.component';
import { RecipeComponent } from './recipebook/recipe/recipe.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shopopinglist.service';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipebook/recipebook.component';
import { ChoosefromlistComponent } from './recipebook/choosefromlist/choosefromlist.component';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipebook/recipe/recipe.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service.';
import { AlertComponent } from './alert/alert.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { RecipesModule } from './recipebook/recipes.module';
// it is an array of routes and each route is just a javascript object inside the array
const appRoutes : Routes = [
  {path:'auth', component: AuthComponent},
  {path:'', component:RecipeBookComponent},
  {path:'shoppinglist', component:ShoppinglistComponent}
]; 
//    
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    ShoppinglistComponent, 
    IngredientComponent, 
    ShoppingeditlistComponent,    
    ChoosefromlistComponent,
    DropdownDirective,
    PlaceHolderDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RecipesModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
