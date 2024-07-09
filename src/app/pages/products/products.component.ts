import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { IProduct } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { ProductFormComponent } from '../../components/product/product-form/product-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductListComponent,
    LoaderComponent,
    CommonModule,
    ModalComponent,
    ProductFormComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent{
  public itemList: IProduct[] = [];
  public productService: ProductService = inject(ProductService);

  constructor() {
    this.productService.getAll();
  }

  handleFormAction(item: IProduct) {
    this.productService.save(item);
  }

}
