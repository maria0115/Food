package com.food.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.StoreListVO;


@Repository("storeDAO") 
public class StoreDAOImpl implements StoreDAO{
	
	@Autowired
	private SqlSessionTemplate mybatis;

	public List<StoreListVO> getStoreList(StoreListVO vo) {
		System.out.println("다오요");
		return mybatis.selectList("StoreDAO.getStore",vo);
	}

	
}