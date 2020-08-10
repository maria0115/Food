package com.food.service;

import java.util.List;
import java.util.Map;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
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
	List<StoreListVO> selectStoreList(Map map);
	//가게리스트 페이징
	List<StoreListVO> selectStorePaging(Map map);
	
	public int shopmember(StoreListVO svo);
	
	//가게 총 갯수 
	int getTotal();
	
	//검색결과로 리스트 뽑아오기 
	List<StoreListVO> getstore(PagingVO pvo,String s_category, String keyword);
	
	//검색된 총 갯수 
	int searchCount(String s_category, String keyword);
	
	
	

}
