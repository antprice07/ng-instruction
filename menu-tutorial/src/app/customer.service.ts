import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// will need to import httpclient

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: any[] = [
    { id: 1, name: "Amazon", state: "WA", majorAcct: true },
    { id: 2, name: "Microsoft", state: "WA", majorAcct: true },
    { id: 3, name: "Sony", state: "CA", majorAcct: false }
  ]
  // will need to inject httpclient here
  constructor() { }

  list(): Observable<any[]> {
    return of(this.customers) as Observable<any[]>;
  }

  get(id: number): Observable<any> {
    return of(this.customers[id - 1]) as Observable<any>;
  }

  create(cust: any): Observable<any> {
    this.customers.push(cust);
    return of(true);
  }

}
