import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { courses } from "../courses";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.course = courses[+params.get('id')];
    });
    
  }

}
