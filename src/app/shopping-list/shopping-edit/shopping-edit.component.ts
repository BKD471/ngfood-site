import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() cartadded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addtocart()
  {

      const ingname=this.nameInput.nativeElement.value;
      const ingamount=this.amountInput.nativeElement.value;
       const newing=new Ingredient(ingname,ingamount);
      this.cartadded.emit(newing);
  }

}
