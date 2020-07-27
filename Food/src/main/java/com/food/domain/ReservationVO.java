package com.food.domain;

public class ReservationVO {

	int r_id;				// 시퀀스
	String r_date;			// 예약한 날짜
	String r_visit_date;	// 방문일
	int r_people_count;		// 인원
	String r_menu_count;	// 메뉴 수량
	String r_menu;			// 메뉴명
	String m_id;			// 회원ID
	String r_note;			// 문의사항
	int r_number;			// 예약 번호
	String r_store_name;	// 매장명
	
	
	public String getR_store_name() {
		return r_store_name;
	}
	public void setR_store_name(String r_store_name) {
		this.r_store_name = r_store_name;
	}
	public int getR_number() {
		return r_number;
	}
	public void setR_number(int r_number) {
		this.r_number = r_number;
	}
	public int getR_id() {
		return r_id;
	}
	public void setR_id(int r_id) {
		this.r_id = r_id;
	}
	public String getR_date() {
		return r_date;
	}
	public void setR_date(String r_date) {
		this.r_date = r_date;
	}
	public String getR_visit_date() {
		return r_visit_date;
	}
	public void setR_visit_date(String r_visit_date) {
		this.r_visit_date = r_visit_date;
	}
	public int getR_people_count() {
		return r_people_count;
	}
	public void setR_people_count(int r_people_count) {
		this.r_people_count = r_people_count;
	}
	public String getR_menu_count() {
		return r_menu_count;
	}
	public void setR_menu_count(String r_menu_count) {
		this.r_menu_count = r_menu_count;
	}
	public String getR_menu() {
		return r_menu;
	}
	public void setR_menu(String r_menu) {
		this.r_menu = r_menu;
	}
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
	public String getR_note() {
		return r_note;
	}
	public void setR_note(String r_note) {
		this.r_note = r_note;
	}
	
	
}