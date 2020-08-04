package com.food.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.food.domain.BoardVO;
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

	

}