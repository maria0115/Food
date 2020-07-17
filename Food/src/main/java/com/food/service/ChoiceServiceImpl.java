package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.ChoiceDAOImpl;
import com.food.domain.ChoiceMenuVO;




@Service("Cservice")
public class ChoiceServiceImpl implements ChoiceService{
	
	@Autowired
	private ChoiceDAOImpl choiceDAO;

	public List<ChoiceMenuVO> getChoiceList(ChoiceMenuVO vo){
		
		return choiceDAO.getChoiceList(vo);
	}
	
}
