package com.food.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.ChoiceMenuVO;


@Repository("choiceDAO") 
public class ChoiceDAOImpl implements ChoiceDAO{
	@Autowired
	private SqlSessionTemplate mybatis;

	@Override
	public List<ChoiceMenuVO> getChoiceList(ChoiceMenuVO vo) {
		System.out.println("zzz");
		return mybatis.selectList("ChoiceDAO.getChoice",vo);
	}

	
}