package com.food.service;

import java.util.List;

import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;

public interface MainService {
	
	public void mainpagetag();
	
	public MemberVO othermenulist(String m_id);
	
	public List<ReservationVO> otherrecomandlist(String[] othermost);

	public List<ProductVO> randomlist(String category);
}
