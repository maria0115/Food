package com.food.service;

import java.util.List;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.ReservationVO;
import com.food.domain.WishlistVO;

public interface MainService {
	
	public void mainpagetag();
	
	public MemberVO othermenulist(String m_id);
	
	public List<ReservationVO> otherrecomandlist(String[] othermost);

	public List<ProductVO> randomlist(String category);
	
	public List<BoardVO> nexalist();
	
	public List<BoardVO> nexalistsearch(String searchType,String keyword);
	
	public void nexadel(String b_no);
	
	public List<WishlistVO> todaywish(WishlistVO vo);
	
	public void deltodaywish(WishlistVO wvo);
	
	
	public List<WishlistVO> todaywishmem(String user_id);
	
	
}
