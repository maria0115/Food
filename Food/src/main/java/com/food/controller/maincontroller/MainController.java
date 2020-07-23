package com.food.controller.maincontroller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;

import java.net.URL;
import java.net.URLConnection;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;


import com.food.service.MainService;


@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
//	@RequestMapping("{step}.do")
//	public String start(@PathVariable String step) {
//		return step;
//	}
	
	@RequestMapping("/main.do")//, method = RequestMethod.POST
	public ModelAndView mainpagetag(HttpServletRequest request, HttpServletResponse response) {
		BufferedReader bufferedReader = null;
		String resultSet = null;
		String resultweather ="";
		String resulttemp="";
		try {
			//날씨 api의 주소값
			String requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=37dbde539fcdc8cd3ebd105942639fc4";
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
            JSONObject weather = (JSONObject) mainweather.get(1);
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

		Client client = new Client(resultweather,resulttemp);	//1
		String result = client.getResult();
		ServletOutputStream out;
		System.out.println("result :"+result);

		System.out.println("hi main");
		
		ModelAndView mv= new ModelAndView();
		mv.setViewName("index/main");
		
		return mv;
	}

}
