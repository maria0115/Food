package com.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
		
	
		@RequestMapping("idCheck.do")
		@ResponseBody 
		public int idCheck(@RequestParam("userId") String id) {
			int cnt=memberService.idCheck(id);
			return cnt;
		}
}
		

