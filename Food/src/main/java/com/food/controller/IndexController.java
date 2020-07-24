package com.food.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
import com.food.service.FriendBoardService;
import com.food.service.boardService;

@Controller
@RequestMapping("index/")
public class IndexController {
	
	@Autowired
	FriendBoardService friendBoardService;
	
	@Autowired
	boardService boardService;
	
	@RequestMapping("{step}.do")
	public String page(@PathVariable String step) {
		System.out.println("여기로");
		return "index/"+step;
	}
	
	//밥친구 게시판 글 목록
	@RequestMapping("mealFriends.do")
	public String mealFriends(Model model,PagingVO vo ,BoardVO bvo, HttpServletRequest request
			, @RequestParam(value="nowPage", required=false)String nowPage
			, @RequestParam(value="cntPerPage", required=false)String cntPerPage) {
		
		
		int total = boardService.countBoard(bvo); //상세보기 페이지 안에 상품별 리뷰리스트 페이징 처리를 위한 상세보기전체글 갯수
		if (nowPage == null && cntPerPage == null) {
			nowPage = "1";
			cntPerPage = "10";
		} else if (nowPage == null) {
			nowPage = "1";
		} else if (cntPerPage == null) { 
			cntPerPage = "10";
		}
		bvo.setBoardType(3);
		vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
		model.addAttribute("paging", vo); //페이징처리를 위한  가져온 값 넘기기 
		model.addAttribute("friendlist", boardService.selectBoard(bvo, vo, null, null)); //상품별 리뷰 가져온 목록 model에 저장
		
		return "index/mealFriends";
	}
	
	

}
