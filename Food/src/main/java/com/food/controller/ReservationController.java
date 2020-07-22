package com.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.domain.ReservationVO;
import com.food.service.ReservationService;

@Controller
public class ReservationController {

	@Autowired
	private ReservationService reservservice;
	
	
	@RequestMapping("reservInsert.do")
	public void reservInsert(ReservationVO vo) {
		System.out.println("reservInsert 컨트롤러 도착");
		System.out.println("id:"+vo.getM_id());
		System.out.println("visit date:"+vo.getR_visit_date());
		System.out.println("menu:"+vo.getR_menu());
		System.out.println("menu cnt:"+vo.getR_menu_count());
		reservservice.reservInsert(vo);
		
	}
	
	
}
