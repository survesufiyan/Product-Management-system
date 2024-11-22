import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductService } from '../../product.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css',
})
export class ListproductComponent {
  allproduct: any[] = [];
  isAdmin: boolean = false;
  constructor(private service: ProductService, private router: Router, private authServic: AuthService) {
    this.getAllProduct();
    this.isAdmin = this.authServic.isAdmin();
  }

  getAllProduct(): void {
    this.service.getAllProduct().pipe(take(1)).subscribe((res: any) => {
        this.allproduct = res;
        console.log("####",this.allproduct);
  
        //console.log('Products cat Name:', res.productCategory.productName);
      });
  }

  onDelete(product: any): void {
    this.service.deleteProductById(product?.pid).subscribe((res: any) => {
      console.log('>>>>>>>>>>>>>>>>', res);

      alert('Product Deleted successfully');
      this.getAllProduct();
    });
  }

  onEdit(product: any): void {
    console.log('####', product?.pid);
    this.router.navigate(['/addproduct'], {
      queryParams: { pid: product?.pid },
    });
    console.log('update');
  }
}
