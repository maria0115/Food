package com.food.service;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.StoreListVO;

public interface StoreService {

	List<StoreListVO> getStoreList(StoreListVO vo);

	StoreListVO storeDetail(StoreListVO vo);

	List<BoardVO> reviewSelect(StoreListVO vo);

	
	
	
	

}
