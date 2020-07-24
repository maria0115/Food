package com.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.ReservationVO;
import com.food.service.ReservationService;
import com.food.service.boardService;

@Controller
public class ReservationController {

	@Autowired
	private boardService boardService;
	
	
	@RequestMapping("reservInsert.do")
	public void reservInsert(BoardVO vo) {
		System.out.println("reservInsert 컨트롤러 도착");
		vo.setBoardType(5);
		vo.setSeq("NO_RESERVATION_SEQ");
		System.out.println("id:"+vo.getUserId());
		System.out.println("visit date:"+vo.getR_visit_date());
		System.out.println("menu:"+vo.getR_menu());
		boardService.insertBoard(vo);
	}
	
	@RequestMapping("reservSelect")
	public ModelAndView reservSelect(BoardVO vo) {
		System.out.println("reservSelect 컨트롤러 도착");
		vo.setBoardType(5);
		vo.setB_no(1000);
		BoardVO list = boardService.boardView(vo);
		System.out.println("컨트롤 갔다옴");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/myMenu");
		mv.addObject("list",list);
		return mv;
	}
}
