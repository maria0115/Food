package com.food.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.domain.MemberVO;

@Service("MainDAO")
public class MainDAOImpl implements MainDAO{
	
	@Autowired
	private SqlSessionTemplate mybatis;

	@Override
	public MemberVO othermenulist(String m_id) {
		MemberVO vo = new MemberVO();
		vo.setM_id(m_id);
		
		System.out.println(vo.getM_id());
		MemberVO result = mybatis.selectOne("mainDao.membermost", vo);
		
		
		return result;
		
	}

}
