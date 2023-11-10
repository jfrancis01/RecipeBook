import { Component, EventEmitter, Output } from "@angular/core";
import { Route, Router } from "@angular/router";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
/* Just checking to see if git is working */
export class HeaderComponent{
    
    constructor(private router: Router){

    }

}
