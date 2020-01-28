import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  accomplishments:string[]=["Recommend, select, and help locate or obtain merchandise based on customer need and desire",
"Place weekly orders and track inventory"]

  constructor() { }

  ngOnInit() {
  }

}
