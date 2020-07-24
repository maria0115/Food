package com.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.MainDAO;
import com.food.domain.MemberVO;

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

}
