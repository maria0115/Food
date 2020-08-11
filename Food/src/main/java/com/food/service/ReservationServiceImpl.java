package com.food.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dao.ReservationDAO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;

@Service("ReservationService")
public class ReservationServiceImpl implements ReservationService {

	@Autowired
	private ReservationDAO reservdao;

	@Override
	public int insertReservation(ReservationVO vo) {
		System.out.println("service insertReservation 도착");
		return reservdao.insertReservation(vo);
	}

	@Override
	public List<ReservationVO> selectReservation(ReservationVO vo) {
		System.out.println("service selectReservation 도착");
		return reservdao.selectReservation(vo);
	}

	@Override
	public ReservationVO reservationDetail(ReservationVO vo) {
		System.out.println("service reservationDetail 도착");
		return reservdao.reservationDetail(vo);
	}

	@Override
	public int countReserv(PagingVO vo) {
		System.out.println("service countReserv 도착");
		return reservdao.countReserv(vo);
	}

	@Override
	public List<ReservationVO> selectBoard(PagingVO vo,String searchType,String keyword) {
		return reservdao.selectBoard(vo,searchType,keyword);
	}

	@Override
	public void deleteReservation(ReservationVO vo) {
		reservdao.deleteReservation(vo);
	}
 
	
	@Override 
	public List<ReservationVO> selectReservation(PagingVO vo){
		 
		return reservdao.selectReservation(vo); 
	}

	@Override
	public int searchCount(String m_id,String searchType, String keyword) {
		
		return reservdao.searchCount(m_id,searchType,keyword);
	}

	@Override
	public List<ReservationVO> getreser(String r_master) {
		
		return reservdao.getreser(r_master);
	}


	
	
}
