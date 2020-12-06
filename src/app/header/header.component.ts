import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navbarselected=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
 onselect(data:string)
 {
      this.navbarselected.emit(data);
 }
}
