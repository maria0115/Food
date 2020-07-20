package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.food.domain.MemberVO;
import com.food.domain.PagingVO;

@Repository("managerDAO")
public class managerDAOImpl implements managerDAO{
	
	@Autowired
	private SqlSessionTemplate mybatis;
	

	
	

	//모든 회원정보
	@Override
	public List<MemberVO> listAll() {
		System.out.println("==>MemberMapper listAll() 호출");
		return mybatis.selectList("MemberDAO.listAll");
	}
	
	
	//searchType 타입의 keyword값으로 검색했을때 검색된 회원 숫자
	@Override
	public int searchCount(String searchType, String keyword) {
		System.out.println("==>MemberMapper searchCount() 호출");
		
		HashMap map = new HashMap();
		map.put("searchType",searchType);
		map.put("keyword",keyword);
	
		return mybatis.selectOne("MemberDAO.searchCount",map);
	}

	//회원정보 출력, 검색한 값이 있을때는 검색된 회원을 반환하고 검색한 값이 없을때는 전체회원 정보를 반환한다
	public List<MemberVO> selectBoard(PagingVO pvo, String searchType, String keyword) {
		System.out.println("==>MemberMapper selectBoard() 호출");
		
		HashMap map = new HashMap();
		map.put("searchType",searchType);
		map.put("keyword",keyword);
		map.put("start",pvo.getStart());
		map.put("end",pvo.getEnd());
		return mybatis.selectList("MemberDAO.selectBoard",map);
	}

	//모든 회원 명수
		@Override
		public int allCount() {
			System.out.println("==>MemberMapper allCount() 호출");
			return mybatis.selectOne("MemberDAO.allCount");
		}

		@Override
		public int memberDelete(MemberVO vo) {
			System.out.println("==>MemberMapper memberDelete() 호출");
			return mybatis.delete("MemberDAO.memberDelete",vo);
		}	
		


}
