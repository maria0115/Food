package com.food.service;

import com.food.domain.ReservationVO;

public interface ReservationService {

	public void insertReservation(ReservationVO vo);
	
	public void selectReservation(ReservationVO vo);
}
