package com.food.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.service.ManagerService;


@Controller
@RequestMapping("manager")
public class ManageController {
	
	int curCount=0; //리스트에서 현재 검색된 데이터 숫자를 저장할 변수 선언
	int allCount; //리스트에서 모든 데이터의 숫자를 저장한 변수 선언
	
	@Autowired
	private ManagerService managerService;
	
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		return "manager/"+step;
	}
	
	
	//회원리스트 출력
	@RequestMapping("/member-list.do")
	public String productList(Model model,HttpServletRequest request,String searchClick,PagingVO pvo,@RequestParam(value="nowPage",required=false)String nowPage,@RequestParam(value="cntPerPage",required=false)String cntPerPage,@RequestParam(value="cntHirePage",required=false)String cntHirePage, String searchType, String keyword, MemberVO vo) {
		int total;//페이징 처리할때 데이터의 총 갯수를 저장할 변수
		String search = "";//검색을 했는지 여부를 확인할 변수 선언
		
		search = searchType; //검색할때 선택한 검색타입을 받아온다
		allCount =managerService.allCount(); //데이터의 총 갯수
		
		
		if(search==null || search.equals("")) {//검색을 하지 않았을 경우
			
			total=allCount; //total에 데이터의 총 갯수를 저장
			curCount=allCount; //검색을 하지 않았기 때문에 현재 검색한 데이터의 갯수를 저장하는 curCount 변수에 데이터의 총 갯수를 저장
			searchType =null;  //mapper에서 오류를 방지하기위헤 searchType에 null값을 저장
			keyword=null;	   //mapper에서 오류를 방지하기위헤 keyword에 null값을 저장
		}else{//검색을 했을 경우
			
			//검색한 데이터의 갯수를 curCount에 저장
			curCount =managerService.searchCount(searchType,keyword);
			
			//검색버튼을 클릭했을 경우 페이지를 1페이지부터 보여준다
			if(searchClick.equals("Y")==true) {
				nowPage="1";
			}
			
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
		System.out.println("total : "+total);
		System.out.println("cntPerPage: "+cntPerPage);
		//PagingVO생성자 함수로 paging 처리 계산하여 pvo에 객체 생성
		pvo = new PagingVO(total, Integer.parseInt(nowPage), Integer.parseInt(cntPerPage));
		System.out.println("StartPage : "+pvo.getStartPage());
		System.out.println("endPage : "+pvo.getEndPage());
		System.out.println("lastPage : "+pvo.getLastPage());
		//모델에 "paing" pvo 추가
		model.addAttribute("paging", pvo);
		
		//모델에 "memList" List 추가 , db에서 조건에 해당하는 상품 목록을 가지고 온다
	


		
		
		model.addAttribute("memList",managerService.selectBoard(pvo,searchType,keyword));
		
		//모델에 "searchType" 검색타입 추가
		model.addAttribute("searchType", searchType);
		//모델에 "keyword" 검색키워드 추가
		model.addAttribute("keyword", keyword);
		
		//모델에 "curCount" 현재 검색된 데이터 숫자 추가
		model.addAttribute("curCount", curCount);
		
		//모델에 "allCount" 전체 데이터 숫자 추가
		model.addAttribute("allCount", allCount);
		
		
		return "manager/member-list";
	}
	
	//회원리스트에서 회원 삭제
		@ResponseBody
		@RequestMapping(value="/Delete.do")
		public String listDelete(@RequestParam(value="input_check[]",required=false)List<String> chArr ,MemberVO vo) {
			int result=0;//삭제했을때 반환한 값을 저장할 변수
			if(chArr!=null) {
				for(String i : chArr) { // 요청받은 리스트만큼 for문을 반복
					vo.setM_id(i); //chArr 리스트 안에 있던 Id 값들을 db에 넘겨줄 vo객체에 저장한다
					result=managerService.memberDelete(vo); //해당하는 Id값이 있을 경우 삭제해준다
					
				}
			}
			else
				result=managerService.memberDelete(vo);
			
			System.out.println("result: "+result);
			if(result==1) {//삭제 성공
			return "listSuccess.do"; 
			}else		   //삭제 실패
				return "listFail";
		}
	
}
