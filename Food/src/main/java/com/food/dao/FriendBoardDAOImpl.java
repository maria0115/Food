package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.BoardVO;
import com.food.domain.FriendBoardVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;
import com.food.domain.StoreListVO;

@Repository("friendBoarddao")
public class FriendBoardDAOImpl implements FriendBoardDAO{

	@Autowired
	private SqlSessionTemplate mybatis;
	
	
	//test용
	@Override
	public List<StoreListVO> test() {
		
		return mybatis.selectList("friendDAO.test");
	}


	@Override
	public Integer allcount() {
		
		return mybatis.selectOne("friendDAO.allcount");
	}


	@Override
	public Integer searchCount(String searchType, String keyword) {
		
		HashMap map = new HashMap();
		map.put("searchType", searchType);
		map.put("keyword", keyword);
		
		return mybatis.selectOne("friendDAO.allcount",map);
	}


	@Override
	public List<StoreListVO> selectStore(PagingVO pvo, String searchType, String keyword) {
		HashMap map = new HashMap();
		map.put("searchType",searchType);
		map.put("keyword",keyword);
		map.put("start",pvo.getStart());
		map.put("end",pvo.getEnd());
		
		return mybatis.selectList("friendDAO.selectStorelist",map);
	}


	@Override
	public List<BoardVO> nexalist(PagingVO pvo, String searchType, String keyword) {
		HashMap map = new HashMap();
		map.put("start", pvo.getStart());
		map.put("end", pvo.getEnd());
		return mybatis.selectList("friendDAO.nexalist",map);
	}

}
