package com.food.dao;

import java.util.List;

import com.food.domain.StoreListVO;
import com.food.domain.WishlistVO;


public interface CartDAO {

	void insertCart(WishlistVO vo);

	List<WishlistVO> selectCart(WishlistVO vo);

	void deleteCart(WishlistVO vo);

	String selectName(StoreListVO vo);


}
