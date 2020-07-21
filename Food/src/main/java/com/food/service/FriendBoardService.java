package com.food.service;

import java.util.List;

import com.food.domain.FriendBoardVO;
import com.food.domain.PagingVO;

public interface FriendBoardService {

	//밥친구게시판 글 등록하기 
	Integer friendsave(FriendBoardVO vo);
	
	//밥친구게시판 목록 가져오기
	List<FriendBoardVO> getmealFriends(PagingVO vo);
	
	//밥친구게시판 글 상세보기
	FriendBoardVO mealboardView(FriendBoardVO vo);
	
	//밥친구게시판 글 전체수
	Integer friendBoardcount();
	
	
	
	
}
