import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from './modal/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
 

  navigateToLink(arg0: string) {
    this.router.navigate(['/'+ arg0]);
  }
 
  private loginUrl = 'http://localhost:8080';
  constructor(private router:Router, private httpClient:HttpClient) { }

  
  getAllProduct(): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/product/productlist`);
  }

  deleteProductById(pid:any):Observable<any>{
    return this.httpClient.delete(`${this.loginUrl}/product/deleteproduct/${pid}`,{ responseType: 'text' });
  }

  addProduct(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/product/addproduct`, body, { responseType: 'text' });
   }

  updateProduct(product: any):Observable<any> {
    return this.httpClient.put(`${this.loginUrl}/product/updateproduct/${product?.pid}`, product);
  }

  getProductById(id: any): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/product/getProductById/${id}`);
  }

  getCategoryList(): Observable<Array<Category>> {
    return this.httpClient.get<Array<Category>>(`${this.loginUrl}/productcategory/list`);
  }

  addCategory(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/productcategory/add`, body, { responseType: 'text' });
   }
  addSubCategory(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/productsubcategory/add`, body, { responseType: 'text' });
   }
}
