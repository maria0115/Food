package com.food.service;

import java.util.List;

import com.food.domain.BlackListVO;
import com.food.domain.PagingVO;

public interface BlackService {

	int allCount();

	int searchCount(String searchType, String keyword);

	public List<BlackListVO> selectBoard(PagingVO pvo, String searchType, String keyword);

	public int blackDelete(BlackListVO vo);
	
	public List<BlackListVO> listAll();
}
