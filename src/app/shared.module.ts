import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./directives/dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        PlaceHolderDirective 
    ],
    imports: [CommonModule],
    exports: [  
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        PlaceHolderDirective, 
        CommonModule ]
})
export class SharedModule{

}