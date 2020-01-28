import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home","/home","This is the home page"),
    new Menu("Users","/users/list","This is the users list"),
    new Menu("Vendors","/vendors/list","This is the vendors list"),
    new Menu("Products","/products/list","This is the products list"),
    new Menu("Requests","/requests/list","This is the requests list"),
    new Menu("Review","/requests/review","This is the requests to be reviewed"),
    new Menu("About","/about","This is the about list")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
