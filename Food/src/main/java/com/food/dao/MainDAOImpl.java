package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;
import com.food.domain.WishlistVO;

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

	@Override
	public List<BoardVO> nexalist() {
		// TODO Auto-generated method stub
		return mybatis.selectList("mainDao.nexalist");
	}

	@Override
	public List<BoardVO> nexalistsearch(String searchType,String keyword) {
		// TODO Auto-generated method stub
		HashMap map = new HashMap();

		map.put("searchType", searchType);
		map.put("keyword", keyword);
		
		System.out.println(map.get("keyword"));
		

		
		return mybatis.selectList("mainDao.nexalistsearch",map);
	}

	@Override
	public void nexadel(String b_no) {
		mybatis.delete("mainDao.nexadel",b_no);
		
	}

	@Override
	public List<WishlistVO> todaywish(WishlistVO vo) {
		mybatis.insert("mainDao.todaywish",vo);
		
		return mybatis.selectList("mainDao.todaywishmemeberlist");
	}

	@Override
	public List<WishlistVO> todaywishmem(String user_id) {
		// TODO Auto-generated method stub
		return mybatis.selectList("mainDao.todaywishmem",user_id);
	}

	@Override
	public void deltodaywish(WishlistVO wvo) {
		// TODO Auto-generated method stub
		mybatis.delete("mainDao.deltodaywish", wvo);
	}

}
