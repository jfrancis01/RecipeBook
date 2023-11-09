import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipies: boolean = true;
  showShoppingList: boolean = false;

  onRecipesClicked(data: Event){
    console.log("Recipies clicked");
    this.showRecipies = true;
    this.showShoppingList = false;
  }

  onShoppingListCliked(data: Event){
    console.log("Shopping List clicked");
    this.showRecipies = false;
    this.showShoppingList = true;
  }
}
