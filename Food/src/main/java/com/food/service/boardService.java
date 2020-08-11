package com.food.service;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;

public interface boardService {
	
	//게시글등록
	int insertBoard(BoardVO vo);
	
	int updateBoard(BoardVO vo);
	
	//해당 게시판의 모든 글 숫자, 페이징 처리(total)에 사용
	int countBoard(BoardVO vo);

	public List<BoardVO> selectBoard(BoardVO vo,PagingVO pvo,String searchType, String keyword);
	
	int deleteBoard(BoardVO vo);
	
	public List<BoardVO> searchboard(MemberVO mvo);
	
	BoardVO boardView(BoardVO vo);

	int searchCount(String searchType, String keyword);
	
	//밥친구 게시판 참여하기 버튼 눌렀을때
	int mealjoin(BoardVO vo);
	//밥친구 게시판 취소하기 버튼 눌렀을때
	int mealcancel (BoardVO vo);
	
	public List<BoardVO> selectReview(BoardVO vo,PagingVO pvo,String searchType, String keyword);
	
	void insertReply(BoardVO vo);
	
	void modifyReply(BoardVO vo);

	List<BoardVO> selectReply(BoardVO vo);

	void deleteReply(BoardVO vo);
	
	//밥친구 게시판 전체 글 가져오기
	List<BoardVO> selectmeal(BoardVO vo);
	
}
