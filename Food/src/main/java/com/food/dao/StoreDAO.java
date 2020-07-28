package com.food.dao;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.StoreListVO;


public interface StoreDAO {


	


	public List<StoreListVO> getStoreList(StoreListVO vo);

	public StoreListVO storeDetail(StoreListVO vo);

	public List<BoardVO> reviewSelect(StoreListVO vo);

}