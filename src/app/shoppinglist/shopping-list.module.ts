import { NgModule } from "@angular/core";
import { ShoppingeditlistComponent } from "./shoppingeditlist/shoppingeditlist.component";
import { ShoppinglistComponent } from "./shoppinglist.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";

@NgModule({
    declarations:[
        ShoppingeditlistComponent,
        ShoppinglistComponent,
    ],
    imports:[
        FormsModule,
        SharedModule,
        RouterModule.forChild([  {path:'', component:ShoppinglistComponent}])
    ],
    exports:[
        ShoppingeditlistComponent,
        ShoppinglistComponent,
    ]
})

export class ShoppingListModule{

}