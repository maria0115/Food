package com.food.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.MemberVO;

@Repository("memberdao")
public class MemberDAOImpl  implements MemberDAO{
	@Autowired
	private SqlSessionTemplate mybatis;


	public int idCheck(String id) {
		int cnt = mybatis.selectOne("memberDAO.idCheck", id);
		return cnt;
	}


	@Override
	public void insertMember(MemberVO vo) {
		mybatis.insert("memberDAO.insertMember",vo);
		
	}
	

}
