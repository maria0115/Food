package com.food.dao;

import com.food.domain.MemberVO;

public interface MemberDAO {

	

	public int idCheck(String id);//중복확인
	
	public void insertMember(MemberVO vo);
}
