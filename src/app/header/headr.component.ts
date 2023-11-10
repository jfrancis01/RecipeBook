import { Component, EventEmitter, Output } from "@angular/core";
import { Route, Router } from "@angular/router";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
/* Just checking to see if git is working */
export class HeaderComponent{
    
    @Output() shopingListClicked = new EventEmitter<any>();
    @Output() recipesClicked = new EventEmitter<any>();

    constructor(private router: Router){

    }

    shoppingListSelected(){
        //this.shopingListClicked.emit();
        //this.router.navigate(['/shoppinglist']);
    }

    recipesSelected(){
        //this.recipesClicked.emit();
        //this.router.navigate(['/recipes']);
    }


}
