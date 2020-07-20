package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.food.dao.managerDAOImpl;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;

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
	
}
