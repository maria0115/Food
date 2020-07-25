package com.food.service;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.food.domain.MemberVO;
import com.food.domain.ProductVO;

public interface MemberService {
	//비밀번호찾기
	public MemberVO findPassword(MemberVO vo);
	//이메일 중복확인
	public MemberVO checkEmail(MemberVO vo);
	//아이디 찾기
	public String find_id(HttpServletResponse response, String email)throws Exception;
	//아이디 중복확인
	public MemberVO checkId(MemberVO vo);
	//회원가입하기
	public void insertMember(MemberVO vo);
	// 로그인 
	public MemberVO userSignIn(MemberVO vo);
	
	public List<ProductVO> search(String value);
	//회원 탈퇴
	public void deleteMember(MemberVO vo);
	//회원정보 수정하기
	public void updateMember(MemberVO vo);
	
	
}
