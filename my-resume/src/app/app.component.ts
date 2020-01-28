import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Resume';
  name = "Anthony L Price";
  address = "623 W Main St";
  add2 = "Hillsboro, OH 45133";
  phone = "937-403-2136";
  email = "antprice07@gmail.com";

  colors: string[] = ['red', 'blue', 'black', 'yellow'];
  myColor: string = 'black';
  otherColor: string = 'black';

  chgColor(color: string): void {
    this.myColor = color;
  }

}


