import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<IProduct>{
  protected override source: string = 'products'
  private itemListSignal = signal<IProduct[]>([])

  get items$ () {
    return this.itemListSignal;
  }

  public getAll() {
    this.findAll().subscribe({
      next: (response: any) => {
        response.reverse();
        console.log('response', response);
        this.itemListSignal.set(response);
      },
      error: (error: any) => {
        console.error('Error in get all products request', error);
      }
    })
  }

  public save(item: IProduct) {
   this.add(item).subscribe({
    next: (response: any) => {
      console.log('response', response);
      this.itemListSignal.update((products: IProduct[]) => [response, ...products]);
    },
    error: (error: any) => {
      console.error('response', error.description);
    }
   })
}

public update(item: IProduct) {
  this.add(item).subscribe({
   next: (response: any) => {
    const updatedItems = this.itemListSignal().map(product => product.id === item.id ? item: product)
    this.itemListSignal.set(updatedItems);
   },
   error: (error: any) => {
     console.error('response', error.description);
   }
  })
}
}