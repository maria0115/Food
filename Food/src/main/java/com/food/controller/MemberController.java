package com.food.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.domain.MemberVO;
import com.food.service.MemberService;

@Controller
public class MemberController {
		@Autowired
		private MemberService memberService;
	
		
		@RequestMapping("singupMember.do")
		public String insertMember(MemberVO vo) {
			memberService.insertMember(vo);
			return "redirect:/singup.do";
		}
		
		//아이디 중복체크
		@ResponseBody
		@RequestMapping(value = "/checkId.do",produces = "application/text; charset=utf-8")
		public String checkId(MemberVO vo) {
			String result = "사용가능한 아이디 입니다.";
			MemberVO checkvo= memberService.checkId(vo);
			System.out.println(checkvo);
			if(checkvo != null) {
				result = "중복된 아이디입니다";
			}
			return result;
		}
	

		 //로그인 구현
		 @ResponseBody
		@RequestMapping(value = "/login.do",produces = "application/text; charset=utf-8")
			public String login(MemberVO vo, HttpSession session) {
				MemberVO new_vo = new MemberVO();
				new_vo =  memberService.userSignIn(vo);
				String result ="";
				if(new_vo != null ) {
					if(new_vo.getM_name() != null) {
						result = "<span class=\"in\">"+new_vo.getM_name()+" 님 환영합니다.";
						session.setAttribute("UserID", new_vo.getM_name());
						session.setAttribute("UserIDInfo", new_vo);
						
					}
				}
				return result;
		 
		 } 
		 //로그아웃 기능 구현
		 @ResponseBody
			@RequestMapping(value="/logout.do")
			public void logout(HttpSession session) {
				session.removeAttribute("UserID");
				session.removeAttribute("UserIDInfo");
			}
			
		 
}
		

