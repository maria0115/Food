package com.food.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.ProductVO;

@Repository("productdao")
public class ProductDAOImpl implements ProductDAO {

	@Autowired
	private SqlSessionTemplate mybatis;

	@Override
	public int shopmember(ProductVO pvo) {
		return mybatis.insert("memberDAO.shopmember2",pvo);
		
	}
	
}
