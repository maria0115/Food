package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.StoreDAO;
import com.food.domain.StoreListVO;




@Service("storeService")
public class StoreServiceImpl implements StoreService{
	
	@Autowired
	private StoreDAO storeDAO;

	public List<StoreListVO> getStoreList(StoreListVO vo){
		System.out.println("스토어서비스요");
		return storeDAO.getStoreList(vo);
	}

	public StoreListVO storeDetail(StoreListVO vo) {
		System.out.println("storeDetail 서비스");
		return storeDAO.storeDetail(vo);
	}
	
}
