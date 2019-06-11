import { Component, OnInit } from '@angular/core';

import { courses } from "../courses";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = courses;

  constructor() { }

  ngOnInit() {
  }

}
