package com.food.handler;


import java.util.HashMap;
import java.util.Map;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;




public class ReplyHandler extends TextWebSocketHandler {
	Map<String, WebSocketSession> userSessionsMap = new HashMap<String, WebSocketSession>();
	String id;
		
	//서버에 접속이 성공 했을때
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		 	super.afterConnectionEstablished(session);
	        System.out.println("클라이언트 접속됨");

	        Map<String, Object> map = session.getAttributes();
	        id = (String)map.get("userId");
	        System.out.println("id:"+id);
	        userSessionsMap.put(id,session);
	}
	
	//소켓에 메세지를 보냈을때
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		 	String payloadMessage = (String) message.getPayload();
	        System.out.println("서버에 도착한 메시지:"+payloadMessage);
	        if(StringUtils.isNotEmpty(payloadMessage)) {
				String[] strs = payloadMessage.split(",");
				if(strs != null && strs.length == 5) {
					String cmd = strs[0];
					String receiveNum = strs[1]; 
					String receiveDate = strs[2];
					String recieveContent = strs[3];
					String receiveId = strs[4];
					
					//작성자가 로그인 해서 있다면
					WebSocketSession boardWriterSession = userSessionsMap.get(receiveId);
					
					if("reply".equals(cmd) && boardWriterSession != null) {
						TextMessage tmpMsg = new TextMessage(id + "님이 " + 
											"<a type='external' href='/Food/detail?b_no="+receiveNum+"'>" + receiveNum + "</a> 번 게시글에 댓글을 남겼습니다.");
						boardWriterSession.sendMessage(tmpMsg);
					
					}
	        }
	        }
	        
		
	}


	//연결 해제될때
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		 super.afterConnectionClosed(session, status);
	        System.out.println("클라이언트 접속해제");
	}
	 @Override
	    public void handleTransportError(WebSocketSession session,
	            Throwable exception) throws Exception {
	        super.handleTransportError(session, exception);
	        System.out.println("전송오류 발생");
	    }


	

}