import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  value: number = 200;
  highValue: number = 990;

  options: Options = {
    floor: 0,
    ceil: 1200,
  };
  constructor() {}

  ngOnInit(): void {}
}
