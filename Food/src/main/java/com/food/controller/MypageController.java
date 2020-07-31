package com.food.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.ReservationVO;
import com.food.service.MemberService;
import com.food.service.ReservationService;
import com.food.service.boardService;

@Controller
@RequestMapping
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
		public String myreservation(ReservationVO rvo,HttpSession session,MemberVO mvo,Model model) {
			mvo.setM_id((String)session.getAttribute("user_id"));
			MemberVO member = memberService.checkId(mvo);
			List<ReservationVO> a = ReservationService.selectReservation(mvo);
			 
			System.out.println("asize:"+a.size());
			model.addAttribute("result",a);
			model.addAttribute("member",member);
		
			
			return "mypage/myreservation";
		}
	
		
}
