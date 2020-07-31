package com.food.service;

import java.util.List;

import com.food.domain.PagingVO;
import com.food.domain.StoreListVO;

public interface FriendBoardService {

	
	//마커 여러개찍기 test용
	List<StoreListVO> test();
	
	//매장 총 갯수
	Integer allcount();
	
	//검색했을때 결과값 
	Integer searchCount(String searchType, String keyword);
	
	//검색해서 나온 결과 가져오기
	List<StoreListVO> selectStore(PagingVO pvo, String searchType, String keyword);
	
	
	
	
	
	
}
