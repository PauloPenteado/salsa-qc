import { Component, OnInit } from '@angular/core';
import { classes } from "../classes";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  classes = classes;

  constructor() { }

  ngOnInit() {
  }

}
