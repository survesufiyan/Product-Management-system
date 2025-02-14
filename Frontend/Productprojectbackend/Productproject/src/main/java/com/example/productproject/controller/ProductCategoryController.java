package com.example.productproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.productproject.entity.Product;
import com.example.productproject.entity.ProductCategory;
import com.example.productproject.repository.ProductCategoryRepository;
import com.example.productproject.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/productcategory")
public class ProductCategoryController {

	@Autowired
	private ProductCategoryRepository pcr;
	
	@PostMapping("/add")
    public String addProductCategory(@RequestBody  ProductCategory p) {
        pcr.save(p);
        return "Product category added successfully";
    }
	
	@GetMapping("/list")
	public List<ProductCategory> getAllProduct()
	{
        return pcr.findAll();
    }
	
	@GetMapping("/getbyid/{id}")
	public ProductCategory getProductCategoryById(@PathVariable int id)
	{
        return pcr.getById(id);
    }
	
//	@PutMapping("/updateproduct/{id}")
//	public ProductCategory updateProductCategory(@PathVariable int id , @RequestBody ProductCategory p) {
//		return pcr.(id, p);
//       
//    }
	
	@DeleteMapping("/delete/{id}")
    public String deleteProductCategoryById(@PathVariable int id) {
        pcr.deleteById(id);
        return "product deleted successfully";
    }
}
