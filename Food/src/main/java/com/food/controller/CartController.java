package com.food.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.MemberVO;
import com.food.domain.WishlistVO;
import com.food.service.CartService;

@Controller
public class CartController {

	@Autowired
	private CartService CartService;
	
	// 찜 하기 버튼 누르면 등록
	@RequestMapping("insertCart.do")
	public void insertCart(MemberVO mvo,WishlistVO vo,HttpSession session) {
		System.out.println("insertCart controller");
		System.out.println("가게명 :"+vo.getW_store_name());
		System.out.println("주소 :"+vo.getW_address());
		System.out.println("중분류 :"+vo.getW_midpart());
		vo.setM_id((String) session.getAttribute("user_id"));
		System.out.println("m_id :"+vo.getM_id());
		
		
		mvo.setM_id(vo.getM_id());
		CartService.insertCart(vo);
		int wish = CartService.selectCount(mvo); 
		session.setAttribute("wish", wish);
	}
	
	// 찜 목록 보기
	@RequestMapping("selectCart.do")
	public ModelAndView selectCart(WishlistVO vo,HttpSession session) {
		System.out.println("selectCart controller");
//		System.out.println("m_id :"+m_id);
		String m_id = (String) session.getAttribute("user_id");
		vo.setM_id(m_id);
		List<WishlistVO> list = CartService.selectCart(vo);
		
		ModelAndView mv = new ModelAndView();
		mv.addObject("list", list);
		mv.setViewName("index/cart");
		return mv;
	};
	
	// 찜 하기 삭제
	@RequestMapping("deleteCart.do")
	@ResponseBody
	public void deleteCart(WishlistVO vo, HttpSession session,MemberVO mvo) {
		System.out.println("deleteCart controller");
		String m_id = (String) session.getAttribute("user_id");
		vo.setM_id(m_id);
		System.out.println("가게명 :"+vo.getW_store_name());
		System.out.println("m_id :"+vo.getM_id());
		CartService.deleteCart(vo);	
		session.removeAttribute("wish");
		mvo.setM_id(vo.getM_id());
		int wish = CartService.selectCount(mvo); 
		session.setAttribute("wish", wish);
	}
	
};
