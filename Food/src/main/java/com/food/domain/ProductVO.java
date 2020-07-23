package com.food.domain;

import java.io.File;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class ProductVO{
	
	private String s_brand_name;
	private String p_id;
	private String p_name;
	private String p_price;
	
	public String getS_brand_name() {
		return s_brand_name;
	}
	public void setS_brand_name(String s_brand_name) {
		this.s_brand_name = s_brand_name;
	}
	public String getP_id() {
		return p_id;
	}
	public void setP_id(String p_id) {
		this.p_id = p_id;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	public String getP_price() {
		return p_price;
	}
	public void setP_price(String p_price) {
		this.p_price = p_price;
	}
	
	
	
}