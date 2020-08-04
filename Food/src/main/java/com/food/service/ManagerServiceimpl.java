package com.food.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.food.dao.managerDAOImpl;
import com.food.domain.BlackListVO;
import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;

@Service("ManagerService")
public class ManagerServiceimpl implements ManagerService{
	
	@Autowired
	private managerDAOImpl managerDAO;
	
	
	 public List<MemberVO> listAll(){
		   return managerDAO.listAll();
	   }
	 
	 public int allCount() {
		   return managerDAO.allCount();
	   }
	   public int searchCount(String searchType, String keyword) {
		   return managerDAO.searchCount(searchType,keyword);
	   }


	   public List<MemberVO> selectBoard(PagingVO pvo,String searchType,String keyword) {		   
		return managerDAO.selectBoard(pvo,searchType,keyword);
	   }

	@Override
	public int memberDelete(MemberVO vo) {
		
		return managerDAO.memberDelete(vo);
	}

	@Override
	public int todayHire() {
	
		return managerDAO.todayHire();
	}

	@Override
	public int yesterdayHire() {
		
		return managerDAO.yesterdayHire();
	}

	@Override
	public int todayReserv() {
		
		return managerDAO.todayReserv();
	}

	@Override
	public int yesterdayReserv() {

		return managerDAO.yesterdayReserv();
	}

	@Override
	public int todayBoard() {
		
		return managerDAO.todayBoard();
	}

	@Override
	public int yesterdayBoard() {

		return managerDAO.yesterdayBoard();
	}

	@Override
	public int todayBlack() {

		return managerDAO.todayBlack();
	}

	@Override
	public int yesterdayBlack() {

		return managerDAO.yesterdayBlack();
	}

	@Override
	public int thisMonth() {
		
		return managerDAO.thisMonth();
	}

	@Override
	public int totalMember() {
		
		return managerDAO.totalMember();
	}

	@Override
	public int todayReview() {
	
		return managerDAO.todayReview();
	}

	@Override
	public HashMap membercount() {
		return managerDAO.membercount();
	}


	
	
}
