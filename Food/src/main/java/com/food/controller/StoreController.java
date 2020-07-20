package com.food.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.StoreListVO;
import com.food.service.StoreService;

@Controller
public class StoreController {
	
	@Autowired
	private StoreService storeService;
	
	@RequestMapping("/store.do")
	public ModelAndView getChoiceList(StoreListVO vo) {
		
		System.out.println("storeService controller 도착");
		List<StoreListVO> listVO = storeService.getStoreList(vo);
		System.out.println("mapper 갔다옴");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/store");
		mv.addObject("listVO",listVO);
		return mv;
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
