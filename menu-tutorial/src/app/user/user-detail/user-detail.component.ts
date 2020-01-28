import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id:string=null;

  constructor(private route:ActivatedRoute,private router: Router) { }

  goToUserList():void{
    this.router.navigateByUrl("/users/list");
  }

  ngOnInit() {
    this.id=this.route.snapshot.params.id;
  }

}
