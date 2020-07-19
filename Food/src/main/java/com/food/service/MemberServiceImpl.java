package com.food.service;

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
	
}
