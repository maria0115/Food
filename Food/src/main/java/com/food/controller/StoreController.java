package com.food.controller;



import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
import com.food.domain.StoreListVO;
import com.food.service.StoreService;
import com.food.service.boardService;

import javafx.application.Application;


@Controller
@RequestMapping("/store")
public class StoreController {
	
	@Autowired
	StoreService storeService;
	
	@Autowired
	boardService boardService;
	
	
	// 상품 상세보기
	@RequestMapping("/storeDetails.do")
	public ModelAndView getSelectStore(StoreListVO vo,BoardVO vo2,PagingVO vo3,HttpServletRequest request
			, @RequestParam(value="nowPage", required=false)String nowPage
			, @RequestParam(value="cntPerPage", required=false)String cntPerPage) {
		
		
		System.out.println("스토어셀렉 controller 도착");
		System.out.println("------------------******************"+vo.getS_brand_name());
		 //상세보기 페이지 안에 상품별 리뷰리스트 페이징 처리를 위한 상세보기전체글 갯수
		if (nowPage == null && cntPerPage == null) {
			nowPage = "1";
			cntPerPage = "10";
		} else if (nowPage == null) {
			nowPage = "1";
		} else if (cntPerPage == null) { 
			cntPerPage = "10";
		}
		
		//매장별 상세보기 
		StoreListVO list = storeService.storeDetail(vo);
		
		//리뷰가져오기
		
		vo2.setBoardType(2);
		int total = boardService.countBoard(vo2);
		vo3 = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
		vo.setNowPage("1");
		
		List<BoardVO> listVO = storeService.reviewSelect(vo);
		int reviewPageCnt = listVO.size();
		if(reviewPageCnt != 0) {
			reviewPageCnt=reviewPageCnt/5;
		}
		
		
		System.out.println("스토어셀렉mapper 갔다옴");
		System.out.println(list+"!!");
		System.out.println(listVO+"=============================");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("store/storeDetails");
		mv.addObject("list",list);
		mv.addObject("listVO",listVO);
		mv.addObject("paging",vo3);
		mv.addObject("reviewPageCnt",reviewPageCnt);
		
		return mv;
	}
	
	// 리뷰등록
	@RequestMapping(value ="/reviewInsert.do")
	public String reviewInsert(BoardVO vo ,HttpServletRequest request) throws UnsupportedEncodingException {
		System.out.println("리뷰인설트 controller 도착");
		String name = request.getParameter("name");
		System.out.println(name);
		name = URLEncoder.encode(name,"UTF-8");
		int result;
		vo.setBoardType(2);
		vo.setSeq("review_r_no");
		System.out.println("======================"+vo.getS_brand_name());
		System.out.println("======================"+vo.getB_content());
		System.out.println("======================"+vo.getTitle());
		System.out.println("======================"+vo.getUserId());
		System.out.println("======================"+vo.getV_fileName());
		System.out.println("======================"+vo.getV_fileSize());
		result = boardService.insertBoard(vo);
		System.out.println("ddd");
		if(result==0) {
			return "../index/error";
		}
		return "redirect:/store/storeDetails.do?s_brand_name="+name;
	}
//	
//	@RequestMapping("/storeDetails.do")
//	public ModelAndView reviewSelect(StoreListVO vo){
//		
//		storeService.reviewSelect(vo);
//		ModelAndView mv = new ModelAndView();
//
//		return mv;
//		
//		//리뷰가져오기 
//		
//		
//	}
	

	
	
	
	
	
	
	
//	@RequestMapping("/store.do")
//	public void getBoardList(StoreListVO vo, Model model) {
//		System.out.println("컨트롤러요");
//		
//		model.addAttribute("storeList",storeService.getStoreList(vo));
//		// ViewResolver를 지정하지 않으면 아래처럼 페이지명 지정
//		// return "views/getBoardList.jsp"; // View 이름 리턴
//		System.out.println("컨트롤러2");
//		
//	}
	
}
