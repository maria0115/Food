package com.food.controller;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
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
	// 예약 상세 페이지 예약 취소 버튼
	@RequestMapping(value = "index/reservDelete.do")
	public String reservDelete(ReservationVO vo, @RequestParam(value="r_number")String temp_number
			, @RequestParam(value="m_id")String m_id) {
		System.out.println("reservDelete 컨트롤러 도착");
		System.out.println("m_id : "+m_id);
		int r_number = Integer.parseInt(temp_number);
		vo.setR_number(r_number);
		vo.setM_id(m_id);
		ReservationService.deleteReservation(vo);
		return "redirect:myMenu.do?m_id="+m_id;
	}
	
	
	// 예약 페이지에서 등록
	@RequestMapping("reservInsert.do")
	@ResponseBody
	public int reservInsert(ReservationVO vo) {
		System.out.println("reservInsert 컨트롤러 도착");
		System.out.println("id:"+vo.getM_id());
		System.out.println("visit date:"+vo.getR_visit_date());
		System.out.println("menu:"+vo.getR_menu());
		System.out.println("count:"+vo.getR_menu_count());
		System.out.println("note:"+vo.getR_note());
		int result = ReservationService.insertReservation(vo);
		return result;
	}
	
	// mymenu 페이지에서 예약 내역 확인
//	@RequestMapping(value = "index/myMenu.do", method = RequestMethod.GET)
//	public ModelAndView reservSelect(ReservationVO vo,HttpServletRequest httpServletRequest) {
//		System.out.println("reservSelect 컨트롤러 도착");
//		System.out.println("requestGET :"+RequestMethod.GET);
//		String m_id = httpServletRequest.getParameter("m_id");
//	    System.out.println("m_id : " + m_id);
//	    vo.setM_id(m_id);
//	    List<ReservationVO> list = ReservationService.selectReservation(vo);
//		System.out.println("컨트롤 갔다옴");
//		ModelAndView mv = new ModelAndView();
//		mv.setViewName("index/myMenu");
//		mv.addObject("list",list);
//		return mv;
//	}
	
	// 예약 내역 상세보기(클릭)
	@RequestMapping(value = "index/myMenuDetail.do", method = RequestMethod.GET)
	@ResponseBody
	public ReservationVO myMenuDetail(ReservationVO vo,HttpServletRequest httpServletRequest) throws ParseException {
		System.out.println("myMenuDetail controller 도착");
		System.out.println("requestGET :"+RequestMethod.GET);
		String data = httpServletRequest.getParameter("r_number");
		int r_number = Integer.parseInt(data);
		System.out.println("r_number : " + r_number);
		vo.setR_number(r_number);
		ReservationVO list = ReservationService.reservationDetail(vo);
		System.out.println("menu :"+list.getR_menu());
		System.out.println("visit_date :"+list.getR_visit_date());
		System.out.println("time :"+list.getTime());
		
		SimpleDateFormat format1 = new SimpleDateFormat ( "yy/MM/dd HH:mm");
		Calendar time = Calendar.getInstance();
		// 시스템 현재 시간
		String format_time1 = format1.format(time.getTime());
		System.out.println("시스템 시간 :"+format_time1);
		
		if (format_time1.compareTo(list.getTime()) > 0) {
	        System.out.println("예약 취소 못해");
	        // 반환을 0으로 ajax에서 0일 경우 버튼 삭제
	        list.setR_state(0);
	    } else {
	        System.out.println("예약 취소 가능");
	        // 반환을 1로 
	        list.setR_state(1);
	    }
		
		return list;
	}
	
	// myMenu 페이징
	@RequestMapping(value = "index/myMenu.do", method = RequestMethod.GET)
	public String pagingReservation(PagingVO vo,ReservationVO rvo, Model model
			, @RequestParam(value="nowPage", required=false)String nowPage
			, @RequestParam(value="cntPerPage", required=false)String cntPerPage
			, HttpServletRequest httpServletRequest) {
		System.out.println("pagingReservation 컨트롤러");
		System.out.println("m_id1"+vo.getM_id());
		String m_id = httpServletRequest.getParameter("m_id");
		System.out.println("m_id : " + m_id);
		vo.setM_id(m_id);
		int total = ReservationService.countReserv(vo);
		System.out.println("페이지수 :"+total);
		if (nowPage == null && cntPerPage == null) {
			nowPage = "1";
			cntPerPage = "8";
		} else if (nowPage == null) {
			nowPage = "1";
		} else if (cntPerPage == null) {
			cntPerPage = "5";
		}
		vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
		vo.setM_id(m_id);
		System.out.println("vo m_id"+vo.getM_id());
		model.addAttribute("paging", vo);
		model.addAttribute("list", ReservationService.selectBoard(vo));
		return "index/myMenu";
	}
	
}
