import { Injectable, signal } from '@angular/core';
import { ICategory } from '../interfaces';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<ICategory>{
  protected override source: string = 'categories'
  private itemListSignal = signal<ICategory[]>([])

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
        console.error('Error in get all categories request', error);
      }
    })
  }
}
