import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { IProduct } from '../../interfaces';
import { ProductService } from '../../services/product.service';

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
export class ProductsComponent{
  public itemList: IProduct[] = [];
  public service = inject(ProductService)

  constructor() {
    this.service.getAll();
  }

}
