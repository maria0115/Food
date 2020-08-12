package com.food.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.food.domain.AlarmVO;
import com.food.domain.BlackListVO;
import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ReservationVO;


public interface ManagerService {

	
	public List<MemberVO> listAll();


	public int allCount();

	public int searchCount(String searchType, String keyword);

	public List<MemberVO> selectBoard(PagingVO pvo,String searchType,String keyword);


	public int memberDelete(MemberVO vo);


	public int todayHire();


	public int yesterdayHire();


	public int todayReserv();


	public int yesterdayReserv();


	public int todayBoard();


	public int yesterdayBoard();


	public int todayBlack();


	public int yesterdayBlack();


	public int thisMonth();


	public int totalMember();


	public int todayReview();


	public List<Map> membercount();


	public List<Integer> mealTime();


	public List<Map> categoryDayCount();


	public List<Map> memberYear();


	public List<Map> topStore();


	public void updateVisiter();


	public List<Map> visitCount();


	public void insertVisiter();


	public String selectVisiter();


	public List<Map> mealDayCount();


	public void insertQaAlarm(AlarmVO vo);


	public int countAlarm(String receiveId);


	public List<AlarmVO> selectAlarm(String id);


	




	


}
