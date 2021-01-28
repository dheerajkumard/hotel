import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe> ();
  recipes: Recipe[];
  //   new Recipe('A Test Recipe', 'This is a simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
  //   new Recipe('Another Test Recipe', 'This is a simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  // ];

  constructor(private recipeService: RecipeService) {

   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }



}
