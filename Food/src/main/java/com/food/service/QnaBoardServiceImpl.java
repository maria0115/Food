package com.food.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.food.dao.QnaBoardDAO;
import com.food.domain.QnaBoardVO;

@Service("qnaboardservice")
public class QnaBoardServiceImpl implements QnaBoardService{

	private QnaBoardDAO qnaboarddao;
	
	public List<QnaBoardVO> selectqna(QnaBoardVO vo) {
		System.out.println("service 도착");
		return qnaboarddao.selectqna(vo);
	}
	
	
	
	
}
