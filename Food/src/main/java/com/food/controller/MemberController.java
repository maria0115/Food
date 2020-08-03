package com.food.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Properties;
import java.util.Random;

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
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.food.domain.MemberVO;
import com.food.domain.ProductVO;
import com.food.domain.WishlistVO;
import com.food.service.CartService;
import com.food.service.MemberService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class MemberController {
		@Autowired
		private MemberService memberService;
		
		@Autowired
		private CartService CartService;
	
		@Autowired
		private  JavaMailSender mailSender; 
		 
		
		
		
		 @ResponseBody
			@RequestMapping(value = "/login.do",produces = "application/text; charset=utf-8")
				public String login(MemberVO vo, HttpSession session,WishlistVO wvo) {
				 	System.out.println("로그인.do 들어옴");
				 	HashMap new_vo =  memberService.userSignIn(vo);
					//String result ="";
				 	int wish = CartService.selectCount(vo); 
				 	System.out.println(wish);
					System.out.println("new_vo"+new_vo);
					
					if(new_vo != null ) {
						System.out.println(new_vo.get("M_NAME"));
						System.out.println(new_vo.get("M_ID"));
						if(new_vo.get("M_NAME") != null) {
							//result = "<span class=\"in\">"+new_vo.get("M_NAME")+" 님 환영합니다.";
							session.setAttribute("user_name", new_vo.get("M_NAME"));
							session.setAttribute("user_id", new_vo.get("M_ID"));
							session.setAttribute("user_Info", new_vo);
							session.setAttribute("wish", wish);
							
							
						}
						
					}
					
				        Gson gson = new GsonBuilder().create();
				        String json = gson.toJson(new_vo);
					return json;
			  
			 } 
		
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
		
		 //로그아웃 기능 구현
		@ResponseBody
		@RequestMapping(value="/logout.do")
		public void logout(HttpSession session) {
		   // String SESSION_STATE = "oauth_state";
		   // session.removeAttribute(SESSION_STATE);  
		  // session.removeAttribute("result"); 
			session.removeAttribute("user_name");
			session.removeAttribute("user_id");
			session.removeAttribute("user_Info");
		
		
		}
		
		//블랙리스트 회원 로그아웃
		@RequestMapping(value="/out.do")
		public String logout2(HttpSession session) {
		   // String SESSION_STATE = "oauth_state";
		   // session.removeAttribute(SESSION_STATE);  
		  // session.removeAttribute("result"); 
			session.removeAttribute("user_name");
			session.removeAttribute("user_id");
			session.removeAttribute("user_Info");
		
		
			return "redirect:/main.do";
		}
		
		 
		 @ResponseBody
			@RequestMapping(value="/naverlogout.do")
			public void naverlogout(HttpSession session) {
		
			 session.invalidate();
				
				
			}
			
	
		// 비밀번호 찾기
		 @RequestMapping("/find-password.do")
		 @ResponseBody
			public String findPassword(MemberVO vo) {
			 MemberVO result = memberService.findPassword(vo);//아이디를 보냄 아이디에 맞는 비밀번호를 가져옴
			 String rst="";
				System.out.println(result);
				//이메일이 없다면 다시 현재페이지로 리턴
				if (result == null || result.getM_pass() == null) {
					System.out.println(1);
					rst="1";		
					

			
				}else {//이메일이 있다면 ,저장돼있는 메일로 비밀번호가 담긴 메일을 보냄
					System.out.println(2);
				  gmailSend(result);//저장되어있는 메일로 비밀번호 보냄	
				  rst="2";
				  
				}
				return rst;	
			}
		 
		//이메일 보내는 기능
			public static void gmailSend(MemberVO vo) {
		        String user = "salcho94@naver.com"; // 네이버일 경우 네이버 계정, gmail경우 gmail 계정
		        String password = "1whvmfhwprxm";   // 패스워드

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
			   List<ProductVO>reslut= memberService.search(value);
			    Gson gson = new Gson();  
			    return gson.toJson(reslut); //배열 반환
			}

			
		    
		    
		    // mailSending 코드
			   @ResponseBody
		        @RequestMapping( value = "signEmail.do" , method=RequestMethod.POST )
		        public String  mailSending(HttpServletRequest request, @RequestParam("m_email") String m_email, HttpServletResponse response_email) throws IOException {
		 
		            Random r = new Random();
		            int dice = r.nextInt(4589362) + 49311; //이메일로 받는 인증코드 부분 (난수)
		            
		            String setfrom = "rlaqwe8@gamil.com";
		            String tomail = request.getParameter("m_email"); // 받는 사람 이메일
		            String title = "회원가입 인증 이메일 입니다."; // 제목
		            String content =
		            
		            System.getProperty("line.separator")+ //한줄씩 줄간격을 두기위해 작성
		            
		            System.getProperty("line.separator")+
		                    
		            "안녕하세요 회원님 저희 홈페이지를 찾아주셔서 감사합니다"
		            
		            +System.getProperty("line.separator")+
		            
		            System.getProperty("line.separator")+
		    
		            " 인증번호는 " +dice+ " 입니다. "
		            
		            +System.getProperty("line.separator")+
		            
		            System.getProperty("line.separator")+
		            
		            "받으신 인증번호를 홈페이지에 입력해 주시면 다음으로 넘어갑니다."; // 내용
		            
		            
		            try {
		                MimeMessage message = mailSender.createMimeMessage(); 
		                MimeMessageHelper messageHelper = new MimeMessageHelper(message,
		                        true, "UTF-8");
		 
		                messageHelper.setFrom(setfrom); // 보내는사람 생략하면 정상작동을 안함
		                messageHelper.setTo(tomail); // 받는사람 이메일
		                messageHelper.setSubject(title); // 메일제목은 생략이 가능하다
		                messageHelper.setText(content); // 메일 내용
		                
		                mailSender.send(message);
		            } catch (Exception e) {
		                System.out.println(e);
		            }
		                   
		            System.out.println(dice);
		            return  String.valueOf(dice);
		            
		        }
		    
	
		    
		    //이메일로 받은 인증번호를 입력하고 전송 버튼을 누르면 맵핑되는 메소드.
		    //내가 입력한 인증번호와 메일로 입력한 인증번호가 맞는지 확인해서 맞으면 회원가입 페이지로 넘어가고,
		    //틀리면 다시 원래 페이지로 돌아오는 메소드
		    @ResponseBody
		    @RequestMapping(value = "/signcheckEmail.do", method = RequestMethod.POST)
		     public String join_injeung(@RequestParam("check") String check ) {
		        return check;
		   
		    }
		    
		    
		    //회원정보 수정하는 메서드
		    @RequestMapping("/modify.do")
		    public String memberUpdate(MemberVO vo){
		        memberService.updateMember(vo);
		        return "redirect:mypage.do";
		    } 
		    
		    
		    //회원 탈퇴하기
	          @ResponseBody
	          @RequestMapping("/deleteMember.do")
	          public void memberDelete(MemberVO vo,HttpSession session, @RequestParam("m_id") String m_id){
	              vo.setM_id(m_id);
	              System.out.println("dhasdfadsgasgo"+m_id);
	             memberService.deleteMember(vo);
	              session.removeAttribute("user_name");
	            session.removeAttribute("user_id");
	            session.removeAttribute("user_Info");
	             
	          } 

		    
		    
}
			 
			

		

