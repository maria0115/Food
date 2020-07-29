package com.food.service;

import java.util.List;
import java.util.Map;

import com.food.domain.BoardVO;
import com.food.domain.StoreListVO;

public interface StoreService {

	List<StoreListVO> getStoreList(StoreListVO vo);

	StoreListVO storeDetail(StoreListVO vo);

	List<BoardVO> reviewSelect(StoreListVO vo);

	public List<BoardVO> selectWriterSearchByNameWithPaging(Map searchMap);
	public int selectWriterCntByNameWithPaging(String searchWord);

	List<BoardVO> reviewSelect2(Map map);
	
	List<BoardVO> reviewPaging(Map map);
	
	
	
	
	

}
