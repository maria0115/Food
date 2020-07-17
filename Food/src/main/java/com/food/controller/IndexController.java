package com.food.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("index/")
public class IndexController {
	
	@RequestMapping("/{step}.do")
	public String page(@PathVariable String step) {
		return step;
	}
	
	

}
