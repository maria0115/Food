package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.BoardVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;
import com.food.service.ReservationService;

@Repository("reservdao")
public class ReservationDAOImpl implements ReservationDAO {

	@Autowired
	private SqlSessionTemplate mybatis;
	
	@Override
	public void insertReservation(ReservationVO vo) {
		System.out.println("insertReservation DAO 도착");
		int seq = mybatis.selectOne("reservationDAO.seqGet");
		vo.setR_number(seq);
		mybatis.insert("reservationDAO.insertReserv", vo);
	}

	@Override
	public List<ReservationVO> selectReservation(ReservationVO vo) {
		System.out.println("selectReservation DAO 도착");
		return mybatis.selectList("reservationDAO.selectReserv", vo);
	}

	@Override
	public ReservationVO reservationDetail(ReservationVO vo) {
		System.out.println("reservationDetail DAO 도착");
		return mybatis.selectOne("reservationDAO.detailReserv", vo);
	}

	@Override
	public int countReserv(PagingVO vo) {
		System.out.println("countReserv DAO 도착");
		return mybatis.selectOne("reservationDAO.countReserv",vo);
	}

	@Override
	public List<ReservationVO> selectBoard(PagingVO vo) {
		System.out.println(vo.getEnd());
		System.out.println(vo.getStart());
		System.out.println(vo.getTotal());
		System.out.println(vo.getM_id());
		return mybatis.selectList("reservationDAO.selectBoard", vo);
	}

	@Override
	public void deleteReservation(ReservationVO vo) {
		
		mybatis.delete("reservationDAO.deleteReserv", vo);
	}

	
	
	
	
}
