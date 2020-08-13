package com.food.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;
import com.food.service.MemberService;
import com.food.service.ReservationService;
import com.food.service.boardService;

@Controller
public class MypageController {

	
	
	
		@Autowired
		private ReservationService ReservationService;
		
		@Autowired
		private boardService boardService;
		
		
		@Autowired
		private MemberService memberService;
		
		
		@RequestMapping("/mywrite.do")
		public String write(HttpSession session,BoardVO vo, MemberVO mvo,Model model) {
			mvo.setM_id((String)session.getAttribute("user_id"));
			MemberVO member = memberService.checkId(mvo);
			List<BoardVO> a = boardService.searchboard(mvo);
			
			System.out.println("asize:"+a.size());
			model.addAttribute("boardlist",a);
			model.addAttribute("member",member);
			return "mypage/mywrite";
		}
		
		
		@RequestMapping("/mypage.do")
		public String link(HttpSession session,BoardVO vo, MemberVO mvo,Model model) {
			mvo.setM_id((String)session.getAttribute("user_id"));
			MemberVO member = memberService.checkId(mvo);
			List<BoardVO> a = boardService.searchboard(mvo);
			
			System.out.println("asize:"+a.size());
			model.addAttribute("boardlist",a);
			model.addAttribute("member",member);
			return "mypage/mypage";
		}
		
		
		
		
		@RequestMapping("/mypageform.do")
		public String modify(HttpSession session,BoardVO vo, MemberVO mvo,Model model) {
	
			
			mvo.setM_id((String)session.getAttribute("user_id"));
			MemberVO member = memberService.checkId(mvo);
			List<BoardVO> a = boardService.searchboard(mvo);
			
			System.out.println("asize:"+a.size());
			model.addAttribute("boardlist",a);
			model.addAttribute("member",member);
		
			
			return "mypage/mypageform";
		}
		
		
		@RequestMapping("/foodcalorie.do")
		public String foodcalorie() {
		
			
			return "mypage/imagecalorie";
		}
		
		
		
		@RequestMapping("/myreservation.do")
		public String myreservation(PagingVO vo,HttpSession session,MemberVO mvo,Model model
				, @RequestParam(value="nowPage", required=false) String nowPage
				, @RequestParam(value="cntPerPage", required=false) String cntPerPage
				){
			System.out.println("pagingReservation 컨트롤러");
		
			String userid = (String)session.getAttribute("user_id");
			
			//System.out.println("total :"+total);
			if (nowPage == null && cntPerPage == null) {
				nowPage = "1";
				cntPerPage = "8";
			} else if (nowPage == null) {
				nowPage = "1";
			} else if (cntPerPage == null) {
				cntPerPage = "5";
			}
			vo.setM_id(userid);
			int total = ReservationService.countReserv(vo);
			vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
			vo.setM_id(userid);
			mvo.setM_id(userid);
			System.out.println(vo.getM_id());
			MemberVO member = memberService.checkId(mvo);
			model.addAttribute("paging", vo);
			model.addAttribute("result",ReservationService.selectReservation(vo));
			model.addAttribute("member",member);
		
			
			return "mypage/myreservation";
		}
		
		
		@RequestMapping(value="/calendar.do",method = RequestMethod.POST)
		@ResponseBody
		public Map calendar(@RequestParam(value="r_master")String r_master) {
			System.out.println("캘린더 컨트롤러 들어옴 ");
			Map map = new HashMap();
			List<ReservationVO> list = ReservationService.getreser(r_master);
			map.put("list", list);
			
			return map;
		}
		
		@RequestMapping("mypage/reservation.do")
		public String reservation(ReservationVO vo, Model model) {
				ReservationVO vo2 =  ReservationService.reservationDetail(vo);
				String menu = vo2.getR_menu();
				String count = vo2.getR_menu_count();
				String[] menulist = menu.split("/");
				String[] countlist = count.split("/");
				String result = "";
				for(int i=0; i<menulist.length; i++) {
					String temp = menulist[i]+"     "+countlist[i]+"개"+"\n";
					result += temp;
				};
				
				
				vo2.setR_menu(result);
				model.addAttribute("user",vo2);
			
			return "mypage/reservation";
		}
		
		
	
		
}
