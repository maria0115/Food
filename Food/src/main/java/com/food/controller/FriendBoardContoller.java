package com.food.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.domain.FriendBoardVO;
import com.food.service.FriendBoardService;



@Controller
@RequestMapping("/friendBoard")
public class FriendBoardContoller {
	
	
	@Autowired
	private FriendBoardService friendBoardService;
	
	
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		return "/friendBoard/"+step;
	}
	
	//밥친구게시판 글 등록하기 
	@RequestMapping("/friendsave.do")
	public String insertFriends(FriendBoardVO vo, HttpServletRequest requset) {
		int result;
		
		String addr = (String) requset.getParameter("addr1");
		addr += (String) requset.getParameter("addr2");
		System.out.println("주소"+addr);
		vo.setF_addr(addr);
		result  = friendBoardService.friendsave(vo);
		if(result == 0 ) {
			return "index/error";
		}else {
			return "redirect:../index/mealFriends.do";
		}
		
	}
	
	
	
	
}
