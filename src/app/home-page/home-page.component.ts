import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  menuList = document.getElementById('menuList');
  menuVariable : boolean = false;

  //   toogleMenu() {
  //     if (this.menuList?.style.maxHeight == '0px') {
  //       this.menuList.style.maxHeight = '100vh';
  //     } else {
  //       this.menuList?.style.maxHeight = '0px' ;
  //     }
  //   }
  //

  openMenu(){
    this.menuVariable != this.menuVariable;
  }

}

