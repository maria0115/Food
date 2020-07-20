package com.food.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.MemberVO;

@Repository("memberdao")
public class MemberDAOImpl  implements MemberDAO{
	@Autowired
	private SqlSessionTemplate mybatis;


	@Override
	public void insertMember(MemberVO vo) {
		mybatis.insert("memberDAO.insertMember",vo);
		
	}


	@Override
	public MemberVO userSingIn(MemberVO vo) {
		System.out.println("로그인옴");
		return mybatis.selectOne("memberDAO.selectMember",vo);
	}


	@Override
	public MemberVO checkId(MemberVO vo) {
		return mybatis.selectOne("memberDAO.selectID",vo);
	}

//아이디 찾기
	@Override
	public String find_id(String m_email) {
			return mybatis.selectOne("memberDAO.find_id", m_email);
	}

//이메일 중복확인
	@Override
	public MemberVO checkEmail(MemberVO vo) {
		return mybatis.selectOne("memberDAO.selectEmail",vo);
	}

	
	
	
	
	
//이메일 발송 
	public MemberVO findPassword(MemberVO vo) {
		System.out.println("===> Mybatis findpassword() 호출");
		//아이디를 member db에 넘겨서 이메일주소와 아이디 비밀번호를 받아온다.
		MemberVO result = mybatis.selectOne("memberDAO.findpassword", vo);
		
		return result;
	}
}
