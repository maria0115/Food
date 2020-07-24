package com.food.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.ProductVO;
import com.food.domain.StoreListVO;
import com.food.service.StoreService;

@Controller
public class StoreController {
	
	@Autowired
	private StoreService storeService;
	
	
	//Header에서 Store List 클릭했을때
	@RequestMapping("/store.do")
	public ModelAndView getStoreList(StoreListVO vo) {
		
		System.out.println("스토어 controller 도착");
		List<StoreListVO> listVO = storeService.getStoreList(vo);
		System.out.println("스토어mapper 갔다옴");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/store");
		mv.addObject("listVO",listVO);
		return mv;
	}
	
	// 상품 상세보기
	@RequestMapping("/storeDetails.do")
	public ModelAndView getSelectStore(StoreListVO vo) {
		
		System.out.println("스토어셀렉 controller 도착");
		System.out.println("------------------******************"+vo.getS_brand_name());
		
		StoreListVO list = storeService.storeDetail(vo);
		System.out.println("스토어셀렉mapper 갔다옴");
		System.out.println(list+"!!");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/storeDetails");
		mv.addObject("list",list);
		
		return mv;
	}
	
	// 상품 상세보기 menuList 가져오기 

	
	
	
	
	
	
	
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
