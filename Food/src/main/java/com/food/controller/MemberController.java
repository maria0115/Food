package com.food.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
		@RequestMapping(value = "/checkId.do", produces = "application/text; charset=utf-8")
		public String checkId(MemberVO vo) {
			String result = "아이디 확인";
			MemberVO checkvo = memberService.checkId(vo);
			System.out.println("<<<<<"+checkvo);
			if(checkvo != null) {
				result = "중복된 아이디입니다";
			}
			return result;
		}
	
		//이메일 중복체크
				@ResponseBody
				@RequestMapping(value = "/checkEmail.do", produces = "application/text; charset=utf-8")
				public String checkEmail(MemberVO vo) {
					System.out.println("here>>>>" + vo.getM_email());
					String result2 = "이메일 확인";
					MemberVO checkvo2 = memberService.checkEmail(vo);
					System.out.println(">>>>>>>"+checkvo2);
					if(checkvo2 != null) {
						result2 = "중복된 이메일 입니다";
					}
					return result2;
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
			
	
		 
		// 아이디 찾기
			@RequestMapping(value = "/findid.do", method = RequestMethod.POST)
			public String find_id(HttpServletResponse response, @RequestParam("m_email") String m_email, Model md) throws Exception{
				md.addAttribute("m_id", memberService.find_id(response, m_email));
				return "/index/find_id";
			}
		 
}
		

