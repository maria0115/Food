package com.food.controller;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
	int curCount=0;
	int allCount;
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
			, HttpServletRequest httpServletRequest
			, String searchType, String keyword, String searchClick
			, HttpSession session) {
		
		String search = "";//검색을 했는지 여부를 확인할 변수 선언
		int total;
		
		String m_id = (String) session.getAttribute("user_id");
		System.out.println("session m_id :"+m_id);
		System.out.println("pagingReservation 컨트롤러");
		System.out.println("m_id1 :"+vo.getM_id());
//		String m_id = httpServletRequest.getParameter("m_id");
		System.out.println("m_id : " + m_id);
		vo.setM_id(m_id);
		
		if(searchType!=null) {
			if(searchType.equals("r_store_name")==true) {
				searchType="r_store_name";
			}else if(searchType.equals("r_menu")==true) {
				searchType="r_menu";
			}else if(searchType.equals("r_visit_date")==true) {
				searchType="r_visit_date";
			}
		}
		
		search = searchType; //검색할때 선택한 검색타입을 받아온다
		// 검색을 안했을 경우
		allCount = ReservationService.countReserv(vo);
		System.out.println("검색 안했을때 : "+allCount);
		
		if(search==null || search.equals("")) {//검색을 하지 않았을 경우
			System.out.println("검색 안하면 들어오는 if");
			total=allCount; //total에 데이터의 총 갯수를 저장
			curCount=allCount; //검색을 하지 않았기 때문에 현재 검색한 데이터의 갯수를 저장하는 curCount 변수에 데이터의 총 갯수를 저장
			searchType =null;  //mapper에서 오류를 방지하기위헤 searchType에 null값을 저장
			keyword=null;	   //mapper에서 오류를 방지하기위헤 keyword에 null값을 저장
		}else{//검색을 했을 경우
			System.out.println("검색 하면 들어오는 else");
			//검색한 데이터의 갯수를 curCount에 저장
			System.out.println(searchType);
			System.out.println(keyword);
			curCount =ReservationService.searchCount(m_id,searchType,keyword);
			System.out.println("검색 했을때 : "+curCount);
			//검색버튼을 클릭했을 경우 페이지를 1페이지부터 보여준다
			if(searchClick.equals("Y")==true) {
				nowPage="1";
			}
			
			//총 갯수에 현재 검색한 데이터의 갯수를 저장
			total=curCount;
		}
		
		
		
		

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
		model.addAttribute("list", ReservationService.selectBoard(vo,searchType,keyword));
		//모델에 "searchType" 검색타입 추가
		model.addAttribute("searchType", searchType);
		//모델에 "keyword" 검색키워드 추가
		model.addAttribute("keyword", keyword);
		
		return "index/myMenu";
	}
	
}
