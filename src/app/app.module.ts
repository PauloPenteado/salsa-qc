import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'subscription', component: SubscriptionComponent },      
    ])
  ],
  exports: [ RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
