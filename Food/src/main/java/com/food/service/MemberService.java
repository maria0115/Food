package com.food.service;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ProductVO;
import com.food.domain.StoreListVO;

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
	public HashMap userSignIn(MemberVO vo);
	
	public List<ProductVO> search(String value);
	//회원 탈퇴
	public void deleteMember(MemberVO vo);
	//회원정보 수정하기
	public void updateMember(MemberVO vo);
	//기업회원 회원 가입 
	public int shopmember(MemberVO vo);
	//매장별 리뷰가져오기
	public List<BoardVO> myreview(MemberVO vo,PagingVO pvo);
	//매장별 리뷰갯수
	public int countBoard(MemberVO vo);
	//점주 정보가져오기 
	public MemberVO getshopuser(MemberVO vo);
	//점주 매장 정보 수정
	public int updatestore(StoreListVO vo);
	public int updateproduct(ProductVO vo); 
	
	
	
}
