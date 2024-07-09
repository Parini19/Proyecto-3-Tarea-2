import { Component, inject } from '@angular/core';
import { CategoryListComponent } from '../../components/category/category-list/category-list.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CategoryFormComponent } from '../../components/category/category-form/category-form.component';
import { ICategory } from '../../interfaces';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CategoryListComponent,
    LoaderComponent,
    ModalComponent,
    CategoryFormComponent
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  public itemList: ICategory[] = [];
  public service = inject(CategoryService)

  constructor() {
    this.service.getAll();
  }
}
