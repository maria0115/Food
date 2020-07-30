package com.food.service;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.FriendBoardVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;
import com.food.domain.StoreListVO;

public interface FriendBoardService {

	//밥친구게시판 글 등록하기 
	Integer friendsave(FriendBoardVO vo);
	
	//밥친구게시판 목록 가져오기
	List<FriendBoardVO> getmealFriends(PagingVO vo);
	
	//밥친구게시판 글 상세보기
	FriendBoardVO mealboardView(FriendBoardVO vo);
	
	//밥친구게시판 글 전체수
	Integer friendBoardcount();
	
	//밥친구게시판 글 수정하기 
	Integer friendmodify(FriendBoardVO vo);
	
	//밥친구게시판 글 삭제하기 
	Integer friendsdelete(FriendBoardVO vo);
	
	//밥친구 확정자 추가하기 
	Integer mealjoin(BoardVO vo);
	
	//밥친구 인원 가져오기
	List<FriendBoardVO> getjoinCnt(BoardVO vo);
	
	//마커 여러개찍기 test용
	List<StoreListVO> test();
	
	
	
	
	
	
}
