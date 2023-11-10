import { Component, EventEmitter, Output } from "@angular/core";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
/* Just checking to see if git is working */
export class HeaderComponent{
    
    @Output() shopingListClicked = new EventEmitter<any>();
    @Output() recipesClicked = new EventEmitter<any>();

    shoppingListSelected(){
        this.shopingListClicked.emit();
    }

    recipesSelected(){
        this.recipesClicked.emit();
    }


}
