package com.food.controller;



import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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
	
	
//	 상품 상세보기 
	@RequestMapping("/storeDetails.do" )
	public ModelAndView getSelectStore(StoreListVO vo,BoardVO vo2,HttpServletRequest request) {
		
		
		
		System.out.println("ajax 왔어 "+vo2.getS_brand_name());
		
		System.out.println("스토어셀렉 controller 도착");
		System.out.println("------------------******************"+vo.getS_brand_name());
		
		StoreListVO list = storeService.storeDetail(vo);
		List<BoardVO> listVO = storeService.reviewSelect(vo);
		
		System.out.println("스토어셀렉mapper 갔다옴");
		System.out.println(list+"!!");
		System.out.println(listVO+"=============================");
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
		System.out.println("======================"+vo.getS_brand_name());
		System.out.println("======================"+vo.getB_content());
		System.out.println("======================"+vo.getTitle());
		System.out.println("======================"+vo.getUserId());
		System.out.println("======================"+vo.getV_fileName());
		System.out.println("======================"+vo.getV_fileSize());
		result = boardService.insertBoard(vo);
		System.out.println("ddd");
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
		System.out.println(s_brand_name+"2222222333333333344444444444");
		System.out.println(title+"2222222333333333344444444444");
		map.put("boardType",boardType);
		map.put("s_brand_name",s_brand_name);
			
		//가게별 리뷰가져오기 
		List<BoardVO> listVO2 = storeService.reviewSelect2(map);
		int listVO2size = listVO2.size();
		
		PaginationVO paginationVO = new PaginationVO(listVO2.size(),curPage);
		map.put("startRow", paginationVO.getStartIndex()+1);
//		paginationVO.setPageSize(2);		
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
	
//	@RequestMapping("/reviewDelete.do")
//	public ModelAndView reviewDelete(BoardVO vo) {
//		
//		
//	}

	
	
	
	
	

}
