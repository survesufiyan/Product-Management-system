import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Category } from '../../modal/category';
import { SubCategory } from '../../modal/subCategory';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent implements OnInit{
  pname: string = '';
  pDescription: string = '';
  pPrice: any = '';
  pCategory: string = '';
  pQuantity: any = '';
  pImage: any = '';
  isEdit: boolean = false;
  errorMessage: string = '';
  pid: any = '';
  catgoryList: Array<Category> = [];
  subCategoryList: Array<SubCategory> = [];
  categoryId: number = 0;
  subCategoryId: number = 0;

  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getCategoryList();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activatedRoute.queryParams.subscribe((res: any) => {
        console.log('>>>>>>>>', res);
        if (res && res?.pid) {
          this.isEdit = true;
          this.getProductById(res?.pid);
        }
      });  
    }, 1000);
    
  }

  getCategoryList(): void {
    this.service
      .getCategoryList()
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res && Array.isArray(res)) {
          this.catgoryList = res;
        }
      });
  }

  getProductById(id: any): void {
    this.service
      .getProductById(id)
      .pipe(take(1))
      .subscribe((res) => {
        if (res && res?.pid) {
          this.categoryId = res?.productCategory?.pc_id;
          this.subCategoryList = res?.productCategory?.subCategories;
          this.pid = res?.pid;
          this.pname = res?.pname;
          this.pCategory = res?.pCategory;
          this.pDescription = res?.pDescription;
          this.pImage = res?.pImage;
          this.pPrice = res?.pPrice;
          this.pQuantity = res?.pQuantity;  
          this.subCategoryId = res?.subCategory?.psc_id;
          console.log('>>>>>>>>>>>>>>>>%%>>', this.subCategoryId)
        }
        this.getSubList();
      });
  }
  addUpdateProudcut(): any {
    if (this.pname === '') {
      this.errorMessage = 'Product name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }

    if (this.pDescription === '') {
      this.errorMessage = 'Product Description should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }

    if (this.pPrice === '') {
      this.errorMessage = 'Product Price should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }


    if (this.pQuantity === '') {
      this.errorMessage = 'Product Quantity should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }

    if (this.pImage === '') {
      this.errorMessage = 'Product Image URL should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    const pCategory = this.catgoryList.find((item: Category) => item.pc_id === parseInt(this.categoryId.toString()));
    const sCategory = this.subCategoryList.find((item: SubCategory) => item?.psc_id === parseInt(this.subCategoryId.toString()))
    const body: any = {
      pname: this.pname,
      pDescription: this.pDescription,
      pPrice: this.pPrice,
      productCategory: pCategory,
      subCategory: sCategory,
      pQuantity: this.pQuantity,
      pImage: this.pImage,
    };
    if (!this.isEdit) {
      this.service
        .addProduct(body)
        .pipe(take(1))
        .subscribe((res: any) => {
          console.log('>>>>>>response>>>>>>>>>>', res);
          if (res && res === 'Product added successfully') {
            alert('Product Added successfully');
            this.service.navigateToLink('listproduct');
          }
        });
    } else {
      body.pid = this.pid;
      this.service.updateProduct(body).subscribe((res: any) => {
        console.log('##res#####', res);
        if (res && res?.pid) {
          alert('Product Updated successfully');
          this.service.navigateToLink('listproduct');
        }
      });
    }
  }

  getSubList(): void {
    console.log('#catId###', this.categoryId);
    if (this.categoryId) {
      const subList = this.catgoryList.filter((item: Category) => item?.pc_id === parseInt(this.categoryId.toString(), 10));
      console.log('>>subcatId>>>', this.subCategoryId);
      if (subList && subList.length > 0) {
        this.subCategoryList = subList[0].subCategories;
      }
    }
  }
}
