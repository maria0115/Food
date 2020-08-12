package com.food.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.StoreDAO;
import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
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
	public int shopmember(StoreListVO svo) {
		 return storeDAO.shopmember(svo); 
		
	}
	
	@Override
	public int getTotal() {
		
		return storeDAO.getTotal();
	}

	@Override
	public List<StoreListVO> getstore(PagingVO pvo, String s_category, String keyword) {
		
		return storeDAO.getstore(pvo,s_category,keyword);
	}

	@Override
	public int searchCount(String s_category, String keyword) {
		
		return storeDAO.searchCount(s_category,keyword);
	}

	//리뷰평점가져오기
	@Override
	public List<BoardVO> starAvg() {
		
		return storeDAO.starAvg();
	}

	@Override
	public int stategetTotal() {
		
		return storeDAO.stategetTotal();
	}

	@Override
	public List<StoreListVO> stategetstore(PagingVO pvo, String s_category, String keyword) {
		
		return storeDAO.stategetstore(pvo,s_category,keyword);
	}

	@Override
	public int statesearchCount(String s_category, String keyword) {
		
		return storeDAO.statesearchCount(s_category,keyword);
	}

	@Override
	public int stateY(StoreListVO vo) {
		
		return storeDAO.stateY(vo);
	}
	
	public int stateN(StoreListVO vo) {
		return storeDAO.stateN(vo);
	}

	@Override
	public StoreListVO getkor() {
		// TODO Auto-generated method stub
		return storeDAO.getkor();
	}

	@Override
	public StoreListVO geteng() {
		// TODO Auto-generated method stub
		return storeDAO.geteng();
	}

	@Override
	public StoreListVO getjap() { 
		// TODO Auto-generated method stub
		return storeDAO.getjap();
	}

	@Override
	public StoreListVO getmin() {
		// TODO Auto-generated method stub
		return storeDAO.getmin();
	}

	@Override
	public StoreListVO geteast() {
		// TODO Auto-generated method stub 
		return storeDAO.geteast();
	}

	@Override
	public StoreListVO getch() {
		// TODO Auto-generated method stub
		return storeDAO.getch();
	}

	


	
	
	
	
	
}
