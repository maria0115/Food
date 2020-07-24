<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page session="true"%>
<html>
<head>
<meta charset="UTF-8">
<title>chatBox</title>
<%
	String f_title = request.getParameter("title");
	String m_id = request.getParameter("userId");

%>

<link rel="stylesheet" href="/Food/resources/css/chat.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.5/sockjs.min.js"></script>

	    
<div id="container">
	<main>
	<div>
	<input type="hidden" value='<%=m_id%>'
	            id='chat_id' />
	    
	
		<div id="header">
			<h3 style="text-align: center;"><%=f_title %></h3>
		</div>
		<!-- 채팅메세지를 주고받는 부분 -->
		<div id="chat">
		</div>
		<footer>
			<input type="text" id="messagearea" placeholder="메세지를 입력해주세요">
			<input style="height: 30%;" class="btn btn-primary" type="button" onkeyup="enterkey()" id="sendBtn" value="전송하기">
		</footer>
		</div>
	</main>
</div>
<script src="/Food/resources/js/jquery/jquery-2.2.4.min.js"></script>
<script src="/Food/resources/js/chat.js"></script>
<script src="/Food/resources/js/word.js"></script>

</body>
</html>