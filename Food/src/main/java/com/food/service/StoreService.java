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
	//리뷰검색
	List<BoardVO> reviewSelect2(Map map);
	//리뷰페이징
	List<BoardVO> reviewPaging(Map map);

	//가게 가져오기
	List<BoardVO> selectStoreList(Map map);
	//가게리스트 페이징
	List<BoardVO> selectStorePaging(Map map);
	
	
	
	
	

}
