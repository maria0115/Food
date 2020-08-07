package com.food.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.food.domain.BlackListVO;
import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;

public interface managerDAO {

	
	//회원리스트 검색했을 경우 검색한 회원 정보 반환, 검색을 안했을 경우 모든 회원 정보 반환
		public List<MemberVO> selectBoard(PagingVO pvo, String searchType, String keyword);

		int searchCount(String searchType, String keyword);

		List<MemberVO> listAll();

		int allCount();

		int memberDelete(MemberVO vo);

		int todayHire();

		int yesterdayHire();

		int todayReserv();

		int yesterdayReserv();

		int todayBoard();

		int yesterdayBoard();

		int todayBlack();

		int yesterdayBlack();

		int thisMonth();

		int totalMember();

		int todayReview();

		List<Map> membercount();

		List<Integer> mealTime();

		List<Map> categoryDayCount();

		List<Map> memberYear();

		List<Map> topStore();

		void updateVisiter();

		List<Map> visitCount();

		void insertVisiter();

		String selectVisiter();

		List<Map> mealDayCount();
}
