import { Component, OnInit } from '@angular/core';
import { ComodityItem, ItemStatus } from 'src/app/model/ComodityItem';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  data: ComodityItem[];

  constructor() { }

  ngOnInit() {
    this.data = [{name: 'xbox', type: 'DIGITAL', branch: 'Microsoft', count: 1, totalPrice: 2499, wantTime: '2020-04-01',
    status: ItemStatus.NOT_DETERMINED}];
  }

}
