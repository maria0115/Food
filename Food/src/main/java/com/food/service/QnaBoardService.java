package com.food.service;

import java.util.List;

import com.food.domain.PagingVO;
import com.food.domain.QnaBoardVO;

public interface QnaBoardService {

	public List<QnaBoardVO> selectqna(QnaBoardVO vo);
	
	public void insertqna(QnaBoardVO vo);
	
	// 게시물 총 갯수
	public int countBoard();

	// 페이징 처리 게시글 조회
	public List<QnaBoardVO> selectBoard(PagingVO vo);

	public QnaBoardVO viewDetail(QnaBoardVO vo);
	
	
}
