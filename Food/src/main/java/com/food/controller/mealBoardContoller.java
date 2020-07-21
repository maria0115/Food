package com.food.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.domain.FriendBoardVO;
import com.food.service.FriendBoardService;


@Controller
@RequestMapping("/mealBoard")
public class mealBoardContoller {

	
	@Autowired
	FriendBoardService friendBoardservice;
	
	//페이지전환
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		return "mealBoard/"+step;
	}
	
	//밥친구 게시판 글 등록하기 
	@RequestMapping("/friendsave.do")
	public String friendsave(FriendBoardVO vo , HttpServletRequest request) {
		int result;
		String addr1 = (String) request.getParameter("addr1");
		String addr2 = (String) request.getParameter("addr2");
		String addr = addr1+addr2;
		
		vo.setF_addr(addr);
		
		result = friendBoardservice.friendsave(vo);
		if(result==0) {
			return "../index/error";
		}
		return "redirect:../index/mealFriends.do";
	}
	
	//밥친구 게시판 글 상세보기
	@RequestMapping("/mealboardView.do")
	public void mealboardView(FriendBoardVO vo, Model model) {
		model.addAttribute("friend",friendBoardservice.mealboardView(vo));
	}
	
	//밥친구 게시판 글 수정하기 페이지
	@RequestMapping("/mealFriendsmodify.do")
	public void mealFriendsmodify(FriendBoardVO vo, Model model) {
		model.addAttribute("friend",friendBoardservice.mealboardView(vo));
	}
	
}
