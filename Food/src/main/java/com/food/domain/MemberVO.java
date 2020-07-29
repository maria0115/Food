package com.food.domain;

public class MemberVO {
	private	String	m_id ;
	private	String	m_name;
	private	String	m_pass;
    private	String	m_tel  ;
	private	String	m_birth;
	private	String	m_area ;
	private	String	m_most  ;
	private	String	m_email ;
	private String m_post;
	private String m_date;

	public String getM_date() {
		return m_date;
	}
	public void setM_date(String m_date) {
		this.m_date = m_date;
	}
	public String getM_post() {
		return m_post;
	}
	public void setM_post(String m_post) {
		this.m_post = m_post;
	}
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
	public String getM_name() {
		return m_name;
	}
	public void setM_name(String m_name) {
		this.m_name = m_name;
	}
	public String getM_pass() {
		return m_pass;
	}
	public void setM_pass(String m_pass) {
		this.m_pass = m_pass;
	}
	public String getM_tel() {
		return m_tel;
	}
	public void setM_tel(String m_tel) {
		this.m_tel = m_tel;
	}
	public String getM_birth() {
		return m_birth;
	}
	public void setM_birth(String m_birth) {
		this.m_birth = m_birth;
	}
	public String getM_area() {
		return m_area;
	}
	public void setM_area(String m_area) {
		this.m_area = m_area;
	}
	public String getM_most() {
		return m_most;
	}
	public void setM_most(String m_most) {
		this.m_most = m_most;
	}
	public String getM_email() {
		return m_email;
	}
	public void setM_email(String m_email) {
		this.m_email = m_email;
	}
	@Override
    public String toString() {
        return "MemberVO [m_id=" + m_id + ", m_pass=" + m_pass + ", m_email=" + m_email +"]";
    }
    

}
