import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit{

  edit:boolean = false;
  index: number;
  recipeForm: FormGroup

  constructor(private route: ActivatedRoute, 
    private recipeService: RecipeService){

  }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.index = +params['index'];
        this.edit = params['index'] != null;
        this.initForm();
        console.log("Edit mode: " + this.edit);
      });
  }

  private initForm(){

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    
    if(this.edit){
      const recipe = this.recipeService.getRecipe(this.index);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.desc;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }
}
