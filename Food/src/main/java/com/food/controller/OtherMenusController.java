package com.food.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.TreeSet;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.food.controller.maincontroller.Client;
import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;
import com.food.service.FriendBoardService;
import com.food.service.MainService;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;

@Controller
public class OtherMenusController {

	@Autowired
	private MainService service;

	
	@RequestMapping("/index/choiceMenu.do")
	public ModelAndView othermenulist(HttpServletRequest request, HttpServletResponse response,HttpSession session) {
		System.out.println("choiceMenu 들어옴");
		System.out.println(session.getAttribute("user_id"));
		String m_id =(String) session.getAttribute("user_id");
		String what="other";
		String state = "로그아웃";
		List<ReservationVO>  list = new ArrayList<ReservationVO>();
		if(m_id!=null) {
			state = "로그인";
			MemberVO result = service.othermenulist(m_id);
			System.out.println("********************"+result.getM_most());
			String most = result.getM_id();
			String resultweather="";
			String resulttemp="",fileName="",region="";
			
			Client client = new Client(resultweather,resulttemp,region,most,fileName,what);	//1
			String resultmost = client.getResult();
			ServletOutputStream out;
			System.out.println("result :"+resultmost);
			String []othermost = resultmost.split(",");
			//service.
			list = service.otherrecomandlist(othermost);
			if (list!=null) {
				for(int i=0; i<list.size();i++) {
				ReservationVO vo = new ReservationVO();
				vo = list.get(i);
				System.out.println(vo.getR_store_name());
				System.out.println(vo.getR_menu());
				System.out.println(vo.getType());
				}
			}
//			if (relistvo!=null) {
//				for(int i=0;i<relistvo.size();i++) {
//					ReservationVO vo = new ReservationVO();
//					vo = relistvo.get(i);
//					
//					list.add(vo.getR_menu());
//					
//				}
//				TreeSet<String> distinctlist = new TreeSet<String>(list);
//				list = new ArrayList<String>(distinctlist);
//				
//			}
		
		}
		
		
		
		ModelAndView mv = new ModelAndView();
		mv.addObject("state",state);
		mv.setViewName("index/choiceMenu");
		if(m_id!=null) {
			mv.addObject("list",list);
		}
		return mv;
		
	}
	@RequestMapping("todayMenu.do")
	public ModelAndView TodayMenu(HttpServletRequest request, HttpServletResponse response,HttpSession session) {
	
		System.out.println("todayMenu 들어옴");
		String category = (String)session.getAttribute("category");
		List<ProductVO> list = service.randomlist(category);
		for(int i=0; i<list.size();i++) {
			ProductVO vo = new ProductVO();
			vo = list.get(i);
			System.out.println(vo.getS_brand_name());
		}
	
		System.out.println("todayMenu.do로 옴");
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index/todayMenu");
		mv.addObject("list",list);
		return mv;
	}
	
	//검색버튼 눌렀을때
			@ResponseBody
			@RequestMapping(value="/nexasearch")
			public void nexasearch(Model model,String boardType_val,HttpServletRequest request,HttpServletResponse response) {
				
				System.out.println("-----------nexasearch---------------");
				System.out.println(boardType_val);
				List<BoardVO> list = new ArrayList<BoardVO>();
				try {
					request.setCharacterEncoding("euc-kr");
					list= service.nexalist();
				} catch (UnsupportedEncodingException e) {
					e.printStackTrace();
				}	
				DataSet ds = new DataSet("ar");
				ds.addColumn("BOARDTYPE",DataTypes.INT,256);
				ds.addColumn("b_no", DataTypes.INT,256);
				ds.addColumn("userid", DataTypes.STRING,100);
				ds.addColumn("title", DataTypes.STRING,40);
				ds.addColumn("b_content", DataTypes.STRING,200);
				ds.addColumn("b_date", DataTypes.STRING,256);
				
				for(BoardVO vo: list) {
					int row = ds.newRow();
					ds.set(row, "BOARDTYPE", vo.getBoardType());
					ds.set(row, "b_no", vo.getB_no());
					ds.set(row, "userid", vo.getUserId());
					ds.set(row, "title", vo.getTitle());
					ds.set(row, "b_content", vo.getB_content());
					
					if(vo.getB_date()!=null) {
					System.out.println("데이터확인---->"+vo.getB_content());
					ds.set(row, "b_date", vo.getB_date().split(" ")[0]);
					}
				}
				PlatformData pData = new PlatformData();
				pData.addDataSet(ds);
				HttpPlatformResponse res = 
						new HttpPlatformResponse(response,PlatformType.CONTENT_TYPE_XML,"utf-8");
				
				res.setData(pData);
				try {
					res.sendData();
				}catch (Exception e) {
					// TODO: handle exception
					System.out.println("nexacro send data error" + e);
					e.printStackTrace();
				}
			}
			
		
	
	@ResponseBody
	@RequestMapping(value="/hello")
	public void deptsearch(String searchType,String keyword, HttpServletRequest request,HttpServletResponse response) {	

		System.out.println("hihi");
		System.out.println(searchType + keyword);
		
		
		List<BoardVO> list = new ArrayList<BoardVO>();
		try {
			request.setCharacterEncoding("euc-kr");
			
			list= service.nexalistsearch(searchType,keyword);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}	
//		System.out.println(list.get(0).getB_content());
		DataSet ds = new DataSet("ar");
		ds.addColumn("BOARDTYPE",DataTypes.INT,256);
		ds.addColumn("b_no", DataTypes.INT,256);
		ds.addColumn("userid", DataTypes.STRING,100);
		ds.addColumn("title", DataTypes.STRING,40);
		ds.addColumn("b_content", DataTypes.STRING,200);
		ds.addColumn("b_date", DataTypes.STRING,256);
		
		for(BoardVO vo: list) {
			int row = ds.newRow();
			ds.set(row, "BOARDTYPE", vo.getBoardType());
			ds.set(row, "b_no", vo.getB_no());
			ds.set(row, "userid", vo.getUserId());
			ds.set(row, "title", vo.getTitle());
			ds.set(row, "b_content", vo.getB_content());
			
			if(vo.getB_date()!=null) {
			System.out.println("데이터확인---->"+vo.getB_content());
			ds.set(row, "b_date", vo.getB_date().split(" ")[0]);
			}
		}
		PlatformData pData = new PlatformData();
		pData.addDataSet(ds);
		HttpPlatformResponse res = 
				new HttpPlatformResponse(response,PlatformType.CONTENT_TYPE_XML,"utf-8");
		
		res.setData(pData);
		try {
			res.sendData();
		}catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	@ResponseBody
	@RequestMapping(value="/del_b_no")
	public void del_b_no(String b_no, HttpServletRequest request,HttpServletResponse response) {	

		System.out.println("b_no"+b_no);
		
		
		List<BoardVO> list = new ArrayList<BoardVO>();
		try {
			request.setCharacterEncoding("euc-kr");
			
			service.nexadel(b_no);
			list= service.nexalist();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}	
//		System.out.println(list.get(0).getB_content());
		DataSet ds = new DataSet("ar");
		ds.addColumn("BOARDTYPE",DataTypes.INT,256);
		ds.addColumn("b_no", DataTypes.INT,256);
		ds.addColumn("userid", DataTypes.STRING,100);
		ds.addColumn("title", DataTypes.STRING,40);
		ds.addColumn("b_content", DataTypes.STRING,200);
		ds.addColumn("b_date", DataTypes.STRING,256);
		
		for(BoardVO vo: list) {
			int row = ds.newRow();
			ds.set(row, "BOARDTYPE", vo.getBoardType());
			ds.set(row, "b_no", vo.getB_no());
			ds.set(row, "userid", vo.getUserId());
			ds.set(row, "title", vo.getTitle());
			ds.set(row, "b_content", vo.getB_content());
			
			if(vo.getB_date()!=null) {
			System.out.println("데이터확인---->"+vo.getB_content());
			ds.set(row, "b_date", vo.getB_date().split(" ")[0]);
			}
		}
		PlatformData pData = new PlatformData();
		pData.addDataSet(ds);
		HttpPlatformResponse res = 
				new HttpPlatformResponse(response,PlatformType.CONTENT_TYPE_XML,"utf-8");
		
		res.setData(pData);
		try {
			res.sendData();
		}catch (Exception e) {
			// TODO: handle exception
		}
	}

}
