package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;

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

	@Override
	public List<ReservationVO> otherrecomandlist(String[] othermost) {
//		HashMap<String, Object> map = new HashMap<String, Object>();
//		map.put("othermost",othermost);
		for(int i=0; i<othermost.length;i++) {
			System.out.println(othermost[i]);
		}
		return mybatis.selectList("mainDao.othermost", othermost);
	}

	@Override
	public List<ProductVO> randomlist(String category) {

		return mybatis.selectList("mainDao.randomlist",category);
	}

}
