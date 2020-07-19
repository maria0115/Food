package com.food.service;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.MemberDAO;
import com.food.domain.MemberVO;

@Service("memberService")
public class MemberServiceImpl  implements MemberService{
	@Autowired
	private MemberDAO memberdao;



	@Override
	public void insertMember(MemberVO vo) {
	       memberdao.insertMember(vo);
		
	}


	@Override
	public MemberVO userSignIn(MemberVO vo) {
		return memberdao.userSingIn(vo);
	}


	@Override
	public MemberVO checkId(MemberVO vo) {
		return memberdao.checkId(vo);
	}


	@Override
	public String find_id(HttpServletResponse response, String m_email)  throws Exception{ 
		
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		String id = memberdao.find_id(m_email);
		
		if (id == null) {
			out.println("<script>");
			out.println("alert('가입된 아이디가 없습니다.');");
			out.println("history.go(-1);");
			out.println("</script>");
			out.close();
			return null;
		} else {
			return id;
		}



	}

	
	
}
