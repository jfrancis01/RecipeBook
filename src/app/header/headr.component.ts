import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Route, Router } from "@angular/router";
import { RecipeService } from "../recipebook/recipe/recipe.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
/* Just checking to see if git is working */
export class HeaderComponent implements OnInit, OnDestroy{ 

    private userSub: Subscription;
    isAutheticated = false;
    
    constructor(private router: Router, private http: HttpClient, private recipeService: RecipeService, private authService: AuthService){

    }

    ngOnInit(): void {
       this.userSub =  this.authService.user.subscribe(user => {
        this.isAutheticated = !user ? false: true;
        console.log(user);
       });
    }

    onSaveData(){
        this.recipeService.onSaveData();
    }

    onFetchData(){
        this.recipeService.onFetchData().subscribe();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

}
