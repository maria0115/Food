package com.food.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.ReservationVO;
import com.food.service.ReservationService;

@Repository("reservdao")
public class ReservationDAOImpl implements ReservationDAO {

	@Autowired
	private SqlSessionTemplate mybatis;
	
	@Override
	public void reservInsert(ReservationVO vo) {
		System.out.println("reservInsert DAO 도착");
		mybatis.insert("reservationDAO.insertReserv", vo);
		
	}

}
