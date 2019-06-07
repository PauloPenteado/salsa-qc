import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Salsa Attitude';
  home = 'Accueil';
  who_we_are = "L'école";
  news = 'Nouvelles';
  courses_n_schedule = 'Cours et horaire';
  subscription = 'Inscription';
  events = 'Événements';
  contact = 'Contact';
  search = 'Chercher';
}
