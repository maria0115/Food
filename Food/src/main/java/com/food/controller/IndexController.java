package com.food.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;
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
	
	int curCount=0; //리스트에서 현재 검색된 데이터 숫자를 저장할 변수 선언
	int allCount; //리스트에서 모든 데이터의 숫자를 저장한 변수 선언
	@Autowired
	FriendBoardService friendBoardservice;
	
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
	@RequestMapping("/store.do")
	public void getStoreList(StoreListVO vo, BoardVO b_vo, String category, Model model) {
		
		model.addAttribute("starAvg",storeService.starAvg());
		model.addAttribute("map",friendBoardservice.test());
	
	}
	
	@ResponseBody
	@RequestMapping(value = "/storelist.do" , produces = "application/json; charset=utf-8")
	public Map selectStorePaging(StoreListVO vo,BoardVO vo2,HttpServletRequest request,
			@RequestParam(defaultValue = "1")int curPage,
			@RequestParam String s_category,
			@RequestParam String searchWord) {
		System.out.println("왔더");
		Map map = new HashMap();
		Map result = new HashMap();
		
				
		 //상세보기 페이지 안에 상품별 리뷰리스트 페이징 처리를 위한 상세보기전체글 갯수
	
		//리뷰가져오기
		
		vo2.setBoardType(2);
		int boardType = vo2.getBoardType();
		String s_brand_name = vo2.getS_brand_name();
		String s_address = vo.getS_address();
		String title = vo2.getTitle();
		
		map.put("boardType",boardType);
		map.put("s_brand_name",s_brand_name);
		map.put("s_address",s_address);
		map.put("s_category",s_category);
		map.put("searchWord",searchWord);
		
		System.out.println("123456789"+s_category);
		System.out.println("1234567891011"+searchWord);
		//가게 가져오기 
		List<StoreListVO> listVO2 = storeService.selectStoreList(map);
		int listVO2size = listVO2.size();
		System.out.println(listVO2size);
		PaginationVO paginationVO = new PaginationVO(9,listVO2.size(),curPage);
		map.put("startRow", paginationVO.getStartIndex()+1);
		map.put("endRow", paginationVO.getStartIndex()+paginationVO.getPageSize());
		
		// 내가 지정한 리스트 개수를 가져오기위해서 listVO2에  다시 넣어줌 
		listVO2 = storeService.selectStorePaging(map);
		
		for (StoreListVO i : listVO2) {
			
			System.out.println(i.getS_brand_name());
		}
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
			, @RequestParam(value="cntPerPage", required=false)String cntPerPage,
			String searchType, String keyword, String searchClick) {
		bvo.setBoardType(3);
		String search = "";//검색을 했는지 여부를 확인할 변수 선언
		int total;
		
		
		if(searchType!=null) {
			if(searchType.equals("title")==true) {
				searchType="title";
			}else if(searchType.equals("b_content")==true) {
				searchType="b_content";
			}else if(searchType.equals("userid")==true) {
				searchType="userid";
			}
		}
		
		
		search = searchType; //검색할때 선택한 검색타입을 받아온다
		allCount = boardService.countBoard(bvo);
		
		if(search==null || search.equals("")) {//검색을 하지 않았을 경우
			
			total=allCount; //total에 데이터의 총 갯수를 저장
			curCount=allCount; //검색을 하지 않았기 때문에 현재 검색한 데이터의 갯수를 저장하는 curCount 변수에 데이터의 총 갯수를 저장
			searchType =null;  //mapper에서 오류를 방지하기위헤 searchType에 null값을 저장
			keyword=null;	   //mapper에서 오류를 방지하기위헤 keyword에 null값을 저장
		}else{//검색을 했을 경우
			
			//검색한 데이터의 갯수를 curCount에 저장
			curCount =friendBoardservice.searchCount(searchType,keyword);
			
			//검색버튼을 클릭했을 경우 페이지를 1페이지부터 보여준다
			if(searchClick.equals("Y")==true) {
				nowPage="1";
			}
			
			//총 갯수에 현재 검색한 데이터의 갯수를 저장
			total=curCount;
		}
		
		if (nowPage == null && cntPerPage == null) {
			nowPage = "1";
			cntPerPage = "10";
		} else if (nowPage == null) {
			nowPage = "1";
		} else if (cntPerPage == null) { 
			cntPerPage = "10"
					+ "";
		}
		
		
		vo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
		model.addAttribute("paging", vo); //페이징처리를 위한  가져온 값 넘기기 
		model.addAttribute("friendlist", boardService.selectBoard(bvo, vo, searchType, keyword));
		//모델에 "searchType" 검색타입 추가
		model.addAttribute("searchType", searchType);
		//모델에 "keyword" 검색키워드 추가
		model.addAttribute("keyword", keyword);
		
		
		return "index/mealFriends";
	}
	
	//맛집 검색하기 
	@RequestMapping("searchmap.do")
	public String searchmap(Model model, HttpServletRequest request) {
		
		model.addAttribute("word",request.getParameter("keyword"));
		
		return"index/searchmap";
	}
	
	
	

}
