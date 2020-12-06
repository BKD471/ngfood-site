import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
  new Recipe('A test recipe', 'This is a test baby', 'https://recipesofhome.com/wp-content/uploads/2020/06/veg-fried-rice-recipe.jpg'),
  new Recipe('A test recipe', 'This is another test baby', 'https://maunikagowardhan.co.uk/wp-content/uploads/2014/11/Indo-Chinese-Chilli-Chicken.jpg')
 ];
  constructor() {

   }

  ngOnInit(): void {
  }

}
