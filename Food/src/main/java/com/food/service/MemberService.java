package com.food.service;

import com.food.domain.MemberVO;

public interface MemberService {

	public int idCheck(String id);
	
	public void insertMember(MemberVO vo);
}
