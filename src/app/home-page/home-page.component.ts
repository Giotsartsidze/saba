import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: 41.7151, lng: 44.8271 },
      zoom: 14,
    });
  }

  ngOnInit(): void {}
  map: any;
  @ViewChild('mapElement') mapElement: any;

  panelOpenState = false;
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

}

