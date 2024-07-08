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
        console.log('response', response);
        this.itemListSignal.set(response);
      },
      error: (error: any) => {
        console.error('Error in get all products request', error);
      }
    })
  }
}
