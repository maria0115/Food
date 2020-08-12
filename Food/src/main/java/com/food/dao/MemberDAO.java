package com.food.dao;

import java.util.HashMap;
import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ProductVO;
import com.food.domain.StoreListVO;

public interface MemberDAO {
	public String find_id(String m_email);
	
	public MemberVO findPassword(MemberVO vo);
	
	public MemberVO checkEmail(MemberVO vo);
	
	public HashMap userSingIn(MemberVO vo);

	public MemberVO checkId(MemberVO vo);
	
	public void insertMember(MemberVO vo);
	
	public List<ProductVO> search(String value);
	
	public void deleteMember(MemberVO vo);
	
	public void updateMember(MemberVO vo);
	
	public int shopmember(MemberVO vo);
	
	public List<BoardVO> myreview(MemberVO vo,PagingVO pvo);
	
	public int countBoard(MemberVO vo);
	
	public MemberVO getshopuser(MemberVO vo);
	
//	//점주 매장 정보 수정
//	public int updatestore(StoreListVO vo);
//	public int updateproduct(ProductVO vo); 
}
