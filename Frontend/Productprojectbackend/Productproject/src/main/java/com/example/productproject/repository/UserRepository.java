package com.example.productproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.productproject.entity.User;



@Repository
public interface UserRepository extends JpaRepository <User,Integer>{

	public User findByEmailAndPass(String email,String password);
	
	List<User> findByFirstNameContainingIgnoreCase(String searchText);
}
