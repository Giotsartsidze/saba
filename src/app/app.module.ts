import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';

import { ProductsPageComponent } from './products-page/products-page.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProjectsNameComponent } from './projects-name/projects-name.component';
import { AccordionModule } from './accordion/accordion.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { NextCategoriDirective } from './next-categori.directive';
import { PrevtCategoriDirective } from './prevt-categori.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ProductsPageComponent,
    ProductDetailsComponent,
    ProjectsNameComponent,
    NextDirective,
    PrevDirective,
    NextCategoriDirective,
    PrevtCategoriDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MatGridListModule,
    NgxSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
