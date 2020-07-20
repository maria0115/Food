package com.food.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StoreController {
	@RequestMapping("/stor.do")
	public ModelAndView getChoiceList() {
		
		ModelAndView mv = new ModelAndView();
		System.out.println("하이욧");
		mv.addObject("test","test");
		mv.setViewName("index/main");
		return mv;

	}
}
