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
		System.out.println("서비스요");
		return storeDAO.getStoreList(vo);
	}
	
}
