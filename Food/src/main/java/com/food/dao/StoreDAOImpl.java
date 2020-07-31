package com.food.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.BoardVO;
import com.food.domain.StoreListVO;


@Repository("storeDAO") 
public class StoreDAOImpl implements StoreDAO{
	
	@Autowired
	private SqlSessionTemplate mybatis;

	@Override
	public List<StoreListVO> getStoreList(StoreListVO vo) {
		System.out.println("스토어다오요");
		return mybatis.selectList("StoreDAO.getStore",vo);
	}
	@Override
	public StoreListVO storeDetail(StoreListVO vo) {
		System.out.println("storeDetail 다오");
		System.out.println(vo.getS_brand_name());
		System.out.println(vo.getP_name());
		System.out.println(vo.getP_price());

		return mybatis.selectOne("StoreDAO.selecStore",vo);
	}
	@Override
	public List<BoardVO> reviewSelect(StoreListVO vo) {
		System.out.println("리뷰다ㅓ오오오오오>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+vo.getS_brand_name());
		System.out.println("리뷰다ㅓ오오오오오>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+vo.getNowPage());
		return mybatis.selectList("StoreDAO.selecReview",vo);
	}
	@Override
	public List<BoardVO> selectWriterSearchByNameWithPaging(Map map) {
		return mybatis.selectList("StoreDAO.selectWriterSearchByNameWithPaging", map);	
	}
	
	
	@Override
	public int selectWriterCntByNameWithPaging(String searchWord) {
		return mybatis.selectOne("StoreDAO.selectWriterCntByNameWithPaging", searchWord);
	}
	//리뷰가져오기
	@Override
	public List<BoardVO> reviewSelect2(Map map) {
		List<BoardVO> result=mybatis.selectList("StoreDAO.reviewSelect2",map);
	
		return mybatis.selectList("StoreDAO.reviewSelect2",map);
	}
	//리뷰 페이징
	@Override
	public List<BoardVO> reviewPaging(Map map) {
		List<BoardVO> result=mybatis.selectList("StoreDAO.reviewPaging",map);	
				
		return mybatis.selectList("StoreDAO.reviewPaging",map);
	}
	
	
	//가게 리스트가져오기
	@Override
	public List<StoreListVO> selectStoreList(Map map) {
		List<StoreListVO> result=mybatis.selectList("StoreDAO.selectStoreList",map);
		
		return mybatis.selectList("StoreDAO.selectStoreList",map);
	}
	//가게리스트 페이징
	@Override
	public List<StoreListVO> selectStorePaging(Map map) {
		List<StoreListVO> result=mybatis.selectList("StoreDAO.selectStorePaging",map);	
		
		return mybatis.selectList("StoreDAO.selectStorePaging",map);
	}

	
}