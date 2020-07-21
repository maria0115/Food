package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.BlackListVO;

import com.food.domain.PagingVO;

@Repository("blackDAO") 
public class BlackDAOImpl implements BlackDAO {

	@Autowired
	private SqlSessionTemplate mybatis;
	
	@Override
	public List<BlackListVO> selectBoard(PagingVO pvo, String searchType, String keyword) {
		System.out.println("==>BlackMapper selectBoard() 호출");
		
		HashMap map = new HashMap();
		map.put("searchType",searchType);
		map.put("keyword",keyword);
		map.put("start",pvo.getStart());
		map.put("end",pvo.getEnd());
		return mybatis.selectList("blackDAO.selectBoard",map);
	}

	@Override
	public int searchCount(String searchType, String keyword) {
		System.out.println("==>BlackMapper searchCount() 호출");
		
		HashMap map = new HashMap();
		map.put("searchType",searchType);
		map.put("keyword",keyword);
	
		return mybatis.selectOne("blackDAO.searchCount",map);
	}

	@Override
	public List<BlackListVO> listAll() {

	System.out.println("==>BlackMapper listAll() 호출");
	return mybatis.selectList("blackDAO.listAll");
	}

	@Override
	public int allCount() {
		System.out.println("==>BlackMapper allCount() 호출");
		return mybatis.selectOne("blackDAO.allCount");
	}

	@Override
	public int blackDelete(BlackListVO vo) {
		System.out.println("==>BlackMapper blackDelete() 호출");
		return mybatis.delete("blackDAO.blackDelete",vo);
	}

}
