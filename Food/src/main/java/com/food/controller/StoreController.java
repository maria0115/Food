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
		 //상세보기 페이지 안에 상품별 리뷰리스트 페이징 처리를 위한 상세보기전체글 갯수
	
		
		//매장별 상세보기 
		StoreListVO list = storeService.storeDetail(vo);
		
	
		
		
		//가게별 리뷰가져오기 
	
		
		
	
		
		
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
		
		PaginationVO paginationVO = new PaginationVO(curPage,listVO2.size());
		map.put("startRow", paginationVO.getStartIndex()+1);
		//paginationVO.setPageSize(2);		
		map.put("endRow", paginationVO.getStartIndex()+paginationVO.getPageSize());
		// 내가 지정한 리스트 개수를 가져오기위해서 listVO2에  다시 넣어줌 
		listVO2 = storeService.reviewPaging(map);
		
		
//		int total = boardService.countBoard(vo2);
	
		
		
//		List<BoardVO> listVO = storeService.reviewSelect(vo);
		
		
		
	
		
		
		
		result.put("listVO2",listVO2);
		result.put("paginationVO",paginationVO);
		result.put("listVO2size",listVO2size);
		return result;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	
//	@RequestMapping("/storeDetails.do")
//	public ModelAndView reviewSelect(StoreListVO vo){
//		
//		storeService.reviewSelect(vo);
//		ModelAndView mv = new ModelAndView();
//
//		return mv;
//		
//		//리뷰가져오기 
//		
//		
//	}
	
//	@RequestMapping(value="/storeDetails.do", produces = "application/json; charset=utf-8")
//	@ResponseBody
//	public Map getWriterDataWithPaging(StoreListVO vo,BoardVO vo2,HttpSession session,  @RequestParam(defaultValue="1")
//							int curPage, @RequestParam(value = "searchWord") String searchWord) {
//		Map result = new HashMap();		
//		
//		//매장별 상세보기 
//		StoreListVO list = storeService.storeDetail(vo);
//				
//		//리뷰가져오기
//		
//		vo2.setBoardType(2);
//		int total = boardService.countBoard(vo2);
//	
//		vo.setNowPage("1");
//		
//		List<BoardVO> listVO = storeService.reviewSelect(vo);
//		
//		int listCnt = storeService.selectWriterCntByNameWithPaging(searchWord);
//		
//		PaginationVO paginationVO = new PaginationVO(listCnt, curPage);
//	
//		int reviewPageCnt = listVO.size();
//		if(reviewPageCnt != 0) {
//			reviewPageCnt=reviewPageCnt/5;
//		}
//		
//		
//		Map searchMap = new HashMap();
//		searchMap.put("searchWord", searchWord);
//		searchMap.put("startRow", paginationVO.getStartIndex()+1);
//		searchMap.put("endRow", paginationVO.getStartIndex()+paginationVO.getPageSize());
//		List<BoardVO> writerList = storeService.selectWriterSearchByNameWithPaging(searchMap);
//		result.put("pagination", paginationVO);
//		result.put("writerList", writerList);
//		result.put("writerListSize", writerList.size());
//		
//		return result;
//	}
//	
	
	
	
	
	
	
//	@RequestMapping("/store.do")
//	public void getBoardList(StoreListVO vo, Model model) {
//		System.out.println("컨트롤러요");
//		
//		model.addAttribute("storeList",storeService.getStoreList(vo));
//		// ViewResolver를 지정하지 않으면 아래처럼 페이지명 지정
//		// return "views/getBoardList.jsp"; // View 이름 리턴
//		System.out.println("컨트롤러2");
//		
//	}
//	@RequestMapping(value="/admin/getWriterDataWithPaging.do", produces = "application/json; charset=utf-8")
//	@ResponseBody
//	public Map getWriterDataWithPaging(HttpSession session,  @RequestParam(defaultValue="1") int curPage, @RequestParam(value = "searchWord") String searchWord) {
//		Map result = new HashMap();		
//		
//		int listCnt = storeService.selectWriterCntByNameWithPaging(searchWord);
//		
//		PaginationVO paginationVO = new PaginationVO(listCnt, curPage);
//		Map searchMap = new HashMap();
//		searchMap.put("searchWord", searchWord);
//		searchMap.put("startRow", paginationVO.getStartIndex()+1);
//		searchMap.put("endRow", paginationVO.getStartIndex()+paginationVO.getPageSize());
//		List<BoardVO> writerList = storeService.selectWriterSearchByNameWithPaging(searchMap);
//		result.put("pagination", paginationVO);
//		result.put("writerList", writerList);
//		result.put("writerListSize", writerList.size());
//		
//		return result;
//	}
}
