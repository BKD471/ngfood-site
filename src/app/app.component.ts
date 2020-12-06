import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngfood-site';
   loadednav='recipe'
  // tslint:disable-next-line: typedef
  navbartoggler(navbarInput:string)
  {

     this.loadednav=navbarInput;

  }
}
