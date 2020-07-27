package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.MainDAO;
import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;

@Service("MainService")
public class MainServiceImpl implements MainService{
	
	@Autowired
	private MainDAO dao;

	@Override
	public void mainpagetag() {
		
		
	}

	@Override
	public MemberVO othermenulist(String m_id) {
		MemberVO result = dao.othermenulist(m_id);
		return result;
	}

	@Override
	public List<ReservationVO> otherrecomandlist(String[] othermost) {
		
		return dao.otherrecomandlist(othermost);
	}

	@Override
	public List<ProductVO> randomlist(String category) {
		
		return dao.randomlist(category);
	}

}
