package com.food.service;

import com.food.domain.MemberVO;

public interface MemberService {

	public MemberVO checkId(MemberVO vo);
	
	public void insertMember(MemberVO vo);
	
	public MemberVO userSignIn(MemberVO vo);
}
