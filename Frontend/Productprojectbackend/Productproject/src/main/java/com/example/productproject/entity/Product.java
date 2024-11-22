package com.example.productproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
@Entity
public class Product 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	
	
//	@NotNull(message = "Please Give Unique Product Name")
	private String pname;
	
//	@NotNull(message = "Please Give Unique Product Description")
	private String pDescription;
	
//	@NotNull(message = "Please Give Product Price")
	private long  pPrice;
	

	
//	@NotNull(message = "Please Give Product Quantity")
	private int pQuantity;
	
//	@NotNull(message = "Please Give Unique Product Image URL")
	private String pImage;
	
	@ManyToOne
    @JoinColumn(name = "pc_id")
     private ProductCategory productCategory;

    @ManyToOne
    @JoinColumn(name = "psc_id")
    private ProductSubCategory subCategory;
	
	
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getpDescription() {
		return pDescription;
	}
	public void setpDescription(String pDescription) {
		this.pDescription = pDescription;
	}
	public long getpPrice() {
		return pPrice;
	}
	public void setpPrice(long pPrice) {
		this.pPrice = pPrice;
	}
	
	public int getpQuantity() {
		return pQuantity;
	}
	public void setpQuantity(int pQuantity) {
		this.pQuantity = pQuantity;
	}
	public String getpImage() {
		return pImage;
	}
	public void setpImage(String pImage) {
		this.pImage = pImage;
	}
	public ProductCategory getProductCategory() {
		return productCategory;
	}
	public ProductSubCategory getSubCategory() {
		return subCategory;
	}
	public void setProductCategory(ProductCategory productCategory) {
		this.productCategory = productCategory;
	}
	public void setSubCategory(ProductSubCategory subCategory) {
		this.subCategory = subCategory;
	}
	
	
	

}
