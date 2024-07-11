import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../../interfaces/index';
import { CategoryService } from '../../../services/categories.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit{
  @Input() product: IProduct = {};
  @Input() action = '';
  @Output() callParentEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  categorySelect: number = 0;
  public categoryService: CategoryService = inject(CategoryService);

  callEvent() {
    if (this.categorySelect != 0) {
      this.product.category = {id: this.categorySelect};
    }
    this.callParentEvent.emit(this.product);
  }

  ngOnInit(): void {
    this.categoryService.getAll();
  }
}