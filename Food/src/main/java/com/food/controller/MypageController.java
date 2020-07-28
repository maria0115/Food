package com.food.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.service.boardService;

@Controller
public class MypageController {

	
	
		@Autowired
		private boardService boardService;
		
		@RequestMapping("mypage.do")
		public String modify(HttpSession session,BoardVO vo, MemberVO mvo,Model model) {
	
			mvo.setM_id((String)session.getAttribute("user_id"));
			List<BoardVO> a = boardService.searchboard(mvo);
			
			System.out.println("asize:"+a.size());
			model.addAttribute("boardlist",a);
			
		
			
			return "index/mypage";
		}

}
