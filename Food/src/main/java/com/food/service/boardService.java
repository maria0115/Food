package com.food.service;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;

public interface boardService {
	
	//게시글등록
	int insertBoard(BoardVO vo);
	
	int updateBoard(BoardVO vo);
	
	//해당 게시판의 모든 글 숫자, 페이징 처리(total)에 사용
	int countBoard(BoardVO vo);

	public List<BoardVO> selectBoard(BoardVO vo,PagingVO pvo,String searchType, String keyword);
	
	int deleteBoard(BoardVO vo);
	
	
	BoardVO boardView(BoardVO vo);
	
}
