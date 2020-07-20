package com.food.dao;

import java.util.List;

import com.food.domain.QnaBoardVO;

public interface QnaBoardDAO {

	public List<QnaBoardVO> selectqna(QnaBoardVO vo);
	
}
