package com.example.productproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.productproject.entity.Product;
import com.example.productproject.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository pr ;



	public Product addProduct(Product p) 
	{
		return pr.save(p);
	}



	public List<Product> getAllProduct() {
		return pr.findAll();
	}



	public Product updateProduct(int id, Product p)
	{
		p.setPid(id);
		return pr.save(p);
	}



	public void deleteProductById(int id) {
		pr.deleteById(id);
		
	}
	
}
