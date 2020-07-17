package com.food.service;

import java.util.List;

import com.food.domain.ChoiceMenuVO;

public interface ChoiceService {

	List<ChoiceMenuVO> getChoiceList(ChoiceMenuVO vo);
	

}
