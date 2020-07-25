package com.food.controller;



import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.StoreListVO;
import com.food.service.StoreService;
import com.food.service.boardService;


@Controller
@RequestMapping("/store")
public class StoreController {
	
	@Autowired
	StoreService storeService;
	
	@Autowired
	boardService boardService;
	
	
	// 상품 상세보기
	@RequestMapping("/storeDetails.do")
	public ModelAndView getSelectStore(StoreListVO vo) {
		
//		System.out.println("스토어셀렉 controller 도착");
//		System.out.println("------------------******************"+vo.getS_brand_name());
		
		StoreListVO list = storeService.storeDetail(vo);
//		System.out.println("스토어셀렉mapper 갔다옴");
//		System.out.println(list+"!!");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("store/storeDetails");
		mv.addObject("list",list);
		
		return mv;
	}
	
	@RequestMapping("/reviewInsert.do")
	public String reviewInsert(BoardVO vo) {
		System.out.println("리뷰인설트 controller 도착");
		int result;
		vo.setBoardType(2);
		vo.setSeq("review_r_no");
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
		return "redirect:/store/storeDetails";
	}
	
	

	
	
	
	
	
	
	
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
