package com.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.PagingVO;
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
//	@RequestMapping("/qnaboard.do")
//	public ModelAndView selectqna(QnaBoardVO vo) {
//		System.out.println("selectqna controller 도착");
//		List<QnaBoardVO> listVO = qnaboardservice.selectqna(vo);
//		System.out.println("mapper 갔다옴");
//		ModelAndView mv = new ModelAndView();
//		mv.setViewName("qnaboard/qnaboard");
//		mv.addObject("listVO",listVO);
//		return mv;
//	}
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
		
		return "redirect:qnaboardList";
	}
	
	// QnA 리스트 페이징
	@GetMapping("/qnaboardList")
	public String boardList(PagingVO vo, Model model
			, @RequestParam(value="nowPage", required=false)String nowPage
			, @RequestParam(value="cntPerPage", required=false)String cntPerPage) {
		
		System.out.println("qnaboard 페이징 컨트롤러");
		
		int total = qnaboardservice.countBoard();
		if (nowPage == null && cntPerPage == null) {
			nowPage = "1";
			cntPerPage = "10";
		} else if (nowPage == null) {
			nowPage = "1";
		} else if (cntPerPage == null) { 
			cntPerPage = "5";
		}
		vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
		model.addAttribute("paging", vo);
		model.addAttribute("listVO", qnaboardservice.selectBoard(vo));
		return "qnaboard/qnaboardpaging";
	}
	
	@GetMapping("detail")
	public ModelAndView viewDetail(QnaBoardVO vo) {
	  System.out.println("viewDetail 컨트롤러");
	  QnaBoardVO list = qnaboardservice.viewDetail(vo);
	  System.out.println("viewDetail 매퍼갔다옴");
	  System.out.println("content : "+list.getQ_content());
	  System.out.println("title : "+list.getQ_title());
	  ModelAndView mv = new ModelAndView();
	  mv.addObject("list",list);
	  mv.setViewName("qnaboard/qnaboard_detail");
	  return mv;
	}
	
	@RequestMapping("modifyqna")
	public String modifyQna(QnaBoardVO vo) {
		System.out.println("modifyQna 컨트롤러+"+vo.getQ_no()+" : "+vo.getQ_content()+" : "+vo.getQ_title());
		qnaboardservice.modifyQna(vo);
		System.out.println("도착함");
		return "redirect:qnaboardList";
	}
	
	
	
	
}
