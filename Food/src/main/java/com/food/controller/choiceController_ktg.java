package com.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.domain.ChoiceMenuVO;
import com.food.service.ChoiceService;


@Controller
public class choiceController_ktg {

	@Autowired
	private ChoiceService Cservice;
	
	@RequestMapping("/choiceMenu.do")
	public void getChoiceList(ChoiceMenuVO vo , Model model) {
		
		model.addAttribute("ChoiceList",Cservice.getChoiceList(vo));

	}
	
}
