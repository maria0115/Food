package com.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.ReservationVO;
import com.food.service.ReservationService;
import com.food.service.boardService;

@Controller
public class ReservationController {

	@Autowired
	private ReservationService ReservationService;
	
//	@RequestMapping("reservation.do")
//	public void reservation(ReservationVO vo) {
//		System.out.println("reservation controller");
//		ReservationService.reservation(vo);
//	}
//	
	
	
	
	// 예약 페이지에서 등록
	@RequestMapping("reservInsert.do")
	public void reservInsert(ReservationVO vo) {
		System.out.println("reservInsert 컨트롤러 도착");
		System.out.println("id:"+vo.getM_id());
		System.out.println("visit date:"+vo.getR_visit_date());
		System.out.println("menu:"+vo.getR_menu());
		System.out.println("count:"+vo.getR_menu_count());
		System.out.println("note:"+vo.getR_note());
		ReservationService.insertReservation(vo);
	}
	
	// mymenu 페이지에서 예약 내역 확인
	@RequestMapping("index/myMenu.do")
	public ModelAndView reservSelect(ReservationVO vo) {
		System.out.println("reservSelect 컨트롤러 도착");
		ReservationService.selectReservation(vo);
		System.out.println("컨트롤 갔다옴");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/myMenu");
//		mv.addObject("list",list);
		return mv;
	}
}
