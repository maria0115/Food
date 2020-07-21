package com.food.controller;

import java.util.List;
import java.util.Locale;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.domain.MemberVO;
import com.food.service.MemberService;
import com.google.gson.Gson;

@Controller
public class MemberController {
		@Autowired
		private MemberService memberService;

		
		@RequestMapping("singupMember.do")
		public String insertMember(MemberVO vo) {
			memberService.insertMember(vo);
			return "redirect:/singup.do";
		}
		
		//아이디 중복체크
		@ResponseBody
		@RequestMapping(value = "/checkId.do", produces = "application/text; charset=utf-8")
		public String checkId(MemberVO vo) {
			String result = "아이디 확인";
			MemberVO checkvo = memberService.checkId(vo);
			System.out.println("<<<<<"+checkvo);
			if(checkvo != null) {
				result = "중복된 아이디입니다";
			}
			return result;
		}
	
		//이메일 중복체크
				@ResponseBody
				@RequestMapping(value = "/checkEmail.do", produces = "application/text; charset=utf-8")
				public String checkEmail(MemberVO vo) {
					System.out.println("here>>>>" + vo.getM_email());
					String result2 = "이메일 확인";
					MemberVO checkvo2 = memberService.checkEmail(vo);
					System.out.println(">>>>>>>"+checkvo2);
					if(checkvo2 != null) {
						result2 = "중복된 이메일 입니다";
					}
					return result2;
				}
		
		

		 //로그인 구현
		 @ResponseBody
		@RequestMapping(value = "login.do",produces = "application/text; charset=utf-8")
			public String login(MemberVO vo, HttpSession session) {
				MemberVO new_vo = new MemberVO();
				new_vo =  memberService.userSignIn(vo);
				String result ="";
				if(new_vo != null ) {
					if(new_vo.getM_name() != null) {
						result = "<span class=\"in\">"+new_vo.getM_name()+" 님 환영합니다.";
						session.setAttribute("user_name", new_vo.getM_name());
						session.setAttribute("user_id", new_vo.getM_id());
						session.setAttribute("user_Info", new_vo);
						
					}
				}
				return result;
		  
		 } 
		 //로그아웃 기능 구현
		 @ResponseBody
			@RequestMapping(value="logout.do")
			public void logout(HttpSession session) {
				session.removeAttribute("user_name");
				session.removeAttribute("user_id");
				session.removeAttribute("user_Info");
			
			}
			
	
		// 비밀번호 찾기
		 @RequestMapping("/find-password.do")
		 @ResponseBody
			public String findPassword(MemberVO vo) {
			 MemberVO result = memberService.findPassword(vo);//아이디를 보냄 아이디에 맞는 비밀번호를 가져옴
			 String rst="";
				System.out.println(result);
//				ModelAndView mv = new ModelAndView();
				//이메일이 없다면 다시 현재페이지로 리턴
				if (result == null || result.getM_pass() == null) {
					System.out.println(1);
					rst="1";
//					mv.addObject("result",'1');
//					mv.setViewName("/index/find_form");
					

			
				}else {//이메일이 있다면 ,저장돼있는 메일로 비밀번호가 담긴 메일을 보냄
					System.out.println(2);
				  gmailSend(result);//저장되어있는 메일로 비밀번호 보냄
//				  mv.addObject("result",'2');
//				  mv.setViewName("/index/find_pass");
				  rst="2";
				  
				}
				return rst;	
			}
		 
		//이메일 보내는 기능
			public static void gmailSend(MemberVO vo) {
		        String user = "salcho94@naver.com"; // 네이버일 경우 네이버 계정, gmail경우 gmail 계정
		        String password = "5vorkakdtls";   // 패스워드

		        // SMTP 서버 정보를 설정한다.
		        Properties prop = new Properties();
		        prop.put("mail.smtp.host", "smtp.naver.com"); 
		        prop.put("mail.smtp.port", 465); 
		        prop.put("mail.smtp.auth", "true"); 
		        prop.put("mail.smtp.ssl.enable", "true"); 
		        prop.put("mail.smtp.ssl.trust", "smtp.naver.com");
		        
		        Session session = Session.getDefaultInstance(prop, new javax.mail.Authenticator() {
		            protected PasswordAuthentication getPasswordAuthentication() {
		                return new PasswordAuthentication(user, password);
		            }
		        });
 
		        try {
		            MimeMessage message = new MimeMessage(session);
		            message.setFrom(new InternetAddress(user));

		            //수신자메일주소
		            message.addRecipient(Message.RecipientType.TO, new InternetAddress(vo.getM_email())); 

		            // Subject
		            message.setSubject(" 비밀번호"); //메일 제목을 입력

		            // Text
		            message.setText(" 비밀번호찾기 결과입니다.\n=================================================\n"+vo.getM_id()+" 님의 비밀번호는 '"+vo.getM_pass()+"'입니다 .\n"+"=================================================\n");//메일 내용을 입력
		              
		           
		            // send the message
		            Transport.send(message); ////전송
		            System.out.println("message sent successfully...");
		        } catch (AddressException e) {
		            // TODO Auto-generated catch block
		            e.printStackTrace();
		        } catch (MessagingException e) {
		            // TODO Auto-generated catch block
		            e.printStackTrace();
		        }
		    }
 
			 
			
		// 아이디 찾기
			@RequestMapping(value = "/findid.do", method = RequestMethod.POST)
			public String find_id(HttpServletResponse response, @RequestParam("m_email") String m_email, Model md) throws Exception{
				md.addAttribute("m_id", memberService.find_id(response, m_email));
				return "/index/find_id";
			}
		 
			
			
			//자동완성 검색기능 구현
			@RequestMapping(value = "search.do", method = RequestMethod.GET, produces="text/plain;charset=UTF-8")
			@ResponseBody
			public String json(HttpServletRequest request, Locale locale, Model model) {    
			
			    String value = request.getParameter("value");
			    System.out.println(value);
			   List<MemberVO>reslut= memberService.search(value);
			    Gson gson = new Gson(); 
			    return gson.toJson(reslut); //배열 반환
			}

			
			 
			
			
}
		

