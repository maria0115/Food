package com.food.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.service.MainService;

@Controller
@RequestMapping("index/")
public class OtherMenusController {

	@Autowired
	MainService service;
	
	@RequestMapping("choiceMenu.do")
	public ModelAndView othermenulist(HttpServletRequest request, HttpServletResponse response,HttpSession session) {
		System.out.println("choiceMenu 들어옴");
		System.out.println(session.getAttribute("user_id"));
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/choiceMenu");
		return mv;
		
	}

}
