import { Component, ElementRef, EventEmitter, Input, ViewChild, Output, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';
import { ShoppingListService } from '../shopopinglist.service';

@Component({
  selector: 'app-shoppingeditlist',
  templateUrl: './shoppingeditlist.component.html',
  styleUrls: ['./shoppingeditlist.component.css']
})
export class ShoppingeditlistComponent implements OnInit {
  
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService){

  }

  ngOnInit(): void {
      
  }

  onAddIngredient(){
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.shoppingListService.addIngredient(ingredient);
  }

}
