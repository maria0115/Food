package com.food.service;

import java.util.List;

import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;

public interface ReservationService {

	public int insertReservation(ReservationVO vo);
	
	public List<ReservationVO> selectReservation(ReservationVO vo);

	public ReservationVO reservationDetail(ReservationVO vo);

	public List<ReservationVO> selectBoard(PagingVO vo,String searchType,String keyword);

	int countReserv(PagingVO vo);

	public void deleteReservation(ReservationVO vo);

	public List<ReservationVO> selectReservation(PagingVO vo);

	public int searchCount(String m_id,String searchType, String keyword);
}
