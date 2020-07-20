package com.food.service;

import javax.servlet.http.HttpServletResponse;

import com.food.domain.MemberVO;

public interface MemberService {

	public MemberVO findPassword(MemberVO vo);
	
	public MemberVO checkEmail(MemberVO vo);
	
	public String find_id(HttpServletResponse response, String email)throws Exception;
	
	public MemberVO checkId(MemberVO vo);
	
	public void insertMember(MemberVO vo);
	
	public MemberVO userSignIn(MemberVO vo);
}
