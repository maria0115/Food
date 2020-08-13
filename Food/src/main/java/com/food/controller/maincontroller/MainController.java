package com.food.controller.maincontroller;

import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Base64.Encoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.bind.DatatypeConverter;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.food.service.MainService;
import com.food.service.StoreService;


@Controller
public class MainController {

	@Autowired
	private MainService service;

	@Autowired
	StoreService storeService;
	//	@RequestMapping("{step}.do")
	//	public String start(@PathVariable String step) {
	//		return step;
	//	}

	@RequestMapping("/main.do")//, method = RequestMethod.POST
	public ModelAndView mainpagetag(String longitude,String latitude,String region,HttpServletRequest request, HttpServletResponse response,HttpSession session) {

		region="금천구";
		if((longitude!=null)&&(latitude!=null)&&(region!=null)) {
		session.setAttribute("longitude", longitude);
		session.setAttribute("latitude", latitude);
		session.setAttribute("region", region);
		}else {
			longitude = (String)session.getAttribute("longitude");
			latitude = (String)session.getAttribute("latitude");
			region = (String)session.getAttribute("region");
		}
		
		System.out.println("l"+longitude+"2"+latitude+"3"+region);
		String what = "main";
		BufferedReader bufferedReader = null;
		String resultSet = null;
		String resultweather ="";
		String resulttemp="",search="";
		HashMap map = new HashMap();
		if(what.equals("main"))
		{

			
			try {
				//날씨 api의 주소값https:
				String requestUrl = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=37dbde539fcdc8cd3ebd105942639fc4";
				URL url = new URL(requestUrl);
				// url을 열어 그 안에 내용 가지고 오기
				URLConnection conn = url.openConnection();

				bufferedReader = new BufferedReader( new InputStreamReader(conn.getInputStream()) );

				//System.out.println(bufferedReader.readLine());
				//json구조의 data를 받아옴
				resultSet = bufferedReader.readLine();

				//		} catch (IOException e) {
				//			// TODO Auto-generated catch block
				//			e.printStackTrace();
				//		}
				//		try {

				JSONParser parser = new JSONParser();
				//json으로 읽기 위한 파싱
				JSONObject jsonObject = (JSONObject) parser.parse(resultSet);
				bufferedReader.close();
				String result = jsonObject.toJSONString();
				//            System.out.println(result);
				//main에 담긴 온도정보를 가져오기
				JSONObject maintemp = (JSONObject) jsonObject.get("main");
				//한국의 온도 설정에 맞도록 -273.15
				Float temp = (float) (Float.valueOf(maintemp.get("temp").toString())-273.15);
				//weather에 담긴 날씨상태를 가져오기
				JSONArray mainweather = (JSONArray) jsonObject.get("weather");
				// weather에 담긴 jsonarray에 0번째 값 가져오기
				JSONObject weather=new JSONObject();
				try {
					weather= (JSONObject) mainweather.get(1);
				}
				catch(Exception e){
					weather = (JSONObject) mainweather.get(0);
				}
				//weather에서 description 가져오기
				resultweather = weather.get("description").toString();
				//            System.out.println(resultweather.get("description"));
				//            JSONArray weather =  (JSONArray) mainweather.get(1);
				resulttemp = String.format("%.2f",temp);
				//            System.out.println(maintemp);			
				System.out.println("온도결과값 : "+resulttemp);
				System.out.println(result);
				System.out.println("날씨결과값 : "+resultweather);

			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			String most="",fileName="";
			Client client = new Client(resultweather,resulttemp,region,most,search,fileName,what);	//1
			String result = client.getResult();
			String ip = client.getIp();
			ServletOutputStream out;
			System.out.println("result :"+result);
			
			System.out.println(ip);
			
//			Date today = new Date();
//		    System.out.println(today);
//		        
//		    SimpleDateFormat date = new SimpleDateFormat("yyyy/MM/dd");
//		    SimpleDateFormat time = new SimpleDateFormat("hh:mm:ss a");
//		        
//		    System.out.println("Date: "+date.format(today));
//		    System.out.println("Time: "+time.format(today));
//		    
//		    session.setAttribute("longitude", longitude);



			System.out.println("hi main");

			JSONParser reparser = new JSONParser();
			Object obj;
			String reondo="";
			String nalsi="";
			String category="";
			String menu="";
			String address="";
			try {
				obj = reparser.parse( result );
				JSONObject jsonObj = (JSONObject) obj;
				reondo = (String) jsonObj.get("온도");
				nalsi = (String) jsonObj.get("날씨");
				category = (String) jsonObj.get("카테고리");
				menu = (String) jsonObj.get("메뉴");
				address = (String) jsonObj.get("주소");
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			session.setAttribute("category", category);


			map.put("reondo", resulttemp);
			map.put("nalsi", nalsi.toString());
			map.put("category", category.toString());
			map.put("menu", menu.toString());
			map.put("address", address.toString());
		}
		//		System.out.println(map.get("reondo"));
		ModelAndView mv= new ModelAndView();
		mv.setViewName("index/main");
	
		if(what.equals("main")) {
			mv.addObject("map",map);
			mv.addObject("kor",storeService.getkor());
			mv.addObject("eng",storeService.geteng());
			mv.addObject("jap",storeService.getjap());
			mv.addObject("min",storeService.getmin());
			mv.addObject("east",storeService.geteast());
			mv.addObject("ch",storeService.getch());
		}
		
		
		return mv;
		
	}
	@ResponseBody
	@RequestMapping(value = "/imagecalorie2.do", method = RequestMethod.POST, produces="text/plain;charset=UTF-8")//, method = RequestMethod.POST
	public String imagecalorie(MultipartHttpServletRequest multipartRequest,HttpServletRequest request, HttpServletResponse response) {
		System.out.println("imagecalorie.do 컨트롤러 들어옴");
//		request.getParameter("temp");
		MultipartFile file = multipartRequest.getFile("uploadFile");
		System.out.println(file.getOriginalFilename());
		
		String filePath = "C:\\Users\\Canon\\Documents\\Food\\Food\\src\\main\\webapp\\resources\\tmp\\";
		HandlerFile handlerFile = new HandlerFile(multipartRequest, filePath);
		
		Map<String, List<String>> fileNames = handlerFile.getUploadFileName();
		// 실제저장파일명과 원본파일명 DB저장처리
		
		System.err.println(fileNames.toString());
		String fileName = handlerFile.getFileFullPath();
		String resultweather="",resulttemp="",region="",most="",search="";
		String what="image";
		Client client = new Client(resultweather,resulttemp,region,most,search,fileName,what);
		String result = client.getResult();

		System.out.println("result :"+result);
		System.out.println("fileName :"+fileName);
		
		JSONParser parser = new JSONParser();
		//json으로 읽기 위한 파싱
		String name = "", calorie="",percent="";

		Object obj = new Object();
		
		try {
			obj = parser.parse( result );
			JSONObject jsonObj = (JSONObject) obj;
			name = (String) jsonObj.get("이름");
			calorie = (String) jsonObj.get("칼로리");
			percent = (String) jsonObj.get("정확도");
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		JSONObject jsonObj = (JSONObject) obj;
		ModelAndView mv= new ModelAndView();
		mv.addObject("name", name);
		mv.addObject("calorie", calorie);
		mv.addObject("percent", percent);
		mv.setViewName("mypage/imagecalorie");
		System.out.println(name+calorie+percent);
		String resultper = name+","+calorie+","+percent;
		return resultper;
		
	}
//	@ResponseBody
//	@RequestMapping(value = "/startpage.do", produces="text/plain;charset=UTF-8")//, method = RequestMethod.POST
//	public void startpage(,HttpSession session) {
//		System.out.println(longitude);
//		
//	
//	}
	
	// ***************** WordCloud 페이지 *******************************
		// 이거는 사이드바에서 누르면 그냥 넘겨주는 겁니다 스텝타게 하고 지우시면 됩니다.*********
		@RequestMapping("/manager/wordCloud.do")
		public void wordcloud() {
			System.out.println("워드클라우드 컨트롤러");
			
			return;
		}
		// ****************************************************************
		
		// ************** WordCloud 버튼누르면 밸류값 넘어가는거임!!! **************
		@ResponseBody
		@RequestMapping("/manager/wordCloudbtn.do")
		public void wordcloudbtn(@RequestParam(value="keyword") String keyword) throws IOException {
			System.out.println("워드클라우드 버튼 컨트롤러");
			System.out.println(keyword);
			String search = keyword;
			String resultweather="",resulttemp="",region="",most="",fileName="";
			String what="wordcloud";
			Client client = new Client(resultweather,resulttemp,region,most,search,fileName,what);
			String result = client.getResult();

			System.out.println("result :"+result);
			
			byte[] decodedImg = Base64.getDecoder().decode(result.getBytes(StandardCharsets.UTF_8));
			System.out.println("성공");
			try {

				Path destinationFile = Paths.get("C:\\Users\\Canon\\Documents\\Food\\Food\\src\\main\\webapp\\resources\\wordcloud\\", "WordCloud.jpg");
				Files.write(destinationFile, decodedImg);

			    }catch(Exception e) {
			        System.out.println(e.getStackTrace()+e.getMessage());
			    }
			}
			



			
}
		// ****************************************************************
		





