package com.food.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

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
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;
import com.food.service.MainService;

@Controller
public class OtherMenusController {

	@Autowired
	private MainService service;
	
	@RequestMapping("/index/choiceMenu.do")
	public ModelAndView othermenulist(HttpServletRequest request, HttpServletResponse response,HttpSession session) {
		System.out.println("choiceMenu 들어옴");
//		System.out.println(session.getAttribute("user_id"));
//		String m_id =(String) session.getAttribute("user_id");
//		String what="other";
//		m_id="mariaa";
//		List<String> list = new ArrayList<String>();
//		if(m_id!=null) {
//			MemberVO result = service.othermenulist(m_id);
//			System.out.println("********************"+result.getM_most());
//			String most = result.getM_id();
//			String resultweather="";
//			String resulttemp="";
//			
//			Client client = new Client(resultweather,resulttemp,most,what);	//1
//			String resultmost = client.getResult();
//			ServletOutputStream out;
//			System.out.println("result :"+resultmost);
//			String []othermost = resultmost.split(",");
//			//service.
//			List<ReservationVO> relistvo = service.otherrecomandlist(othermost);
//			
//			if (relistvo!=null) {
//				for(int i=0;i<relistvo.size();i++) {
//					ReservationVO vo = new ReservationVO();
//					vo = relistvo.get(i);
//					
//					list.add(vo.getR_menu());
//					
//				}
//				TreeSet<String> distinctlist = new TreeSet<String>(list);
//				list = new ArrayList<String>(distinctlist);
//				
//			}
//		
//		}
		
		
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/choiceMenu");
//		if(m_id!=null) {
//			mv.addObject("list",list);
//		}
		return mv;
		
	}
	@RequestMapping("/index/todayMenu.do")
	public ModelAndView TodayMenu(HttpServletRequest request, HttpServletResponse response,HttpSession session, String category) {
	
		System.out.println(category);
		List<ProductVO> list = service.randomlist(category);
		for(int i=0; i<list.size();i++) {
			ProductVO vo = new ProductVO();
			vo = list.get(i);
			System.out.println(vo.getS_brand_name());
		}
	
		System.out.println("todayMenu.do로 옴");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/todayMenu");
		return mv;
	}

}
