import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  toppings = this._formBuilder.group({
    Florring: false,
    OfficeSeating: false,
    OfficeFurniture: false,
    SoftSeating: false,
    Lightning: false,
  });


  constructor(private _formBuilder: FormBuilder) {}

  value: number = 200;
  highValue: number = 990;

  options: Options = {
    floor: 0,
    ceil: 1200,
  };

  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  

  


  ngOnInit(): void {}
}
