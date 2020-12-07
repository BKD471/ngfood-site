import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeselect=new EventEmitter<Recipe>();
 recipes: Recipe[] = [
  new Recipe('Fried Rice', 'yummy fried rice', 'https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg'),
  new Recipe('Chilli Chiken', 'Deliciously mouth watering', 'https://maunikagowardhan.co.uk/wp-content/uploads/2014/11/Indo-Chinese-Chilli-Chicken.jpg')
 ];
  constructor() {

   }

  ngOnInit(): void {
  }
   recipeselected(rec:Recipe)
   {
  this.recipeselect.emit(rec);
   }
}
