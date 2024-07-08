import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductListComponent,
    LoaderComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
