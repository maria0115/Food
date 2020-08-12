package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.MainDAO;
import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;
import com.food.domain.WishlistVO;

@Service("MainService")
public class MainServiceImpl implements MainService{
	
	@Autowired
	private MainDAO dao;

	@Override
	public void mainpagetag() {
		
		
	}

	@Override
	public MemberVO othermenulist(String m_id) {
		MemberVO result = dao.othermenulist(m_id);
		return result;
	}

	@Override
	public List<ReservationVO> otherrecomandlist(String[] othermost) {
		
		return dao.otherrecomandlist(othermost);
	}

	@Override
	public List<ProductVO> randomlist(String category) {
		
		return dao.randomlist(category);
	}
	
	@Override
	public List<BoardVO> nexalist() {
		
		return dao.nexalist();
	}

	@Override
	public List<BoardVO> nexalistsearch(String searchType,String keyword) {
		// TODO Auto-generated method stub
		return dao.nexalistsearch(searchType,keyword);
	}

	@Override
	public void nexadel(String b_no) {
		dao.nexadel(b_no);
		
	}

	@Override
	public List<WishlistVO> todaywish(WishlistVO vo) {
		// TODO Auto-generated method stub
		return dao.todaywish(vo);
	}

	@Override
	public List<WishlistVO> todaywishmem(String user_id) {
		// TODO Auto-generated method stub
		return dao.todaywishmem(user_id);
	}

	@Override
	public void deltodaywish(WishlistVO wvo) {
		// TODO Auto-generated method stub
		 dao.deltodaywish(wvo);
	}

}
