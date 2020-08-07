<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
    <%
        request.setCharacterEncoding("utf-8");
        String user_id = request.getParameter("userId");
        String f_title = request.getParameter("title");
        
        if(user_id == null) {
        	user_id = "비회원";
        }
    
    %>
    
    
   
<!DOCTYPE html>
<html>
<head>
 
<meta charset="UTF-8">
<title>Chat</title>
<link rel="stylesheet" href="/Food/resources/css/chat.css">
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>
<body>
  <div class="chat-container">
        <div class="chat-header">
            <button id="close" class="header-btn"></button>
           	<h3 style="text-align: center;"><%=f_title %></h3>
             <span id="username"><%=user_id %></span>
        </div>
        <form>
            <div id="monitor" class="chatbox" contentEditable="true">
                <div class="user"><%=user_id%></div>
            </div>
            <div class="text-box">
                
                <textarea id="msg" placeholder="대화내용을 입력해주세요"></textarea>
                <input id="send" type="button" value="전송" onClick="sendMsg();" /> 
                
         </div>
        </form>
</div>
</body>
 
 
 
<script>
 
    
var URL = "ws://192.168.0.17:8080/Food/mealBoard/chatroom/";
var webSocket = new WebSocket(URL+"${user_Info.m_id}");
console.log(webSocket);
webSocket.onopen = function(e) {
    console.log(e);
    $('#userid').html("${user_Info.m_id}");
    sendHello('${user_Info.m_id}');
}
webSocket.onclose = function(e) {
	sendMsg('sad');
	if (e.type == "close") {
    	console.log(e.type);
    }
}
webSocket.onmessage = function(e) {
	console.log(e);
	myid='${user_Info.m_id}';
	try{
		data=JSON.parse(e.data);
		if(data.header.cmd =="message"){
			if(data.header.sender == myid){
				var div_ = $('<div>');
				var div1_ = $('<div>');
				var pre_ = $('<pre>');
				var div2_ =$('<div>');
				div_.addClass('width100');
				div1_.addClass('receive');
				div2_.html(data.header.sender);
				div1_.append(div2_);
					
				div2_.addClass('chat-id');
				pre_.html(data.body.msg);
				div1_.append(pre_);
				div_.append(div1_);
				$('#chat-msg').append(div_);
				$('html, body').scrollTop(document.body.scrollHeight);
			}else{
				var div_ = $('<div>');
				var div1_ = $('<div>');
				var pre_ = $('<pre>');
				var div2_ =$('<div>');
				div_.addClass('width100');
				div1_.addClass('send');
				div2_.html(data.header.sender);
				div1_.append(div2_);
				div2_.addClass('chat-id');
				pre_.html(data.body.msg);
				div1_.append(pre_);
				div_.append(div1_);
				$('#chat-msg').append(div_);
				$('html, body').scrollTop(document.body.scrollHeight);
			}
			
		}else if(data.header.cmd=="system"){
			var div_ = $('<div>');
			div_.addClass('chat-system');
			div_.html(data.body.msg);
			$('#chat-msg').append(div_);
			$('html, body').scrollTop(document.body.scrollHeight);
		}else if(data.header.cmd=="close"){
			var div_ = $('<div>');
			div_.addClass('chat-system');
			div_.html(data.body.msg);
			$('#chat-msg').append(div_);
			$('html, body').scrollTop(document.body.scrollHeight);
		}
	}catch(e){}
}
$('#send_msg').click(function(){
	sendMsg($('#msg').val());
	$('#msg').val("");
});
$('#msg').keydown(function(event){
	if( event.which === 13 && event.shiftKey) {
		$('#msg').val($('#msg').val()+"\n");
		event.preventDefault();
	}else if( event.which === 13) {
		sendMsg($('#msg').val());
		event.preventDefault();
		$('#msg').val("");
	}	
});
function sendMsg(msg){
	var data_ = new Object();
	var body_= new Object();
	var header_ = new Object();
	header_ = JSON.parse('${users}');
	header_.cmd = "message";
	header_.sender = "${user_Info.m_id}";
	data_.header = header_;
	data_.body = body_;
	body_.msg = msg;
	console.log(JSON.stringify(data_));
	webSocket.send(JSON.stringify(data_));
}
function sendHello(id){
	var data_ = new Object();
	var body_= new Object();
	var header_ = new Object();
	header_ = JSON.parse('${users}');
	header_.cmd = "system";
	header_.sender = "${user_Info.m_id}";
	data_.header = header_;
	data_.body = body_;
	body_.msg = id + '님이 접속하셨습니다.';
	console.log(JSON.stringify(data_));
	webSocket.send(JSON.stringify(data_));
}
function sendBye(id){
	var data_ = new Object();
	var body_= new Object();
	var header_ = new Object();
	header_ = JSON.parse('${users}');
	header_.cmd = "system";
	header_.sender = "${user_Info.m_id}";
	data_.header = header_;
	data_.body = body_;
	body_.msg = id + '님이 종료하셨습니다.';
	console.log(JSON.stringify(data_));
	webSocket.send(JSON.stringify(data_));
}
</script>
</html>