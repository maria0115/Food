package com.food.dao;

import java.util.List;

import com.food.domain.BlackListVO;

import com.food.domain.PagingVO;

public interface BlackDAO {
	
	//회원리스트 검색했을 경우 검색한 회원 정보 반환, 검색을 안했을 경우 모든 회원 정보 반환
		public List<BlackListVO> selectBoard(PagingVO pvo, String searchType, String keyword);
			
		int searchCount(String searchType, String keyword);
		
		List<BlackListVO> listAll();

		int allCount();

		int blackDelete(BlackListVO vo);

}
