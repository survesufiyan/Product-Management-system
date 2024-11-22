package com.example.productproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.productproject.entity.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer>
{

}
