import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/headr.component';
import { IngredientComponent } from './shoppinglist/ingredient/ingredient.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RecipeBookComponent } from './recipebook/recipebook.component';
import { ChoosefromlistComponent } from './recipebook/choosefromlist/choosefromlist.component';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared.module';
import { CoreModule } from './core.module';
// it is an array of routes and each route is just a javascript object inside the array
const appRoutes : Routes = [
  {path:'', component:RecipeBookComponent},
  {path:'recipes', loadChildren: () => import('./recipebook/recipes.module').then(m => m.RecipesModule)},
  {path:'shoppinglist', loadChildren: () => import('./shoppinglist/shopping-list.module').then(m => m.ShoppingListModule)},
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
]; 
//    
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientComponent,    
    ChoosefromlistComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
