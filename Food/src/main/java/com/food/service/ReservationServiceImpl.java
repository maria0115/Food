package com.food.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.ReservationDAO;
import com.food.domain.ReservationVO;

@Service("ReservationService")
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	private ReservationDAO reservdao;

	@Override
	public void insertReservation(ReservationVO vo) {
		System.out.println("service insertReservation 도착");
		reservdao.insertReservation(vo);
	}
	
	
}
