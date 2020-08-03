package com.food.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.StoreDAO;
import com.food.domain.BoardVO;
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

	@Override
	public List<BoardVO> reviewSelect(StoreListVO vo) {
		
		
		return storeDAO.reviewSelect(vo);
		
		
	}

	@Override
	public List<BoardVO> selectWriterSearchByNameWithPaging(Map map) {
		return storeDAO.selectWriterSearchByNameWithPaging(map);
	}
	@Override
	public int selectWriterCntByNameWithPaging(String searchWord) {
		return storeDAO.selectWriterCntByNameWithPaging(searchWord);
	}

	@Override
	public List<BoardVO> reviewSelect2(Map map) {
		return storeDAO.reviewSelect2(map);
	}

	@Override
	public List<BoardVO> reviewPaging(Map map) {
		System.out.println("ssssssssnsonsonsonsonsonosnsonsono"+map.get("s_brand_name"));
		return storeDAO.reviewPaging(map);
	}

	@Override
	public List<StoreListVO> selectStoreList(Map map) {
		return storeDAO.selectStoreList(map);
	}
		
	@Override
	public List<StoreListVO> selectStorePaging(Map map) {
		System.out.println("ssssssssnsonsonsonsonsonosnsonsono"+map.get("s_brand_name"));
		return storeDAO.selectStorePaging(map);
	}

	@Override
	public List<StoreListVO> serchSelect(Map map) {
		System.out.println("ssssssssnsonsonsonsonsonosnsonsono"+map.get("selectBoxName"));
		return storeDAO.serchSelect(map);
	}

	@Override
	public List<StoreListVO> searchSelectPaging(Map map) {
		
		return storeDAO.searchSelectPaging(map);
	}

	


	
	
	
	
	
}
