package com.food.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.FriendBoardVO;

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
	public List<FriendBoardVO> getmealFriends() {
		System.out.println("getmealFriends 도착 ");
		return mybatis.selectList("friendDAO.getmealFriends");
	}

}
