package com.food.service;

import java.util.List;

import com.food.domain.StoreListVO;
import com.food.domain.WishlistVO;

public interface CartService{

	void insertCart(WishlistVO vo);

	List<WishlistVO> selectCart(WishlistVO vo);

	void deleteCart(WishlistVO vo);

	String selectName(StoreListVO vo);

}
