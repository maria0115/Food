package com.food.service;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.MemberDAO;
import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.ProductVO;

@Service("memberService")
public class MemberServiceImpl  implements MemberService{
	@Autowired
	private MemberDAO memberdao;


	
	

	@Override
	public void insertMember(MemberVO vo) {
	       memberdao.insertMember(vo);
		
	}


	@Override
	public HashMap userSignIn(MemberVO vo) {
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

	//이메일 중복체크
	@Override
	public MemberVO checkEmail(MemberVO vo) {
		return memberdao.checkEmail(vo);
	}


	public MemberVO findPassword(MemberVO vo) {
		return memberdao.findPassword(vo);
	}


	@Override
	public List<ProductVO> search(String value) {
		return memberdao.search(value);
	}




	@Override
	public void updateMember(MemberVO vo) {
		memberdao.updateMember(vo);
		
	}


	@Override
	public void deleteMember(MemberVO vo) {
		memberdao.deleteMember(vo);
		
	}


	@Override
	public int shopmember(MemberVO vo) {
		return memberdao.shopmember(vo);
		
	}


	@Override
	public List<BoardVO> myreview(MemberVO vo) {
		
		return memberdao.myreview(vo);
	}

 
	
	
	
}
