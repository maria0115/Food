package com.food.basic;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
import com.food.service.FriendBoardService;
import com.food.service.boardService;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.datatype.DataType;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	@Autowired
	FriendBoardService friendBoardservice;
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		return "index/"+step;
	}
	
	
	//관리자페이지에서 검색버튼 눌렀을때
		@RequestMapping(value="/nexalist.do")
		public String nexalist() {
			
			return "redirect:/resources/nexacro/index.jsp";
		}
		
	//검색버튼 눌렀을때
		@RequestMapping(value="/nexasearch.do")
		public String nexasearch(Model model) {
			
			System.out.println("-----------nexasearch---------------");
			List<BoardVO>list= friendBoardservice.nexalist();		
			
			// 나중에 넥사크로의 데이터셋으로 바인딩 될 이름
			DataSet ds = new DataSet("ar"); 
			// 데이터 셋에 들어갈 이름과 자료형이 동일해야 한다.
			ds.addColumn("boardtype",DataTypes.INT,256);
			ds.addColumn("b_no", DataTypes.INT,256);
			ds.addColumn("userId", DataTypes.STRING,100);
			ds.addColumn("title", DataTypes.STRING,40);
			ds.addColumn("b_content", DataTypes.STRING,200);
			ds.addColumn("b_date", DataTypes.DATE,256);
			for(BoardVO vo1 : list){
				int row = ds.newRow();
				ds.set(row, "boardtype", vo1.getBoardType());
				ds.set(row, "b_no", vo1.getB_no());
				ds.set(row, "userId", vo1.getUserId());
				ds.set(row, "title", vo1.getTitle());
				ds.set(row, "b_content", vo1.getB_content());
				ds.set(row, "b_date", vo1.getB_date());
				System.out.println("데이터확인---->"+vo1.getTitle());
				
				
			}
			model.addAttribute("ds", ds);
			
			return "manager/all";
		}
	
	
}
