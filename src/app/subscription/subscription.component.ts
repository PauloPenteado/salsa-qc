import { Component, OnInit } from '@angular/core';
import { plans } from "../plans"

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  plans = plans;

  constructor() { }

  ngOnInit() {
  }

}
