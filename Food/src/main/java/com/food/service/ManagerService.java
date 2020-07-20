package com.food.service;

import java.util.List;


import com.food.domain.MemberVO;
import com.food.domain.PagingVO;


public interface ManagerService {

	
	public List<MemberVO> listAll();


	public int allCount();

	public int searchCount(String searchType, String keyword);

	public List<MemberVO> selectBoard(PagingVO pvo,String searchType,String keyword);


	public int memberDelete(MemberVO vo);



}
