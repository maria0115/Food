package com.food.handler;


import java.util.Map;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;




public class ReplyHandler extends TextWebSocketHandler {
	
	
		
	//서버에 접속이 성공 했을때
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		 	super.afterConnectionEstablished(session);
	        System.out.println("클라이언트 접속됨");

	        Map<String, Object> map = session.getAttributes();
	        String id = (String)map.get("userId");
	        System.out.println("id:"+id);
	}
	
	//소켓에 메세지를 보냈을때
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		 	String payloadMessage = (String) message.getPayload();
	        System.out.println("서버에 도착한 메시지:"+payloadMessage);
	        session.sendMessage(new TextMessage("ECHO : " + payloadMessage));
	        
	        Map<String, Object> map = session.getAttributes();
	        String userId = (String)map.get("userId");
	        System.out.println("전송자 아이디:"+userId);
		
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