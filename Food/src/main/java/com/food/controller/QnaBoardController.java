package com.food.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
import com.food.service.QnaBoardService;
import com.food.service.boardService;

@Controller
public class QnaBoardController {

	@Autowired
	private boardService boardService;
	
	
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
	public String insertqnapage(BoardVO vo) {
		System.out.println("insertqnapage controller 도착");
		return "qnaboard/qnaboard_insert";
	}
	
	// Q&A 입력하고 목록으로 돌아감
	@RequestMapping("/qnaboard_insert.do")
	public String insertqna(BoardVO vo) {
		System.out.println("insertqna controller 도착");
		vo.setBoardType(4);
		vo.setSeq("no_qnaboard_seq");
		boardService.insertBoard(vo);
		System.out.println("mapper 갔다옴");
		
		return "redirect:qnaboardList";
	}
	
	// QnA 리스트 페이징
	@GetMapping("/qnaboardList")
	public String boardList(PagingVO pvo,BoardVO vo, Model model
			, @RequestParam(value="nowPage", required=false)String nowPage
			, @RequestParam(value="cntPerPage", required=false)String cntPerPage) {
		
		System.out.println("qnaboard 페이징 컨트롤러");
		vo.setBoardType(4);
		int total = boardService.countBoard(vo);
		if (nowPage == null && cntPerPage == null) {
			nowPage = "1";
			cntPerPage = "4";
		} else if (nowPage == null) {
			nowPage = "1";
		} else if (cntPerPage == null) { 
			cntPerPage = "5";
		}
		pvo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
		model.addAttribute("paging", pvo);
		model.addAttribute("listVO", boardService.selectBoard(vo,pvo,null,null));
		return "qnaboard/qnaboardpaging";
	}
	
	// QnA 상세 페이지
	@GetMapping("detail")
	public ModelAndView viewDetail(BoardVO vo,PagingVO pvo) {
	  System.out.println("viewDetail 컨트롤러");
	  vo.setBoardType(4);
	  BoardVO list = boardService.boardView(vo);
	  System.out.println("viewDetail 매퍼갔다옴");
	  System.out.println("content : "+list.getB_content());
	  // 댓글 리스트
	  List<BoardVO> listvo = boardService.selectReply(vo);
	  
	  ModelAndView mv = new ModelAndView();
	  mv.addObject("list",list);
	  mv.addObject("listVO",listvo);
	  
	  mv.setViewName("qnaboard/qnaboard_detail");
	  return mv;
	}
	
	// QnA 게시글 수정
	@RequestMapping("modifyqna")
	public String modifyQna(BoardVO vo) {
		System.out.println("modifyQna 컨트롤러+"+vo.getB_no()+" : "+vo.getB_content()+" : "+vo.getTitle());
		vo.setBoardType(4);
		boardService.updateBoard(vo);
		System.out.println("도착함");
		return "redirect:qnaboardList";
	}
	
	// QnA 댓글 수정
	@RequestMapping("modifyReply.do")
	@ResponseBody
	public void modifyReply( BoardVO vo) {
        System.out.println("댓글번호 :"+vo.getQ_replyno());
        System.out.println("댓글내용 :"+vo.getB_content());
        vo.setBoardType(5);
        
        boardService.modifyReply(vo);
	}
	
	// QnA 게시글 삭제
	@GetMapping("deleteqna")
	public String deleteQna(BoardVO vo) {
		System.out.println("deleteQna 컨트롤러");
		vo.setBoardType(4);
		boardService.deleteBoard(vo);
		System.out.println("도착함");
		return "redirect:qnaboardList";
	}
	
	// 댓글 입력
    @RequestMapping("insertReply.do")
    @ResponseBody
    public void insertReply(@ModelAttribute BoardVO vo, HttpSession session){
        String user_id = (String) session.getAttribute("user_id");
        System.out.println("userid :"+user_id);
        System.out.println("content :"+vo.getB_content());
        System.out.println("원 게시글 번호 :"+vo.getF_cnt());
        vo.setBoardType(5);
        System.out.println("vo.getboardtype:"+vo.getBoardType());
  	    System.out.println("세션 아이디 :"+session.getAttribute("user_id"));
  	    vo.setUserId((String) session.getAttribute("user_id"));
  	    System.out.println("vo userid session:"+vo.getUserId());
  	  
        boardService.insertReply(vo);
    }
	
    @RequestMapping("deleteReply.do")
    @ResponseBody
    public void deleteReply(BoardVO vo) {
    	System.out.println("댓글 번호 :"+vo.getQ_replyno());
    	vo.setBoardType(5);
    	
    	boardService.deleteReply(vo);
    	
    	
    }
    
    
	
}
