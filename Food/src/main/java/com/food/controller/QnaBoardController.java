package com.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.QnaBoardVO;
import com.food.service.QnaBoardService;

@Controller
public class QnaBoardController {

	@Autowired
	private QnaBoardService qnaboardservice;
	
	@RequestMapping("/qnaboard.do")
	public ModelAndView selectqna(QnaBoardVO vo) {
		System.out.println("selectqna controller 도착");
		List<QnaBoardVO> listVO = qnaboardservice.selectqna(vo);
		System.out.println("mapper 갔다옴");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/qnaboard/qnaboard");
		mv.addObject("listVO",listVO);
		return mv;
		
	}
	
	
}
