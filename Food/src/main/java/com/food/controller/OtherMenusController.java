package com.food.controller;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.controller.maincontroller.Client;
import com.food.domain.MemberVO;
import com.food.service.MainService;

@Controller
@RequestMapping("index/")
public class OtherMenusController {

	@Autowired
	private MainService service;
	
	@RequestMapping("choiceMenu.do")
	public ModelAndView othermenulist(HttpServletRequest request, HttpServletResponse response,HttpSession session) {
		System.out.println("choiceMenu 들어옴");
//		System.out.println(session.getAttribute("user_id"));
		String m_id =(String) session.getAttribute("user_id");
		String what="other";
		if(m_id!=null) {
			MemberVO result = service.othermenulist(m_id);
			System.out.println("********************"+result.getM_most());
			String most = result.getM_most();
			String resultweather="";
			String resulttemp="";
			
			Client client = new Client(resultweather,resulttemp,most,what);	//1
			String resultmost = client.getResult();
			ServletOutputStream out;
			System.out.println("result :"+resultmost);
		}
		
		
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/choiceMenu");
		
		return mv;
		
	}

}
