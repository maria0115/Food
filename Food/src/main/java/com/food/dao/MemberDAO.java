package com.food.dao;

import com.food.domain.MemberVO;

public interface MemberDAO {
	public String find_id(String m_email);
	
	public MemberVO findPassword(MemberVO vo);
	
	public MemberVO checkEmail(MemberVO vo);
	
	public MemberVO userSingIn(MemberVO vo);

	public MemberVO checkId(MemberVO vo);
	
	public void insertMember(MemberVO vo);
}
