import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('recelement') rec:Recipe;
  @Output() itemadded=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
 additem()
 {
    this.itemadded.emit();
 }
}
