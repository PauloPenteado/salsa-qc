import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NewsComponent } from './news/news.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    TopBarComponent,
    HomeComponent,
    ContactComponent,
    EventsComponent,
    ScheduleComponent,
    NewsComponent,
    CoursesComponent,
    CourseDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },      
      { path: 'subscription', component: SubscriptionComponent },   
      { path: 'courses', component: CoursesComponent },      
      { path: 'courses/:id', component: CourseDetailsComponent },   
      { path: 'news', component: NewsComponent },      
      { path: 'events', component: EventsComponent },
      { path: 'contact', component: ContactComponent }, 
      { path: 'schedule', component: ScheduleComponent }, 
      { path: '**', component: PageNotFoundComponent }, 
    ])
  ],
  exports: [ RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
