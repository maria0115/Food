package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.QnaBoardDAO;
import com.food.domain.PagingVO;
import com.food.domain.QnaBoardVO;

@Service("qnaboardservice")
public class QnaBoardServiceImpl implements QnaBoardService{

	@Autowired
	private QnaBoardDAO qnaboarddao;
	
	public List<QnaBoardVO> selectqna(QnaBoardVO vo) {
		System.out.println("service selectqna 도착");
		return qnaboarddao.selectqna(vo);
	}

	public void insertqna(QnaBoardVO vo) {
		System.out.println("service insertqna 도착");
		qnaboarddao.insertqna(vo);
	}
	
	@Override
	public int countBoard() {
		System.out.println("countBoard 서비스");
		return qnaboarddao.countBoard();
	}

	@Override
	public List<QnaBoardVO> selectBoard(PagingVO vo) {
		System.out.println("selectBoard 서비스");
		return qnaboarddao.selectBoard(vo);
	}

	@Override
	public QnaBoardVO viewDetail(QnaBoardVO vo) {
		System.out.println("viewDetail 서비스");
		return qnaboarddao.viewDetail(vo);
	}
	
	
	
}
