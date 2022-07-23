import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  header_var = false;
  

  @HostListener('window:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_var = true;
    } else {
      this.header_var = false;
    }
  }

  goHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"})
  }
  goProjects(){
    document.getElementById("projects").scrollIntoView({behavior:"smooth"})
  }
  goCategories(){
    document.getElementById("categories").scrollIntoView({behavior:"smooth"})
  }
  goAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"})
  }
  goContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"})
  }
  
}
