package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.CartDAO;
import com.food.domain.MemberVO;
import com.food.domain.StoreListVO;
import com.food.domain.WishlistVO;

@Service
public class CartServiceImpl implements CartService {
	
	@Autowired
	private CartDAO CartDao;

	@Override
	public void insertCart(WishlistVO vo) {
		CartDao.insertCart(vo);
	}

	@Override
	public List<WishlistVO> selectCart(WishlistVO vo) {
		return CartDao.selectCart(vo);
		
	}

	@Override
	public void deleteCart(WishlistVO vo) {
		CartDao.deleteCart(vo);
	}

	@Override
	public String selectName(StoreListVO vo) {
		return CartDao.selectName(vo);
	}

	@Override
	public int selectCount(MemberVO vo) {
		return CartDao.selectCount(vo);
	}

}
