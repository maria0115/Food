package com.food.dao;

import java.util.List;

import com.food.domain.PagingVO;
import com.food.domain.QnaBoardVO;

public interface QnaBoardDAO {

	public List<QnaBoardVO> selectqna(QnaBoardVO vo);
	
	public void insertqna(QnaBoardVO vo);
	
	// 게시물 총 갯수
	public int countBoard();

	// 페이징 처리 게시글 조회
	public List<QnaBoardVO> selectBoard(PagingVO vo);

	public QnaBoardVO viewDetail(QnaBoardVO vo);

	public void modifyQna(QnaBoardVO vo);

	public void deleteQna(QnaBoardVO vo);

	public int searchCount(String searchType, String keyword);
	
}
