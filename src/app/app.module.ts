import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { AccordionModule } from './accordion/accordion.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { NextDirective } from './directives/next.directive';
import { PrecDirective } from './directives/prec.directive';
import { ProjectsComponent } from './project/projects.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProjectsNameComponent } from './projects-name/projects-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ServicesPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    CategoriesComponent,
    NextDirective,
    PrecDirective,
    ProjectsComponent,
    ProductsPageComponent,
    ProductDetailsComponent,
    ProjectsNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MatGridListModule,
    NgxSliderModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
