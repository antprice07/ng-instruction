import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menu-tutorial';
  res: any[];

  constructor(
    private custSvc: CustomerService
  ) { }
  sortColumn: string = 'id';
  ascOrder: boolean = true;
  sort(column: string): void {
    if (this.sortColumn === column) {
      this.ascOrder = !this.ascOrder;
      return;
    }
    this.ascOrder = true;
    this.sortColumn = column;
  }

  ngOnInit() {
    let cust = { id: 4, name: "Target", state: "MN", majorAcct: true };

    this.custSvc.create(cust).subscribe(
      res => {
        if (res == true) {
          this.custSvc.list().subscribe(
            res => {
              console.log(res);
              this.res = res;
            }
          )
        };
      }
    );

  }
}
