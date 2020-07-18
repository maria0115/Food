package com.food.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("memberdao")
public class MemberDAOImpl  implements MemberDAO{
	@Autowired
	private SqlSessionTemplate mybatis;


	public int idCheck(String id) {
		int cnt = mybatis.selectOne("memberDAO.idCheck", id);
		return cnt;
	}
	

}
