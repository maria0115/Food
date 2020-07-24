package com.food.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.ProductVO;
import com.food.domain.StoreListVO;


@Repository("storeDAO") 
public class StoreDAOImpl implements StoreDAO{
	
	@Autowired
	private SqlSessionTemplate mybatis;

	@Override
	public List<StoreListVO> getStoreList(StoreListVO vo) {
		System.out.println("스토어다오요");
		return mybatis.selectList("StoreDAO.getStore",vo);
	}
	@Override
	public StoreListVO storeDetail(StoreListVO vo) {
		System.out.println("storeDetail 다오");
		System.out.println(vo.getS_brand_name());
		System.out.println(vo.getP_name());
		System.out.println(vo.getP_price());
//		String name = vo.getS_brand_name()+" ";
//		vo.setS_brand_name(name);
		return mybatis.selectOne("StoreDAO.selecStore",vo);
	}
	

	
}