package com.food.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.StoreListVO;
import com.food.domain.WishlistVO;


@Repository
public class CartDAOImpl implements CartDAO {
	
	@Autowired
	private SqlSessionTemplate mydatis;

	@Override
	public void insertCart(WishlistVO vo) {
		System.out.println("insertCart DAO");
		mydatis.insert("wishlistDAO.insertCart", vo);
	}

	@Override
	public List<WishlistVO> selectCart(WishlistVO vo) {
		System.out.println("selectCart DAO");
		return mydatis.selectList("wishlistDAO.selectCart", vo);
	}

	@Override
	public void deleteCart(WishlistVO vo) {
		System.out.println("deleteCart DAO");
		mydatis.selectList("wishlistDAO.deleteCart", vo);
	}

	@Override
	public String selectName(StoreListVO vo) {
		return mydatis.selectOne("wishlistDAO.selectName", vo);
	}
	
	

}
