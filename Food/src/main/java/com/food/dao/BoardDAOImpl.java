package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;


@Repository("boardDAO") 
public class BoardDAOImpl implements BoardDAO {
	
	@Autowired
	private SqlSessionTemplate mybatis;

	@Override
	public int insertBoard(BoardVO vo) {
		System.out.println("==>BoardMapper insertBoard() 호출");
		System.out.println("seq:"+vo.getSeq());
		return mybatis.insert("boardDAO.insertBoard",vo);
	}

	@Override
	public int updateBoard(BoardVO vo) {
		System.out.println("==>BoardMapper updateBoard() 호출");
		return mybatis.update("boardDAO.updateBoard",vo);
	}

	
	@Override
	public List<BoardVO> selectBoard(BoardVO vo,PagingVO pvo, String searchType, String keyword) {
		System.out.println("==>BoardMapper selectBoard() 호출");
		
		HashMap map = new HashMap();
		map.put("boardType",vo.getBoardType());
		map.put("searchType",searchType);
		map.put("keyword",keyword);
		map.put("start",pvo.getStart());
		map.put("end",pvo.getEnd());
		
		return mybatis.selectList("boardDAO.selectBoard",map);
	}
	
	@Override
	public int countBoard(BoardVO vo) {
		System.out.println("==>BoardMapper countBoard() 호출");
		return mybatis.selectOne("boardDAO.countBoard",vo);
	}

	@Override
	public int deleteBoard(BoardVO vo) {
		System.out.println("==>BoardMapper deleteBoard() 호출");
		return mybatis.delete("boardDAO.deleteBoard",vo);
	}

	@Override
	public BoardVO boardView(BoardVO vo) {
		System.out.println("==>BoardMapper boardView() 호출");
		mybatis.update("boardDAO.boardViewcount",vo);
		return mybatis.selectOne("boardDAO.boardView",vo);
	}

	@Override
	public int searchCount(String searchType, String keyword) {
		HashMap map = new HashMap();
		map.put("searchType", searchType);
		map.put("keyword",keyword);
		
		return mybatis.selectOne("boardDAO.searchCount",map);
	}

	//밥친구 게시판 참여하기 버튼 눌렀을때
	@Override
	public int mealjoin(BoardVO vo) {
		System.out.println("==>BoardMapper mealjoin() 호출");
	    return mybatis.insert("boardDAO.mealjoin",vo);
		
		
	}

	public List<BoardVO> selectReview(BoardVO vo, PagingVO pvo, String searchType, String keyword) {
		System.out.println("==>BoardMapper selectReview() 호출");
		
		HashMap map = new HashMap();
		map.put("boardType",vo.getBoardType());
		map.put("searchType",searchType);
		map.put("keyword",keyword);
		map.put("start",pvo.getStart());
		map.put("end",pvo.getEnd());
		map.put("s_brand_name", vo.getS_brand_name());
		
		return mybatis.selectList("boardDAO.selectReview",map);
		
	}

	@Override
	public List<BoardVO> searchboard(MemberVO mvo) {
		return mybatis.selectList("boardDAO.searchboard",mvo);
	}

	//밥친구 게시판 취소하기 버튼 눌렀을때
	@Override
	public int mealcancel(BoardVO vo) {
		System.out.println("==>BoardMapper mealcancel() 호출");
	    return mybatis.update("boardDAO.mealcancel",vo);
	}
 
	public void insertReply(BoardVO vo) {
		mybatis.insert("boardDAO.insertReply",vo);
	}

	@Override
	public List<BoardVO> selectReply(BoardVO vo) {
		System.out.println("selectReply DAO");
		return mybatis.selectList("boardDAO.selectReply",vo);
	}

	@Override
	public void modifyReply(BoardVO vo) {
		System.out.println("modifyReply DAO");
		mybatis.update("boardDAO.modifyReply",vo);
	}

	public void deleteReply(BoardVO vo) {
		System.out.println("deleteReply DAO");
		mybatis.delete("boardDAO.deleteReply",vo);
	}


}
