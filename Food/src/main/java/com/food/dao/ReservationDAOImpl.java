package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;
import com.food.service.ReservationService;

@Repository("reservdao")
public class ReservationDAOImpl implements ReservationDAO {

	@Autowired
	private SqlSessionTemplate mybatis;
	
	@Override
	public int insertReservation(ReservationVO vo) {
		System.out.println("insertReservation DAO 도착");
		int seq = mybatis.selectOne("reservationDAO.seqGet");
		vo.setR_number(seq);
		return mybatis.insert("reservationDAO.insertReserv", vo);
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
	public List<ReservationVO> selectBoard(PagingVO vo,String searchType,String keyword) {
		System.out.println(vo.getStart());
		System.out.println(vo.getEnd());
		System.out.println(vo.getTotal());
		System.out.println(vo.getM_id());
		
		HashMap map = new HashMap();
		map.put("m_id", vo.getM_id());
		map.put("searchType",searchType);
		map.put("keyword",keyword);
		map.put("start",vo.getStart());
		map.put("end",vo.getEnd());
		
		return mybatis.selectList("reservationDAO.selectBoard", map);
	}

	@Override
	public void deleteReservation(ReservationVO vo) {
		
		mybatis.delete("reservationDAO.deleteReserv", vo);
	}

	@Override
	public List<ReservationVO> selectReservation(PagingVO vo) {
		HashMap map = new HashMap();
		map.put("m_id", vo.getM_id());
		map.put("start", vo.getStart());
		map.put("end", vo.getEnd());
		
		return mybatis.selectList("reservationDAO.selectreservation",map);
	}

	@Override
	public int searchCount(String m_id,String searchType, String keyword) {
		HashMap map = new HashMap();
		map.put("m_id", m_id);
		map.put("searchType",searchType);
		map.put("keyword",keyword);
		
		return mybatis.selectOne("reservationDAO.searchCount",map);
	}

	@Override
	public List<ReservationVO> getreser(String r_master) {
		
		return mybatis.selectList("reservationDAO.getreser",r_master);
	}

	
	
	
	
}
