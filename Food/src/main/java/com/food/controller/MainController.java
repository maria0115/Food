package com.food.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.food.service.MainService;

@Controller
@RequestMapping("index/")
public class MainController {
	
	@Autowired
	private MainService service;
	
	@RequestMapping("main.do")
	public void mainpagetag() {
		System.out.println("hi");
	}

}
