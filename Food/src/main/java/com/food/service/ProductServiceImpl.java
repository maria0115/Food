package com.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.ProductDAO;
import com.food.domain.ProductVO;

@Service("productService")
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductDAO productdao;

	@Override
	public int shopmember(ProductVO pvo) {
		return productdao.shopmember(pvo);
	}

}
