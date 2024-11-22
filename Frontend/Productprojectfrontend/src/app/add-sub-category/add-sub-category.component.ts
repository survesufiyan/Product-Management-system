import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { take } from 'rxjs';
import { Category } from '../modal/category';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrl: './add-sub-category.component.css'
})
export class AddSubCategoryComponent {
  categoryName: string = '';
  allCategory: Array<Category> = [];
  parentCategory: number = 0;
  constructor(
    private service: ProductService
  ) {
    this.service.getCategoryList().pipe(take(1)).subscribe((res) => {
      if (res && res.length > 0) {
        this.allCategory = res;
        this.parentCategory = this.allCategory[0].pc_id;
      }
    });
  }

  addSubCategory(): void {
    if (this.categoryName === '') {
      alert("Please add Sub category");
      return;
    }
    const body = {
      subCategoryName: this.categoryName,
      productCategory: {
        "pc_id": this.parentCategory
      }
    };
    this.service.addSubCategory(body).pipe(take(1)).subscribe((res: any) => {
      if (res) {
        alert('Sub Category Added Successfully');
        this.service.navigateToLink('/adminDashboard');
      }
      console.log('>>>>>');
    });
  }
}
