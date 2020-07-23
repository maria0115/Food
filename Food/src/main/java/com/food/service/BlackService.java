package com.food.service;

import java.util.HashMap;
import java.util.List;

import com.food.domain.BlackListVO;
import com.food.domain.PagingVO;

public interface BlackService {

	int allCount();

	int searchCount(String searchType, String keyword);

	public List<HashMap> selectBoard(PagingVO pvo, String searchType, String keyword);

	public int blackDelete(BlackListVO vo);
	
	public List<BlackListVO> listAll();

	int insertBlack(BlackListVO vo, int term);

	List<BlackListVO> listSearch(BlackListVO vo);

	int blackUpdate(BlackListVO vo);
}
