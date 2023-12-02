import { Component, ElementRef, EventEmitter, Input, ViewChild, Output, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';
import { ShoppingListService } from '../shopopinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppingeditlist',
  templateUrl: './shoppingeditlist.component.html',
  styleUrls: ['./shoppingeditlist.component.css']
})
export class ShoppingeditlistComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
 @ViewChild('f', {static: false}) form: NgForm;

  constructor(private shoppingListService: ShoppingListService){

  }

  ngOnInit(): void {
      this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.form.setValue({name: this.editedItem.name, amount: this.editedItem.amount})
      });
  }

  onAddIngredient(fomr:NgForm){
    const value = fomr.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    }else{
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    this.form.reset();
  }

  onDelete(){
    if(this.editMode){
      this.shoppingListService.removeIngredient(this.editedItemIndex);
    }
    this.editMode = false;
    this.onClear();
  }

  onClear(){
    this.form.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
