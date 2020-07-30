package com.food.controller;



import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.PaginationVO;
import com.food.domain.StoreListVO;
import com.food.service.StoreService;
import com.food.service.boardService;


@Controller
@RequestMapping("/store")
public class StoreController {
	
	@Autowired
	StoreService storeService;
	
	@Autowired
	boardService boardService;
	
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		System.out.println("여기로");
		return "/store/" + step;
	}
	
	
	
//	 상품 상세보기 
	@RequestMapping("/storeDetails.do" )
	public ModelAndView getSelectStore(StoreListVO vo,BoardVO vo2,HttpServletRequest request) {
		
		StoreListVO list = storeService.storeDetail(vo);
		List<BoardVO> listVO = storeService.reviewSelect(vo);
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("store/storeDetails");
		mv.addObject("list",list);
		mv.addObject("listVO",listVO);
				
		return mv;
	}
	
	
	
	
	// 리뷰등록
	@RequestMapping(value ="/reviewInsert.do")
	public String reviewInsert(BoardVO vo ,HttpServletRequest request) throws UnsupportedEncodingException {
		System.out.println("리뷰인설트 controller 도착");
		String name = request.getParameter("name");
		System.out.println(name);
		name = URLEncoder.encode(name,"UTF-8");
		int result;
		vo.setBoardType(2);
		vo.setSeq("review_r_no");
	
		result = boardService.insertBoard(vo);
		
		if(result==0) {
			return "../index/error";
		}
		return "redirect:/store/storeDetails.do?s_brand_name="+name;
	}
	
	
	// 리뷰리스트 , 페이징 처리 
	@ResponseBody
	@RequestMapping(value = "/storeDetailPaging.do" , produces = "application/json; charset=utf-8")
	public Map getSelectStore(StoreListVO vo,BoardVO vo2,HttpServletRequest request,
			@RequestParam(defaultValue = "1")int curPage) {
		
		Map map = new HashMap();
		Map result = new HashMap();
				
		 //상세보기 페이지 안에 상품별 리뷰리스트 페이징 처리를 위한 상세보기전체글 갯수
	
		//리뷰가져오기
		
		vo2.setBoardType(2);
		int boardType = vo2.getBoardType();
		String s_brand_name = vo2.getS_brand_name();
		String title = vo2.getTitle();
	
		map.put("boardType",boardType);
		map.put("s_brand_name",s_brand_name);
			
		//가게별 리뷰가져오기 
		List<BoardVO> listVO2 = storeService.reviewSelect2(map);
		int listVO2size = listVO2.size();
		
		PaginationVO paginationVO = new PaginationVO(listVO2.size(),curPage);
		map.put("startRow", paginationVO.getStartIndex()+1);
		map.put("endRow", paginationVO.getStartIndex()+paginationVO.getPageSize());
		
		// 내가 지정한 리스트 개수를 가져오기위해서 listVO2에  다시 넣어줌 
		listVO2 = storeService.reviewPaging(map);
		System.out.println("+++++++++++++++"+listVO2size);	
		System.out.println("+++++++++++++++"+listVO2.size());
		result.put("listVO2",listVO2);
		result.put("pagination",paginationVO);
		result.put("listVO2size",listVO2.size());
		return result;
	}
	
	//삭제하기
	@RequestMapping(value ="/storeReviewDetaildelete.do")
	public String reviewDetailDelete(BoardVO vo,HttpServletRequest request) throws UnsupportedEncodingException{
		System.out.println("리뷰인설트 controller 도착");
		String name = request.getParameter("s_brand_name");
		System.out.println(name);
		name = URLEncoder.encode(name,"UTF-8");	
		int result;
		vo.setBoardType(2);
		
		result = boardService.deleteBoard(vo);
		if(result==0) {
			return "index/error";
		}
		return "redirect:/store/storeDetails.do?s_brand_name="+name;
	}
	
	// 리뷰 눌렀을때 상세보기
	@RequestMapping("/storeReviewDetails.do")
	public void storeReviewDetail(BoardVO vo, Model model) {
		
		System.out.println("storeReviewDetails.do 도착");
		vo.setBoardType(2);
		model.addAttribute("board",boardService.boardView(vo));
	}
	
	// 수정할 페이지보여주기
	@RequestMapping("/storeReviewDetailsmodify.do")
	public void storeReviewDetailsmodify(BoardVO vo, Model model) {
		vo.setBoardType(2);
		model.addAttribute("board",boardService.boardView(vo));
		
	}
	
	// 수정하기
	@RequestMapping("/storeReviewDetailsmodifyEnd.do")
	public String storeReviewDetailsmodifyEnd(BoardVO vo, HttpServletRequest request) {
		
		int result;
		vo.setBoardType(2);
		System.out.println(vo.getTitle()+"***************");
		result = boardService.updateBoard(vo);
		
		if(result==0) {
			System.out.println("에러");
			return "index/error";
		}
		return "redirect:../store/storeReviewDetails.do?b_no="+vo.getB_no();
		
	}
	
	
	
	

}
