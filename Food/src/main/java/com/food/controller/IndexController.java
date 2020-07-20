package com.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.service.FriendBoardService;

@Controller
@RequestMapping("index/")
public class IndexController {
	
	@Autowired
	FriendBoardService friendBoardService;
	
	@RequestMapping("{step}.do")
	public String page(@PathVariable String step) {
		System.out.println("여기로");
		return "index/"+step;
	}
	
	@RequestMapping("mealFriends.do")
	public String mealFriends(Model model) {
		
		model.addAttribute("friendlist",friendBoardService.getmealFriends());
		return "index/mealFriends";
	}
	
	

}
