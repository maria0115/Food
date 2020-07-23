package com.food.controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;
import java.net.URL;
import java.net.URLConnection;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.food.service.MainService;
import com.google.gson.JsonArray;

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

	        //System.out.println(bufferedReader.readLine());
	        resultSet = bufferedReader.readLine();
	        
	       
	        
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String resultweather ="";
		String resulttemp="";

		try {

			JSONParser parser = new JSONParser();
            JSONObject jsonObject = (JSONObject) parser.parse(resultSet);
            bufferedReader.close();
            String result = jsonObject.toJSONString();
//            System.out.println(result);
            JSONObject maintemp = (JSONObject) jsonObject.get("main");
            
            Float temp = (float) (Float.valueOf(maintemp.get("temp").toString())-273.15);
            
            JSONArray mainweather = (JSONArray) jsonObject.get("weather");
            
            JSONObject weather = (JSONObject) mainweather.get(0);
            

            resultweather = weather.get("description").toString();
//            System.out.println(resultweather.get("description"));
//            JSONArray weather =  (JSONArray) mainweather.get(1);
            
            resulttemp = String.format("%.2f",temp);
//            System.out.println(maintemp);
			
			System.out.println("온도결과값 : "+resulttemp);
			
			System.out.println("날씨결과값 : "+resultweather);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		


		System.out.println("hi");
		
		ModelAndView mv= new ModelAndView();
		mv.setViewName("index/main");
		
		return mv;
	}

}
