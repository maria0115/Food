package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.BlackListVO;
import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;

@Repository("managerDAO")
public class managerDAOImpl implements managerDAO{
	
	@Autowired
	private SqlSessionTemplate mybatis;
	

	
	

	//모든 회원정보
	@Override
	public List<MemberVO> listAll() {
		System.out.println("==>ManagerMapper listAll() 호출");
		return mybatis.selectList("managerDAO.listAll");
	}
	
	
	//searchType 타입의 keyword값으로 검색했을때 검색된 회원 숫자
	@Override
	public int searchCount(String searchType, String keyword) {
		System.out.println("==>ManagerMapper searchCount() 호출");
		
		HashMap map = new HashMap();
		map.put("searchType",searchType);
		map.put("keyword",keyword);
	
		return mybatis.selectOne("managerDAO.searchCount",map);
	}

	//회원정보 출력, 검색한 값이 있을때는 검색된 회원을 반환하고 검색한 값이 없을때는 전체회원 정보를 반환한다
	public List<MemberVO> selectBoard(PagingVO pvo, String searchType, String keyword) {
		System.out.println("==>ManagerMapper selectBoard() 호출");
		
		HashMap map = new HashMap();
		map.put("searchType",searchType);
		map.put("keyword",keyword);
		map.put("start",pvo.getStart());
		map.put("end",pvo.getEnd());
		return mybatis.selectList("managerDAO.selectBoard",map);
	}

	//모든 회원 명수
		@Override
		public int allCount() {
			System.out.println("==>ManagerMapper allCount() 호출");
			return mybatis.selectOne("managerDAO.allCount");
		}

		@Override
		public int memberDelete(MemberVO vo) {
			System.out.println("==>ManagerMapper memberDelete() 호출");
			return mybatis.delete("managerDAO.memberDelete",vo);
		}

		@Override
		public int todayHire() {
			System.out.println("==>ManagerMapper todayHire() 호출");
			return mybatis.selectOne("managerDAO.todayHire");
		}

		@Override
		public int yesterdayHire() {
			System.out.println("==>ManagerMapper yesterdayHire() 호출");
			return mybatis.selectOne("managerDAO.yesterdayHire");
		}

		@Override
		public int todayReserv() {
			System.out.println("==>ManagerMapper todayReserv() 호출");
			return mybatis.selectOne("managerDAO.todayReserv");
		}

		@Override
		public int yesterdayReserv() {
			System.out.println("==>ManagerMapper yesterdayReserv() 호출");
			return mybatis.selectOne("managerDAO.yesterdayReserv");
		}

		@Override
		public int todayBoard() {
			System.out.println("==>ManagerMapper todayBoard() 호출");
			return mybatis.selectOne("managerDAO.todayBoard");
		}

		@Override
		public int yesterdayBoard() {
			System.out.println("==>ManagerMapper yesterdayBoard() 호출");
			return mybatis.selectOne("managerDAO.yesterdayBoard");
		}

		@Override
		public int todayBlack() {
			System.out.println("==>ManagerMapper todayBlack() 호출");
			return mybatis.selectOne("managerDAO.todayBlack");
		}

		@Override
		public int yesterdayBlack() {
			System.out.println("==>ManagerMapper yesterdayBlack() 호출");
			return mybatis.selectOne("managerDAO.yesterdayBlack");
		}

		@Override
		public int thisMonth() {
			System.out.println("==>ManagerMapper thisMonth() 호출");
			return mybatis.selectOne("managerDAO.thisMonth");
		}

		@Override
		public int totalMember() {
			System.out.println("==>ManagerMapper totalMember() 호출");
			return mybatis.selectOne("managerDAO.totalMember");
		}

		@Override
		public int todayReview() {
			System.out.println("==>ManagerMapper todayReview() 호출");
			return mybatis.selectOne("managerDAO.todayReview");
		}

		@Override
		public HashMap membercount() {
			System.out.println("==>ManagerMapper membercount() 호출");
			HashMap map = new HashMap();
			
			map.put("list", mybatis.selectList("managerDAO.membercount"));
			System.out.println(map);
			return map;
		}


		


}
