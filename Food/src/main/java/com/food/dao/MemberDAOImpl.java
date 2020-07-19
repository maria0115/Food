package com.food.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.MemberVO;

@Repository("memberdao")
public class MemberDAOImpl  implements MemberDAO{
	@Autowired
	private SqlSessionTemplate mybatis;


	@Override
	public void insertMember(MemberVO vo) {
		mybatis.insert("memberDAO.insertMember",vo);
		
	}


	@Override
	public MemberVO userSingIn(MemberVO vo) {
		System.out.println("로그인옴");
		return mybatis.selectOne("memberDAO.selectMember",vo);
	}


	@Override
	public MemberVO checkId(MemberVO vo) {
		return mybatis.selectOne("memberDAO.selectID",vo);
	}
	

}
