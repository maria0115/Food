package com.food.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.domain.BoardVO;
import com.food.domain.FriendBoardVO;
import com.food.service.FriendBoardService;
import com.food.service.boardService;


@Controller
@RequestMapping("/mealBoard")
public class MealBoardContoller {

	
	@Autowired
	FriendBoardService friendBoardservice;
	@Autowired
	boardService boardService;
	
	
	//페이지전환
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		return "mealBoard/"+step;
	}
	
	//밥친구 게시판 글 등록하기 
	@RequestMapping("/friendsave.do")
	public String friendsave(BoardVO vo , HttpServletRequest request) {
		
		int result;
		vo.setBoardType(3);
		vo.setSeq("friend_f_no");
		System.out.println(vo.getF_addr1());
		System.out.println(vo.getF_addr2());
		result = boardService.insertBoard(vo);
		if(result==0) {
			return "../index/error";
		}
		return "redirect:../index/mealFriends.do";
	}
	
	//밥친구 게시판 글 상세보기
	@RequestMapping("/mealboardView.do")
	public void mealboardView(BoardVO vo, Model model) {
		vo.setBoardType(3);
		model.addAttribute("board",boardService.boardView(vo));
	}
	
	//밥친구 게시판 글 수정하기 페이지보여주기
	@RequestMapping("/mealFriendsmodify.do")
	public void mealFriendsmodify(BoardVO vo, Model model) {
		vo.setBoardType(3);
		model.addAttribute("board",boardService.boardView(vo));
	}
	
	//밥친구 게시판 글 수정
	@RequestMapping("/friendmodify.do")
	public String friendmodify(BoardVO vo, HttpServletRequest request) {
		int result;
		vo.setBoardType(3);
		result = boardService.updateBoard(vo);
		if(result==0) {
			return "index/error";
		}
		return "redirect:../mealBoard/mealboardView.do?b_no="+vo.getB_no();
		
		
	}
	
	//밥친구 게시판 글 삭제하기 
	@RequestMapping("/friendsdelete.do")
	public String friendsdelete(BoardVO vo) {
		int result;
		vo.setBoardType(3);
		result = boardService.deleteBoard(vo);
		if(result==0) {
			return "index/error";
		}
		return "redirect:../index/mealFriends.do";
	}
	
}
