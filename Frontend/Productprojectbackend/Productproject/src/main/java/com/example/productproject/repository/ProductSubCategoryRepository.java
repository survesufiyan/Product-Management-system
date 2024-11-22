package com.example.productproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.productproject.entity.ProductSubCategory;



public interface ProductSubCategoryRepository extends JpaRepository<ProductSubCategory, Integer> {

}
