package com.food.service;

import java.util.List;

import com.food.domain.FriendBoardVO;

public interface FriendBoardService {

	//밥친구게시판 글 등록하기 
	Integer friendsave(FriendBoardVO vo);
	
	//밥친구게시판 목록 가져오기
	List<FriendBoardVO> getmealFriends();
	
	//밥친구게시판 글 상세보기
	FriendBoardVO mealboardView(FriendBoardVO vo);
	
	
	
}
