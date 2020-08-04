package com.food.dao;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.FriendBoardVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;
import com.food.domain.StoreListVO;

public interface FriendBoardDAO {

	
	public List<StoreListVO> test();
	
	public Integer allcount();
	
	public Integer searchCount(String searchType, String keyword);
	
	public List<StoreListVO> selectStore(PagingVO pvo, String searchType, String keyword);
	
	public List<BoardVO> nexalist();
	
	
}
