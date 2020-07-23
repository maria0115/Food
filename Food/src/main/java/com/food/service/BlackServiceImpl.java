package com.food.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.BlackDAOImpl;
import com.food.domain.BlackListVO;
import com.food.domain.PagingVO;

@Service("blackService")
public class BlackServiceImpl implements BlackService{

	
	@Autowired
	private BlackDAOImpl blackDAO;
	
	@Override
	public int allCount() {
		
		return blackDAO.allCount();
	}

	@Override
	public int searchCount(String searchType, String keyword) {
		
		return blackDAO.searchCount(searchType, keyword);
	}


	@Override
	public List<HashMap> selectBoard(PagingVO pvo, String searchType, String keyword) {
		
		return blackDAO.selectBoard(pvo, searchType, keyword);
	}

	@Override
	public int blackDelete(BlackListVO vo) {
		
		return blackDAO.blackDelete(vo);
	}

	@Override
	public List<BlackListVO> listAll() {
		
		return blackDAO.listAll();
	}

	@Override
	public int insertBlack(BlackListVO vo,int term) {

		return blackDAO.insertBlack(vo,term);
	}

	@Override
	public List<BlackListVO> listSearch(BlackListVO vo) {
		
		return blackDAO.listSearch(vo);
	}

	@Override
	public int blackUpdate(BlackListVO vo) {
		return blackDAO.blackUpdate(vo);
	}

}
