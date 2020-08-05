package com.food.dao;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;

public interface BoardDAO {

	int insertBoard(BoardVO vo);

	int updateBoard(BoardVO vo);

	public List<BoardVO> searchboard(MemberVO mvo);
	

	int countBoard(BoardVO vo);

	List<BoardVO> selectBoard(BoardVO vo, PagingVO pvo, String searchType, String keyword);

	int deleteBoard(BoardVO vo);
	
	BoardVO boardView(BoardVO vo);

	int searchCount(String searchType, String keyword);

	//밥친구 게시판 참가하기 버튼 눌렀을때
	int mealjoin(BoardVO vo);

	//밥친구 게시판 취소하기 버튼 눌렀을때
	int mealcancel(BoardVO vo);
	
	List<BoardVO> selectReview(BoardVO vo, PagingVO pvo, String searchType, String keyword);

}
