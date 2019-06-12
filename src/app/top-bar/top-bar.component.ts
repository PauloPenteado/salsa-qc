import { Component, OnInit } from '@angular/core';

import { courses } from "../courses";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  courses = courses;

  title = 'Salsa Attitude';
  home = 'Accueil';
  who_we_are = "L'école";
  news = 'Nouvelles';
  courses_n_schedule = 'Cours et horaire';
  schedule = 'Horaire';
  subscription = 'Inscription';
  events = 'Événements';
  contact = 'Contact';
  search = 'Chercher';

  constructor() { }

  ngOnInit() {
  }

}
