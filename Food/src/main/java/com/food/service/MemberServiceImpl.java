package com.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.MemberDAO;
import com.food.domain.MemberVO;

@Service("memberService")
public class MemberServiceImpl  implements MemberService{
	@Autowired
	private MemberDAO memberdao;


	public int idCheck(String id) {
		int cnt=memberdao.idCheck(id);
		return cnt;
	}


	@Override
	public void insertMember(MemberVO vo) {
	       memberdao.insertMember(vo);
		
	}
	
}
