package com.food.controller;


import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.service.FriendBoardService;
import com.food.service.boardService;


@Controller
@RequestMapping("/mealBoard")
public class MealBoardContoller {
	
	int curCount=0; //리스트에서 현재 검색된 데이터 숫자를 저장할 변수 선언
	int allcount; //리스트에서 모든 데이터의 숫자를 저장한 변수 선언
	
	
	@Autowired
	private FriendBoardService friendBoardservice;
	@Autowired
	private boardService boardService;
	
	
	//페이지전환
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		return "mealBoard/"+step;
	}
	
	//밥친구 게시판 글 등록하기 
	@RequestMapping("/friendsave.do")
	public String friendsave(BoardVO vo , HttpServletRequest request, HttpSession session) {
		
		int result;
		System.out.println(vo.getF_date());
		String f_date = vo.getF_date();
		f_date = f_date.replace(",", "-");
		vo.setBoardType(3);
		vo.setSeq("friend_f_no");
		vo.setF_date(f_date);
		
		session.setAttribute("board", vo.getTitle());
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

	//참가하기 버튼눌렀을때
	@RequestMapping("/mealjoin.do")
	@ResponseBody
	public int mealjoin(BoardVO vo , Model model,@RequestParam(value="f_userId")String f_userId,
			@RequestParam(value="b_no")int b_no) {
		int result;
		vo.setBoardType(3);
		vo.setF_userId(f_userId);
		vo.setB_no(b_no);
		result = boardService.mealjoin(vo);
			
				
			return result;
	}
	
	//취소하기 버튼 눌렀을때
	@RequestMapping(value="/cancel.do",method=RequestMethod.POST)
	@ResponseBody
	public int mealcancel(BoardVO vo, Model model,@RequestParam("f_userId")String f_userId,
			@RequestParam("b_no")int b_no,@RequestParam("userId")String userId ) {
		int result = 0;
		System.out.println("취소버튼 컨트롤러 확인");
		System.out.println(f_userId);
		System.out.println(userId);
		f_userId = f_userId.replace(userId,"");
		System.out.println(f_userId);
		vo.setBoardType(3);
		vo.setF_userId(f_userId);
		vo.setB_no(b_no);
		if(vo.getF_cnt()!= 0) {
			result = boardService.mealcancel(vo);
		}
		
		
		
		return result;
	}
	
	
	
	
	







}
	


	
	
	
	

