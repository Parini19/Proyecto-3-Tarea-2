import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { ICategory } from '../../../interfaces';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    CategoryFormComponent
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  @Input() itemList: ICategory[] = [];

  public selectedItem: ICategory = {};

  showDetail (item: ICategory, modal: any) {
    console.log('Detail item', item);
    this.selectedItem = item;
    modal.show();
  }
}
