package com.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.QnaBoardVO;
import com.food.service.QnaBoardService;

@Controller
public class QnaBoardController {

	@Autowired
	private QnaBoardService qnaboardservice;
	
	
//	@RequestMapping("/{step}.do")
//	public String page(@PathVariable String step) {
//		return "qnaboard/"+step;
//	}
	
	// Q&A 게시판 목록 보여줌
	@RequestMapping("/qnaboard.do")
	public ModelAndView selectqna(QnaBoardVO vo) {
		System.out.println("selectqna controller 도착");
		List<QnaBoardVO> listVO = qnaboardservice.selectqna(vo);
		System.out.println("mapper 갔다옴");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("qnaboard/qnaboard");
		mv.addObject("listVO",listVO);
		return mv;
	}
	// Q&A 입력 화면으로 넘어감
	@RequestMapping("/qnaboard_insertpage.do")
	public String insertqnapage(QnaBoardVO vo) {
		System.out.println("insertqnapage controller 도착");
		return "qnaboard/qnaboard_insert";
	}
	
	// Q&A 입력하고 목록으로 돌아감
	@RequestMapping("/qnaboard_insert.do")
	public String insertqna(QnaBoardVO vo) {
		System.out.println("insertqna controller 도착");
		qnaboardservice.insertqna(vo);
		System.out.println("mapper 갔다옴");
		
		return "redirect:qnaboard.do";
	}
	
}
