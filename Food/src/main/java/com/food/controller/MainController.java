package com.food.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.service.MainService;

@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	@RequestMapping("/main.do")
	public ModelAndView mainpagetag(HttpServletRequest request) {
		
//			var apiURI = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=37dbde539fcdc8cd3ebd105942639fc4";
//		    $.ajax({
//		        url: apiURI,
//		        dataType: "json",
//		        type: "GET",
//		        async: "false",
//		        success: function(resp) {
//		            console.log(resp);
//		            console.log("현재온도 : "+ (resp.main.temp- 273.15) );
//		            console.log("현재습도 : "+ resp.main.humidity);
//		            console.log("날씨 : "+ resp.weather[0].main );
//		            console.log("상세날씨설명 : "+ resp.weather[0].description );
//		            console.log("날씨 이미지 : "+ resp.weather[0].icon );
//		            console.log("바람   : "+ resp.wind.speed );
//		            console.log("나라   : "+ resp.sys.country );
//		            console.log("도시이름  : "+ resp.name );
//		            console.log("구름  : "+ (resp.clouds.all) +"%" );       
		String requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=37dbde539fcdc8cd3ebd105942639fc4";
		URL url = new URL(requestUrl);
        URLConnection conn = url.openConnection();
        BufferedReader bufferedReader = null;
        bufferedReader = new BufferedReader( new InputStreamReader(conn.getInputStream()) );

        //System.out.println(bufferedReader.readLine());
        
        resultSet= parseJSONData(bufferedReader);
        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = (JSONObject)jsonParser.parse(bufferedReader);

        resultSet = jsonObject.toJSONString();

		System.out.println("hi");
		
		ModelAndView mv= new ModelAndView();
		mv.setViewName("index/main");
		
		return mv;
	}

}
