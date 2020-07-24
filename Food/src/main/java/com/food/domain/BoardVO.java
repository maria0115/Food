package com.food.domain;

import java.io.File;

import org.springframework.web.multipart.MultipartFile;

public class BoardVO {
	private int boardType;
    private int b_no;
    private String title;
    private String userId;
    private String b_content;
    private String b_date;
    private int viewCount;
    private String f_addr1;
    private String f_addr2;
    private int f_membercnt;
    private String f_date;
    private int f_port;
    private int f_joincnt;
    private String d_suspect;
    private String r_date;
    private String r_visit_date;
    private int r_ppl_cnt;
    private String r_menu;
    private String seq;
    private int v_star;
    private String v_fileName;
    private long v_fileSize;
    
    //파일처리할때 필요함 !!!
    MultipartFile file;
    
    
    public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
		
		if(!file.isEmpty()) { //파일이 있다면!
			//MultipartFile에서 파일명과 크기만 얻어오기 -> DB입력
			this.v_fileName = file.getOriginalFilename();//파일명
			this.v_fileSize = file.getSize();//파일크기
			
			File f=  new File("/Food/resources/upload/"+v_fileName);
			try {
				file.transferTo(f);
			} catch (Exception e) {
				System.out.println("파일전송실패"+e.getMessage());
				e.printStackTrace();
			}
		}
	}
    
	public int getV_star() {
		return v_star;
	}
	public void setV_star(int v_star) {
		this.v_star = v_star;
	}
	public String getV_fileName() {
		return v_fileName;
	}
	public void setV_fileName(String v_fileName) {
		this.v_fileName = v_fileName;
	}
	public long getV_fileSize() {
		return v_fileSize;
	}
	public void setV_fileSize(long v_fileSize) {
		this.v_fileSize = v_fileSize;
	}
	public int getBoardType() {
		return boardType;
	}
	public void setBoardType(int boardType) {
		this.boardType = boardType;
	}
	public String getSeq() {
		return seq;
	}
	public void setSeq(String seq) {
		this.seq = seq;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public int getViewCount() {
		return viewCount;
	}
	public void setViewCount(int viewCount) {
		this.viewCount = viewCount;
	}
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
	public int getF_membercnt() {
		return f_membercnt;
	}
	public void setF_membercnt(int f_membercnt) {
		this.f_membercnt = f_membercnt;
	}
	public String getF_date() {
		return f_date;
	}
	public void setF_date(String f_date) {
		this.f_date = f_date;
	}
	public int getF_port() {
		return f_port;
	}
	public void setF_port(int f_port) {
		this.f_port = f_port;
	}
	public int getF_joincnt() {
		return f_joincnt;
	}
	public void setF_joincnt(int f_joincnt) {
		this.f_joincnt = f_joincnt;
	}
	public String getD_suspect() {
		return d_suspect;
	}
	public void setD_suspect(String d_suspect) {
		this.d_suspect = d_suspect;
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
	public int getR_ppl_cnt() {
		return r_ppl_cnt;
	}
	public void setR_ppl_cnt(int r_ppl_cnt) {
		this.r_ppl_cnt = r_ppl_cnt;
	}
	public String getR_menu() {
		return r_menu;
	}
	public void setR_menu(String r_menu) {
		this.r_menu = r_menu;
	}
	public int getB_no() {
		return b_no;
	}
	public void setB_no(int b_no) {
		this.b_no = b_no;
	}
	public String getB_content() {
		return b_content;
	}
	public void setB_content(String b_content) {
		this.b_content = b_content;
	}
	public String getB_date() {
		return b_date;
	}
	public void setB_date(String b_date) {
		this.b_date = b_date;
	}
    
    
    
}