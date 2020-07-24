package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.FriendBoardDAO;
import com.food.domain.BoardVO;
import com.food.domain.FriendBoardVO;
import com.food.domain.PagingVO;

@Service("friendBoardService")
public class FriendBoardServiceImpl implements FriendBoardService{

	
	@Autowired
	FriendBoardDAO friendBoarddao;
	
	//밥친구 게시판 글 등록하기 
	@Override
	public Integer friendsave(FriendBoardVO vo) {
		
		return friendBoarddao.friendsave(vo);
	}

	//밥친구 게시판 글 목록 가져오기 
	@Override
	public List<FriendBoardVO> getmealFriends(PagingVO vo) {
		
		return friendBoarddao.getmealFriends(vo);
	}

	//밥친구 게시판 글 상세보기 
	@Override
	public FriendBoardVO mealboardView(FriendBoardVO vo) {
		
		return friendBoarddao.mealboardView(vo);
	}

	//밥친구 게시판 글 전체수 
	@Override
	public Integer friendBoardcount() {
		
		return friendBoarddao.friendBoardcount();
	}

	//밥친구게시판 글 수정하기
	@Override
	public Integer friendmodify(FriendBoardVO vo) {
		
		return friendBoarddao.friendmodify(vo);
	}

	//밥친구게시판 글 삭제하기
	@Override
	public Integer friendsdelete(FriendBoardVO vo) {
		
		return friendBoarddao.friendsdelete(vo);
	}

	//밥친구 확정자
	@Override
	public Integer mealjoin(BoardVO vo) {
		
		return friendBoarddao.mealjoin(vo);
	}

	//밥친구 확정자 인원수 가져오기
	@Override
	public List<FriendBoardVO> getjoinCnt(BoardVO vo) {
		return friendBoarddao.getjoinCnt(vo);
	}
	
	

}
