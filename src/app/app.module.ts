import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/headr.component';
import { IngredientComponent } from './shoppinglist/ingredient/ingredient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './shoppinglist/shopopinglist.service';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipebook/recipebook.component';
import { ChoosefromlistComponent } from './recipebook/choosefromlist/choosefromlist.component';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipebook/recipe/recipe.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service.';
import { RecipesModule } from './recipebook/recipes.module';
import { ShoppingListModule } from './shoppinglist/shopping-list.module';
import { SharedModule } from './shared.module';
// it is an array of routes and each route is just a javascript object inside the array
const appRoutes : Routes = [
  {path:'auth', component: AuthComponent},
  {path:'', component:RecipeBookComponent},
]; 
//    
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    IngredientComponent,    
    ChoosefromlistComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RecipesModule,
    ReactiveFormsModule,
    ShoppingListModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
