import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProjectsNameComponent } from './projects-name/projects-name.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'productsPage', component: ProductsPageComponent },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'projectsName', component: ProjectsNameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
