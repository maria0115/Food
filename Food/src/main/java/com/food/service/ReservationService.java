package com.food.service;

import java.util.List;

import com.food.domain.ReservationVO;

public interface ReservationService {

	public void insertReservation(ReservationVO vo);
	
	public List<ReservationVO> selectReservation(ReservationVO vo);

	public ReservationVO reservationDetail(ReservationVO vo);
}
