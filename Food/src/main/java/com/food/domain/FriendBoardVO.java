package com.food.domain;

public class FriendBoardVO {
	
	private int f_no; //글번호
	private String f_title; //글제목 
	private String m_id; //작성자
	private String f_content; //글내용
	private String f_addr1; //도로명주소
	private String f_addr2; //상세주소
	private int f_membercnt; //참여인원
	private int f_viewcount; //조회수
	private String f_date; //등록일
	private String f_joindate; //약속날짜
	private int f_port; //생성된 포트번호
	
	
	
	public String getF_addr1() {
		return f_addr1;
	}
	public void setF_addr1(String f_addr1) {
		this.f_addr1 = f_addr1;
	}
	public String getF_addr2() {
		return f_addr2;
	}
	public void setF_addr2(String f_addr2) {
		this.f_addr2 = f_addr2;
	}
	public int getF_port() {
		return f_port;
	}
	public void setF_port(int f_port) {
		this.f_port = f_port;
	}
	public int getF_no() {
		return f_no;
	}
	public void setF_no(int f_no) {
		this.f_no = f_no;
	}
	public String getF_title() {
		return f_title;
	}
	public void setF_title(String f_title) {
		this.f_title = f_title;
	}
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
	public String getF_content() {
		return f_content;
	}
	public void setF_content(String f_content) {
		this.f_content = f_content;
	}
	public int getF_membercnt() {
		return f_membercnt;
	}
	public void setF_membercnt(int f_membercnt) {
		this.f_membercnt = f_membercnt;
	}
	public int getF_viewcount() {
		return f_viewcount;
	}
	public void setF_viewcount(int f_viewcount) {
		this.f_viewcount = f_viewcount;
	}
	public String getF_date() {
		return f_date;
	}
	public void setF_date(String f_date) {
		this.f_date = f_date;
	}
	
	
	
	
   

}
