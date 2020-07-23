package com.food.service;

import java.util.List;

import com.food.domain.StoreListVO;

public interface StoreService {

	List<StoreListVO> getStoreList(StoreListVO vo);

	public StoreListVO storeDetail(StoreListVO vo);
	
	

}
