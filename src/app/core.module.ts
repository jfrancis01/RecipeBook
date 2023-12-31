import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service.";
import { RecipeService } from "./recipebook/recipe/recipe.service";
import { ShoppingListService } from "./shoppinglist/shopopinglist.service";

@NgModule({
    providers:[
        ShoppingListService, 
        RecipeService, 
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
    ]
})

export class CoreModule{

}