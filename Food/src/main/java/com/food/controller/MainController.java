package com.food.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
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
		BufferedReader bufferedReader = null;
		String resultSet = null;
		try {
			String requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=37dbde539fcdc8cd3ebd105942639fc4";
			URL url = new URL(requestUrl);
	        URLConnection conn = url.openConnection();
	        
	        bufferedReader = new BufferedReader( new InputStreamReader(conn.getInputStream()) );

	        System.out.println(bufferedReader.readLine());
	        
	 
//	        JSONParser jsonParser = new JSONParser();
//	        JSONObject jsonObject;
//			jsonObject = (JSONObject)jsonParser.parse(bufferedReader);
//			resultSet = jsonObject.toJSONString();
//			System.out.println(resultSet);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		} catch (ParseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}

        

		System.out.println("hi");
		
		ModelAndView mv= new ModelAndView();
		mv.setViewName("index/main");
		
		return mv;
	}

}
