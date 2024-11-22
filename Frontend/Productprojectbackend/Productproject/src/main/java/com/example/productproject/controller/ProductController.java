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
import com.example.productproject.repository.ProductRepository;
import com.example.productproject.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/product")
public class ProductController 

{
	@Autowired
	private ProductService ps;
	
	@Autowired
	private ProductRepository prs;
	
	@PostMapping("/addproduct")
    public String addProduct(@RequestBody  Product p) {
        ps.addProduct(p);
        return "Product added successfully";
    }

	
	@GetMapping("/productlist")
	public List<Product> getAllProduct()
	{
        return ps.getAllProduct();
    }
	
	@GetMapping("/getProductById/{id}")
	public Product getProductById(@PathVariable int id)
	{
        return prs.findById(id).get();
    }
	
	@PutMapping("/updateproduct/{id}")
	public Product updateProduct(@PathVariable int id , @RequestBody Product p) {
		return ps.updateProduct(id, p);
       
    }
	
	@DeleteMapping("/deleteproduct/{id}")
    public String deleteProductById(@PathVariable int id) {
        ps.deleteProductById(id);
        return "product deleted successfully";
    }
}
