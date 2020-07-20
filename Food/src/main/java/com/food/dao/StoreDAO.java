package com.food.dao;

import java.util.List;

import com.food.domain.StoreListVO;


public interface StoreDAO {

	public List<StoreListVO> getStoreList(StoreListVO vo);


}