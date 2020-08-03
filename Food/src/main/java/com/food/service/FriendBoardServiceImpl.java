package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.FriendBoardDAO;
import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
import com.food.domain.StoreListVO;

@Service("friendBoardService")
public class FriendBoardServiceImpl implements FriendBoardService{

	
	@Autowired
	FriendBoardDAO friendBoarddao;
	
	@Override
	public List<StoreListVO> test() {
		
		return friendBoarddao.test();
	}

	@Override
	public Integer allcount() {
		
		return friendBoarddao.allcount();
	}

	@Override
	public Integer searchCount(String searchType, String keyword) {
		
		return friendBoarddao.searchCount(searchType,keyword);
	}

	@Override
	public List<StoreListVO> selectStore(PagingVO pvo, String searchType, String keyword) {
		return friendBoarddao.selectStore(pvo,searchType,keyword);
	}

	@Override
	public List<BoardVO> nexalist(PagingVO pvo, String searchType, String keyword) {
		
		return friendBoarddao.nexalist(pvo,searchType,keyword);
	}
	
	

}
