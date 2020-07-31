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
	
	int curCount=0; //리스트에서 현재 검색된 데이터 숫자를 저장할 변수 선언
	int allcount; //리스트에서 모든 데이터의 숫자를 저장한 변수 선언
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
//	@RequestMapping("/store.do")
//	public ModelAndView getStoreList(StoreListVO vo, String category) {
//		System.out.println("스토어 controller 도착");
//	    List<StoreListVO> listVO = storeService.getStoreList(vo);
//	    System.out.println("스토어mapper 갔다옴");
//	    ModelAndView mv = new ModelAndView();
//	    mv.setViewName("index/store");
//	    mv.addObject("listVO",listVO);
//	    if(category!=null) {
//	    mv.addObject("category",category);
//	    }
//	    return mv;
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
		String s_address = vo.getS_address();
		String title = vo2.getTitle();
	
		map.put("boardType",boardType);
		map.put("s_brand_name",s_brand_name);
		map.put("s_address",s_address);
			
		//가게 가져오기 
		List<StoreListVO> listVO2 = storeService.selectStoreList(map);
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
	
	//메인에서 검색했을때
			@RequestMapping("/serchstore.do")
			public String serchboard(Model model,HttpServletRequest request,String searchClick,PagingVO pvo,
					@RequestParam(value="nowPage",required=false)String nowPage,
					@RequestParam(value="cntPerPage",required=false)String cntPerPage,
					@RequestParam(value="cntHirePage",required=false)String cntHirePage,
					String searchType, String keyword) {
				
				int total;//페이징 처리할때 데이터의 총 갯수를 저장할 변수
				String search = "";//검색을 했는지 여부를 확인할 변수 선언
				
				if(searchType!=null) {
					if(searchType.equals("한식")==true) {
						searchType="한식";
					}else if(searchType.equals("양식")==true) {
						searchType="양식";
					}else if(searchType.equals("중식")==true) {
						searchType="중식";
					}else if(searchType.equals("일식")==true) {
						searchType="일식";
					}else if(searchType.equals("분식")==true) {
						searchType="분식";
					}else if(searchType.equals("동남아")==true) {
						searchType="동남아";
					}
				}
				search = searchType; //검색할때 선택한 검색타입을 받아온다
				allcount = friendBoardservice.allcount();
				
				if(search==null || search.equals("")) {//검색을 하지 않았을 경우
					
					total=allcount; //total에 데이터의 총 갯수를 저장
					curCount=allcount; //검색을 하지 않았기 때문에 현재 검색한 데이터의 갯수를 저장하는 curCount 변수에 데이터의 총 갯수를 저장
					searchType =null;  //mapper에서 오류를 방지하기위헤 searchType에 null값을 저장
					keyword=null;	   //mapper에서 오류를 방지하기위헤 keyword에 null값을 저장
				}else{//검색을 했을 경우
					
					//검색한 데이터의 갯수를 curCount에 저장
					curCount = friendBoardservice.searchCount(searchType,keyword);
					//총 갯수에 현재 검색한 데이터의 갯수를 저장
					total=curCount;
				}
				
				//페이지 처음 들어갈때 nowPage와 cntPerPage가 없을 경우
				if (nowPage == null && cntPerPage == null) {
					nowPage = "1";
					cntPerPage = "5";
				//nowPage만 null일 경우
				} else if (nowPage == null) {
					nowPage = "1";
				//cntPerPage만 null일 경우
				} else if (cntPerPage == null) { 
					cntPerPage = "5";
				}

				//PagingVO생성자 함수로 paging 처리 계산하여 pvo에 객체 생성
				pvo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));

				//모델에 "paing" pvo 추가
				model.addAttribute("paging", pvo);
				
				//모델에 "memList" List 추가 , db에서 조건에 해당하는 상품 목록을 가지고 온다
			


				
				
				model.addAttribute("listVO",friendBoardservice.selectStore(pvo,searchType,keyword));
				
				//모델에 "searchType" 검색타입 추가
				model.addAttribute("searchType", searchType);
				//모델에 "keyword" 검색키워드 추가
				model.addAttribute("keyword", keyword);
				
			
				
				
				return "index/store";
			}
	
	

}
