package com.food.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
import com.food.domain.StoreListVO;


public interface StoreDAO {

	public List<StoreListVO> getStoreList(StoreListVO vo);

	public StoreListVO storeDetail(StoreListVO vo);

	public List<BoardVO> reviewSelect(StoreListVO vo);

	public List<BoardVO> selectWriterSearchByNameWithPaging(Map map);

	public int selectWriterCntByNameWithPaging(String searchWord);

	public List<BoardVO> reviewSelect2(Map map);

	public List<BoardVO> reviewPaging(Map map);

	public List<StoreListVO> selectStoreList(Map map);

	public List<StoreListVO> selectStorePaging(Map map);

	public int shopmember(StoreListVO svo);

	public int getTotal();
	
	public List<StoreListVO> getstore(PagingVO pvo,String s_category, String keyword);
		
	public int searchCount(String s_category, String keyword);
	
	public int stategetTotal();
	
	public List<StoreListVO> stategetstore(PagingVO pvo,String s_category, String keyword);
		
	public int statesearchCount(String s_category, String keyword);

	public List<BoardVO> starAvg();
	
	public int stateY(StoreListVO vo);
	
	public int stateN(StoreListVO vo);
	
	
	
	public StoreListVO getkor();
	
	public StoreListVO geteng();
	
	public StoreListVO getjap();
	 
	public StoreListVO getmin();
	
	public StoreListVO geteast();
	
	public StoreListVO getch();
	
}