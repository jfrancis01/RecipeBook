import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit{

  edit:boolean = false;
  index: number;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.index = +params['index'];
        this.edit = params['index'] != null;
        console.log("Edit mode: " + this.edit);
      });
  }
}
