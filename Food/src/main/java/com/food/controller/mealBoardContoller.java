package com.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.domain.FriendBoardVO;
import com.food.service.FriendBoardService;


@Controller
@RequestMapping("/mealBoard")
public class mealBoardContoller {

	
	@Autowired
	FriendBoardService friendBoardservice;
	
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		return "/mealBoard/"+step;
	}
	
	@RequestMapping("/friendsave.do")
	public String friendsave(FriendBoardVO vo) {
		int result;
		result = friendBoardservice.friendsave(vo);
		if(result==0) {
			return "../index/error";
		}
		return "redirect:../index/mealFriends";
	}
	
}
