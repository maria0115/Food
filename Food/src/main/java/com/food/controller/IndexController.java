package com.food.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.PaginationVO;
import com.food.domain.PagingVO;
import com.food.domain.StoreListVO;
import com.food.service.FriendBoardService;
import com.food.service.StoreService;
import com.food.service.boardService;

@Controller
@RequestMapping("index/")
public class IndexController {
	
	@Autowired
	FriendBoardService friendBoardService;
	
	@Autowired
	boardService boardService;
	
	@Autowired
	StoreService storeService;
	
	@RequestMapping("{step}.do")
	public String page(@PathVariable String step) {
		System.out.println("여기로");
		return "index/"+step;
	}
	
	//Header에서 Store List 클릭했을때
//	   @RequestMapping("/store.do")
//	   public ModelAndView getStoreList(StoreListVO vo, String category) {
//	      System.out.println("스토어 controller 도착");
//	      List<StoreListVO> listVO = storeService.getStoreList(vo);
//	      System.out.println("스토어mapper 갔다옴");
//	      ModelAndView mv = new ModelAndView();
//	      mv.setViewName("index/store");
//	      mv.addObject("listVO",listVO);
//	      if(category!=null) {
//	    	  mv.addObject("category",category);
//	      }
//	      return mv;
//	   }
	@ResponseBody
	@RequestMapping(value = "/storelist.do" , produces = "application/json; charset=utf-8")
	public Map selectStorePaging(StoreListVO vo,BoardVO vo2,HttpServletRequest request,
			@RequestParam(defaultValue = "1")int curPage) {
		System.out.println("왔더");
		Map map = new HashMap();
		Map result = new HashMap();
				
		 //상세보기 페이지 안에 상품별 리뷰리스트 페이징 처리를 위한 상세보기전체글 갯수
	
		//리뷰가져오기
		
		vo2.setBoardType(2);
		int boardType = vo2.getBoardType();
		String s_brand_name = vo2.getS_brand_name();
		String title = vo2.getTitle();
//	
		map.put("boardType",boardType);
		map.put("s_brand_name",s_brand_name);
			
		//가게별 리뷰가져오기 
		List<BoardVO> listVO2 = storeService.selectStoreList(map);
		int listVO2size = listVO2.size();
		
		PaginationVO paginationVO = new PaginationVO(listVO2.size(),curPage);
		map.put("startRow", paginationVO.getStartIndex()+1);
		map.put("endRow", paginationVO.getStartIndex()+paginationVO.getPageSize());
		
		// 내가 지정한 리스트 개수를 가져오기위해서 listVO2에  다시 넣어줌 
		listVO2 = storeService.selectStorePaging(map);
		System.out.println("+++++++++++++++"+listVO2size);	
		System.out.println("+++++++++++++++"+listVO2.size());
		result.put("listVO2",listVO2);
		result.put("pagination",paginationVO);
		result.put("listVO2size",listVO2.size());
		return result;
	}
	
	
	
	//밥친구 게시판 글 목록
	@RequestMapping("mealFriends.do")
	public String mealFriends(Model model,PagingVO vo ,BoardVO bvo, HttpServletRequest request
			, @RequestParam(value="nowPage", required=false)String nowPage
			, @RequestParam(value="cntPerPage", required=false)String cntPerPage) {
		
		
		
		if (nowPage == null && cntPerPage == null) {
			nowPage = "1";
			cntPerPage = "10";
		} else if (nowPage == null) {
			nowPage = "1";
		} else if (cntPerPage == null) { 
			cntPerPage = "10";
		}
		bvo.setBoardType(3);
		int total = boardService.countBoard(bvo);
		vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
		model.addAttribute("paging", vo); //페이징처리를 위한  가져온 값 넘기기 
		model.addAttribute("friendlist", boardService.selectBoard(bvo, vo, null, null));
		return "index/mealFriends";
	}
	
	

}
