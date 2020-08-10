package com.food.dao;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;

public interface MainDAO {
	public MemberVO othermenulist(String m_id);

	public List<ReservationVO> otherrecomandlist(String[] othermost);

	public List<ProductVO> randomlist(String category);
	
	public List<BoardVO> nexalist();
	
	public List<BoardVO> nexalistsearch(String searchType,String keyword);
	
	public void nexadel(String b_no);
}
