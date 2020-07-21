package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.FriendBoardVO;
import com.food.domain.PagingVO;

@Repository("friendBoarddao")
public class FriendBoardDAOImpl implements FriendBoardDAO{

	@Autowired
	private SqlSessionTemplate mybatis;
	
	//밥친구 게시판 글 등록하기 
	@Override
	public Integer friendsave(FriendBoardVO vo) {
		System.out.println("insertFriends 도착");
		return mybatis.insert("friendDAO.friendsave",vo);
	}

	//밥친구 게시판 글 목록 가져오기 
	@Override
	public List<FriendBoardVO> getmealFriends(PagingVO vo) {
		System.out.println("getmealFriends 도착 ");
		HashMap map = new HashMap();
		map.put("start", vo.getStart());
		map.put("end", vo.getEnd());
		return mybatis.selectList("friendDAO.getmealFriends",map);
	}

	//밥친구 게시판 글 상세보기
	@Override
	public FriendBoardVO mealboardView(FriendBoardVO vo) {
		System.out.println("mealboardView 도착");
		//게시글 선택시 조회수 증가
		mybatis.update("friendDAO.mealboardViewcount",vo);
		return mybatis.selectOne("friendDAO.mealboardView",vo);
	}

	//밥친구 게시판 글 전체수 
	@Override
	public Integer friendBoardcount() {
		System.out.println("friendBoardcount 도착");
		return mybatis.selectOne("friendDAO.friendBoardcount");
	}

}
