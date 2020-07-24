package com.food.dao;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;

public interface BoardDAO {

	int insertBoard(BoardVO vo);

	int updateBoard(BoardVO vo);


	int countBoard(BoardVO vo);

	List<BoardVO> selectBoard(BoardVO vo, PagingVO pvo, String searchType, String keyword);

	int deleteBoard(BoardVO vo);

}
