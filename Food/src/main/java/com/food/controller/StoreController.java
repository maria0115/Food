package com.food.controller;



import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.food.domain.BoardVO;
import com.food.domain.PaginationVO;
import com.food.domain.StoreListVO;
import com.food.service.CartService;
import com.food.service.StoreService;
import com.food.service.boardService;


@Controller
@RequestMapping("/store")
public class StoreController {
	
	@Autowired
	StoreService storeService;
	
	@Autowired
	boardService boardService;
	
	@Autowired
	CartService cartService;
	
	
	
	
	
	
	
	
	
	
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		System.out.println("여기로");
		return "/store/" + step;
	}
	
	
	
//	 상품 상세보기 
	@RequestMapping("/storeDetails.do" )
	public ModelAndView getSelectStore(StoreListVO vo,BoardVO vo2,HttpServletRequest request,HttpSession session) {
		
		
		
		System.out.println("ajax 왔어 "+vo2.getS_brand_name());
		
		System.out.println("스토어셀렉 controller 도착");
		System.out.println("------------------******************"+vo.getS_brand_name());
		
		StoreListVO list = storeService.storeDetail(vo);
		
		List<BoardVO> listVO = storeService.reviewSelect(vo);
//		System.out.println(listVO.get(0).getS_brand_name()+"//////////*************");
		// 매장명 가져오는거 -------------
		String m_id = (String) session.getAttribute("user_id");
		vo.setM_id(m_id);
		String s_name = cartService.selectName(vo);
		System.out.println("s_name :"+s_name);
		
		System.out.println("스토어셀렉mapper 갔다옴");
		System.out.println(list+"!!");
//		System.out.println(listVO+"=============================");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("store/storeDetails");
		mv.addObject("list",list);
		mv.addObject("listVO",listVO);
		mv.addObject("s_name",s_name);
		return mv;
	}
	
	
	
	
	// 리뷰등록
	@RequestMapping(value ="/reviewInsert.do")
	public String reviewInsert(BoardVO vo ,HttpServletRequest request) throws UnsupportedEncodingException {
		System.out.println("리뷰인설트 controller 도착");
		String name = request.getParameter("name");
		String star = request.getParameter("v_star");
		System.out.println(star);
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
		for (BoardVO i : listVO2) {
			
			System.out.println(i.getV_fileName());
		}
		System.out.println("+++++++++++++++"+listVO2size);	
		System.out.println("+++++++++++++++"+listVO2.size());
		result.put("listVO2",listVO2);
		result.put("pagination",paginationVO);
		result.put("listVO2size",listVO2.size());
		return result;
	}
	// 리뷰 눌렀을때 상세보기
	@ResponseBody
	@RequestMapping(value ="/reviewDetailsPop.do" , produces = "application/json; charset=utf-8")
	public BoardVO storeReviewDetail(BoardVO vo) {

		System.out.println("reviewDetailsPop.do 도착");
		vo.setBoardType(2);
		System.out.println(vo.getB_no());
		BoardVO list =  boardService.boardView(vo);
		
		return list;
		
	}
	
	
	
	
//	// 리뷰 눌렀을때 상세보기
		@RequestMapping("/storeReviewDetails.do")
		public void storeReviewDetail(BoardVO vo, Model model) {
			
			System.out.println("storeReviewDetails.do 도착");
			vo.setBoardType(2);
			model.addAttribute("board",boardService.boardView(vo));
		}
	
	//삭제하기
	@ResponseBody	
	@RequestMapping(value ="/storeReviewDetaildelete.do" , produces = "application/json; charset=utf-8")
	public int reviewDetailDelete(BoardVO vo,HttpServletRequest request) throws UnsupportedEncodingException{
		System.out.println("리뷰삭제 controller 도착");
//		String name = request.getParameter("reviewDetailBrandName");
//		System.out.println(name);
//		name = URLEncoder.encode(name,"UTF-8");	
		int result;
		vo.setBoardType(2);
		
		result = boardService.deleteBoard(vo);
		if(result==0) {
			
			return result;
		}
		return result;
	}
	
	// 수정할 페이지보여주기
	@ResponseBody
	@RequestMapping("/storeReviewDetailsmodify.do")
	public void storeReviewDetailsmodify(BoardVO vo, Model model) {
		System.out.println("리뷰수정 controller 도착");
		vo.setBoardType(2);
		model.addAttribute("board",boardService.boardView(vo));
		
	}
	
	// 수정하기
	@ResponseBody
	@RequestMapping("/storeReviewDetailsmodifyEnd.do")
	public int storeReviewDetailsmodifyEnd(BoardVO vo, HttpServletRequest request){
		System.out.println("리뷰수정완료 controller 도착");
		String file2 = vo.getV_fileName();
		System.out.println(file2+"파일명");
		long fileSize2= vo.getV_fileSize();
		System.out.println(fileSize2+"파일크기");
		

		int result;
		vo.setBoardType(2);
		System.out.println(vo.getTitle()+"***************");
		System.out.println(vo.getS_brand_name()+"***************");
		System.out.println(vo.getB_content()+"***************");
		System.out.println(vo.getB_no()+"***************");
		
		
		
		
		result = boardService.updateBoard(vo);
		
		if(result==0) {
			System.out.println("에러");
			return result;
		}
		return result;
		
	}
	
	
	// 리뷰 파일 수정
	@ResponseBody
	@RequestMapping(value = "/detailReviewModifyFile.do", method = RequestMethod.POST ) 
	public String upload2(MultipartHttpServletRequest mtf) { 
		// 파일 태그 
		System.out.println("업데이트파일 컨트롤러옴");
		String fileTag = "file"; 
		// 업로드 파일이 저장될 경로
		String filePath = "C:\\Users\\Canon\\Documents\\Food\\Food\\src\\main\\webapp\\resources\\upload\\";
	
		MultipartFile file = mtf.getFile(fileTag); String fileName = file.getOriginalFilename(); 
		// 파일 전송 
		try{
			file.transferTo(new File(filePath + fileName)); 
			}  catch(Exception e) { 
				System.out.println("업로드 오류");
			}  
		return "index/upload";
	}
	
	
	
	
	
	@RequestMapping("/stateY.do")
	public String stateY(StoreListVO vo) {
		System.out.println("승인완료");
		int result = storeService.stateY(vo);
		
		if(result == 0 ) {
			return "../index/error";
		}
		return "redirect:../manager/storestate.do";
	}
	
	@RequestMapping("/stateN.do")
	public String stateN(StoreListVO vo) {
		System.out.println("승인취소");
		int result = storeService.stateN(vo);
		
		if(result == 0) {
			return "../index/error";
		}
		
		return "redirect:../manager/storestate.do";
	}
	
	
	
	
//	@ResponseBody
//	@RequestMapping(value = "store.do" , produces = "application/json; charset=utf-8")
//	public Map selectStorePaging(StoreListVO vo,BoardVO vo2,HttpServletRequest request,
//			@RequestParam(defaultValue = "1")int curPage) {
//		System.out.println("왔더");
//		Map map = new HashMap();
//		Map result = new HashMap();
//				
//		 //상세보기 페이지 안에 상품별 리뷰리스트 페이징 처리를 위한 상세보기전체글 갯수
//	
//		//리뷰가져오기
//		
//		vo2.setBoardType(2);
//		int boardType = vo2.getBoardType();
//		String s_brand_name = vo2.getS_brand_name();
//		String title = vo2.getTitle();
////	
//		map.put("boardType",boardType);
//		map.put("s_brand_name",s_brand_name);
//			
//		//가게별 리뷰가져오기 
//		List<BoardVO> listVO2 = storeService.selectStoreList(map);
//		int listVO2size = listVO2.size();
//		
//		PaginationVO paginationVO = new PaginationVO(listVO2.size(),curPage);
//		map.put("startRow", paginationVO.getStartIndex()+1);
//		map.put("endRow", paginationVO.getStartIndex()+paginationVO.getPageSize());
//		
//		// 내가 지정한 리스트 개수를 가져오기위해서 listVO2에  다시 넣어줌 
//		listVO2 = storeService.selectStorePaging(map);
//		System.out.println("+++++++++++++++"+listVO2size);	
//		System.out.println("+++++++++++++++"+listVO2.size());
//		result.put("listVO2",listVO2);
//		result.put("pagination",paginationVO);
//		result.put("listVO2size",listVO2.size());
//		return result;
//	}
	
//	@ResponseBody
//	@RequestMapping(value = "searchBox.do" , produces = "application/json; charset=utf-8")
//	public Map selectBox(StoreListVO vo,BoardVO vo2,HttpServletRequest request,
//			@RequestParam(defaultValue = "1")int curPage,
//			@RequestParam String selectBox) {
//		System.out.println(selectBox);
//		Map map = new HashMap();
//		Map result = new HashMap();
//		map.put("select", selectBox);
//		//상세보기 페이지 안에 상품별 리뷰리스트 페이징 처리를 위한 상세보기전체글 갯수
//	
//		//리뷰가져오기
//		
//		vo2.setBoardType(2);
//		int boardType = vo2.getBoardType();
//		String s_brand_name = vo2.getS_brand_name();
//		String selectBoxName = vo.getS_category();
//		
//		map.put("boardType",boardType);
//		map.put("s_brand_name",s_brand_name);
//		map.put("selectBoxName",selectBoxName);
//			
//		//가게별 리뷰가져오기 
//		List<StoreListVO> listVO2 = storeService.serchSelect(map);
//		int listVO2size = listVO2.size();
//		
//		PaginationVO paginationVO = new PaginationVO(listVO2.size(),curPage);
//		map.put("startRow", paginationVO.getStartIndex()+1);
//		map.put("endRow", paginationVO.getStartIndex()+paginationVO.getPageSize());
//		
//		// 내가 지정한 리스트 개수를 가져오기위해서 listVO2에  다시 넣어줌 
//		listVO2 = storeService.searchSelectPaging(map);
//		System.out.println("+++++++++++++++"+listVO2size);	
//		System.out.println("+++++++++++++++"+listVO2.size());
//		result.put("listVO2",listVO2);
//		result.put("pagination",paginationVO);
//		result.put("listVO2size",listVO2.size());
//		
//		return result;
//	}
	
	
	
	
	

}
