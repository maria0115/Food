package com.food.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.QnaBoardVO;

@Repository("qnaboarddao")
public class QnaBoardDAOImpl implements QnaBoardDAO {

	@Autowired
	private SqlSessionTemplate mybatis;
	
	public List<QnaBoardVO> selectqna(QnaBoardVO vo) {
		System.out.println("selectqna dao 도착");
		return mybatis.selectList("qnaboardDAO.selectqna",vo);
	}

	@Override
	public void insertqna(QnaBoardVO vo) {
		System.out.println("insertqna dao 도착");
		mybatis.insert("qnaboardDAO.insertqna",vo);
	}
	
	
	
	
}
