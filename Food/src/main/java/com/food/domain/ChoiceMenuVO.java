package com.food.domain;

import java.io.File;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class ChoiceMenuVO{
	
	private String choiceMenu;
	private String choiceFname;
	
	
	MultipartFile file; //*******file 변수명 폼에 <input type='file' name='file'>
	
	public MultipartFile getFile() {
		return file;
	}
	public void setFile(MultipartFile file) {
		this.file = file;
		
		if(!file.isEmpty()) {//파일이있다면
			//MultipartFile에서 파일명과 크기만 얻어오기 - > DB에 입력
			this.choiceFname = file.getOriginalFilename();
		
			
			// 실제파일로 저장하기
			File f = new File("C:\\Users\\Canon\\Documents\\Food\\Food\\src\\main\\webapp\\resources\\img\\sample-img\\"+choiceFname);
			try {
				file.transferTo(f);		
			} catch (Exception e) {
				System.out.println("파일전송실패 : " + e.getMessage());
				e.printStackTrace();
			}
		}
	}
	
	
	public String getChoiceMenu() {
		return choiceMenu;
	}
	public void setChoiceMenu(String choiceMenu) {
		this.choiceMenu = choiceMenu;
	}
	public String getChoiceFname() {
		return choiceFname;
	}
	public void setChoiceFname(String choiceFname) {
		this.choiceFname = choiceFname;
	}
	
	
}