package com.food.handler;


import java.util.HashMap;
import java.util.Map;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpSession;
import javax.tools.DocumentationTool.Location;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;




public class ReplyHandler extends TextWebSocketHandler {
	
   public static Map<String, WebSocketSession> userSessionsMap = new HashMap<String, WebSocketSession>();
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
            System.out.println("strs[3]:"+strs[3]);
            if(strs != null && strs.length == 4) {
               String cmd = strs[0]; //알람 보내는 곳 타입
               String receiveNum = strs[1]; //알람 보낸 글 번호
               String receiveDate = strs[2]; //알람 보낸 시간
               
               String receiveId = strs[3]; //알람 받는 유저
               
               
               //작성자가 로그인 해서 있다면
               WebSocketSession boardWriterSession = userSessionsMap.get(receiveId);
               
               //받는 사람이 로그인 중일때
               if(boardWriterSession != null) {
                  TextMessage tmpMsg = new TextMessage(payloadMessage);
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