package com.food.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.food.domain.BoardVO;
import com.food.domain.MemberVO;
import com.food.domain.PagingVO;
import com.food.domain.ProductVO;
import com.food.domain.StoreListVO;

@Repository("memberdao")
public class MemberDAOImpl  implements MemberDAO{ 
	@Autowired
	private SqlSessionTemplate mybatis;


	@Override
	public void insertMember(MemberVO vo) {
		mybatis.insert("memberDAO.insertMember",vo);
		
	}


	@Override
	public HashMap userSingIn(MemberVO vo) {
		System.out.println("로그인옴");
		HashMap map = new HashMap();
		map.put("m_id",vo.getM_id());
		map.put("m_pass", vo.getM_pass());
	
		return mybatis.selectOne("memberDAO.selectMember",map);
	}


	@Override
	public MemberVO checkId(MemberVO vo) {
		return mybatis.selectOne("memberDAO.selectID",vo);
	}

//아이디 찾기
	@Override
	public String find_id(String m_email) {
			return mybatis.selectOne("memberDAO.find_id", m_email);
	}

//이메일 중복확인
	@Override
	public MemberVO checkEmail(MemberVO vo) {
		return mybatis.selectOne("memberDAO.selectEmail",vo);
	}


	
	
//이메일 발송 
	public MemberVO findPassword(MemberVO vo) {
		System.out.println("===> Mybatis findpassword() 호출");
		//아이디를 member db에 넘겨서 이메일주소와 아이디 비밀번호를 받아온다.
		MemberVO result = mybatis.selectOne("memberDAO.findpassword", vo);
		
		return result;
	}


	@Override
	public List<ProductVO> search(String value) {
		return mybatis.selectList("memberDAO.search",value);
	}

	


	@Override
	public void updateMember(MemberVO vo) {
		mybatis.update("memberDAO.updateMember",vo);
		
	}


	@Override
	public void deleteMember(MemberVO vo) {
		mybatis.delete("memberDAO.deleteMember",vo);
		
	}


	@Override
	public int shopmember(MemberVO vo) {
		return mybatis.insert("memberDAO.shopmember",vo);
		
	}


	@Override
	public List<BoardVO> myreview(MemberVO vo,PagingVO pvo) {
		HashMap map = new HashMap();
		map.put("s_brand_name", vo.getS_brand_name());
		map.put("start", pvo.getStart());
		map.put("end", pvo.getEnd());
		
		return mybatis.selectList("memberDAO.myreview",map);
	}


	@Override
	public int countBoard(MemberVO vo) {
		
		return mybatis.selectOne("memberDAO.countBoard",vo);
	}


	@Override
	public MemberVO getshopuser(MemberVO vo) {
		
		return mybatis.selectOne("memberDAO.getshopuser",vo);
	}


	@Override
	public int updatestore(StoreListVO vo) {
		
		return mybatis.update("memberDAO.updatestore",vo);
	}


	@Override
	public int updateproduct(ProductVO vo) {
		
		return mybatis.update("memberDAO.updateproduct",vo);
	}


	@Override
	public int updateshopMember(MemberVO vo) {
		
		return mybatis.update("memberDAO.updateshopMember",vo);
	}
 
	
}
