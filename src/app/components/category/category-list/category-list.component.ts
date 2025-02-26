import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { ICategory } from '../../../interfaces';
import { CategoryService } from '../../../services/categories.service';

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
export class CategoryListComponent implements OnChanges{
  @Input() areActionAvailable: boolean = false;
  @Input() itemList: ICategory[] = [];
  public selectedItem: ICategory = {};
  public categoryService: CategoryService = inject(CategoryService);

  showDetailModal(item:ICategory, modal: any) {
    this.selectedItem = {...item}
    modal.show();
  }

  handleFormAction(item: ICategory) {
    this.categoryService.update(item);
  }

  deleteCategory(item: ICategory){
    this.categoryService.delete(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['areActionAvailable']){
      console.log('areActionAvailable', this.areActionAvailable);
    }
  }
}
