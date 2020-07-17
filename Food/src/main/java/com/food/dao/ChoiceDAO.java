package com.food.dao;

import java.util.List;

import com.food.domain.ChoiceMenuVO;


public interface ChoiceDAO {

	public List<ChoiceMenuVO> getChoiceList(ChoiceMenuVO vo);


}