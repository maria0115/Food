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
	String f_userId = request.getParameter("f_userId");
	String b_no = request.getParameter("b_no");
	String f_cnt = request.getParameter("f_cnt");

%>

<link rel="stylesheet" href="/Food/resources/css/chat.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.5/sockjs.min.js"></script>

	    
<div id="container">
<input type="hidden" value='<%=m_id%>' id='chat_id' />
	    <input type="hidden" value='<%=f_title%>' id='f_title' />
	    <input type="hidden" value='<%=f_userId%>' id="f_userId" />
	    <input type="hidden" value='<%=b_no%>' id='b_no' />
	    <input type="hidden" value='<%=f_cnt%>' id='f_cnt' />
	<main>
	    <div id="chatheader">
	    
        <div id="header" style="text-align: center;font-family: js; font-size: 20px;">
        <label><%=f_title %></label>
        <div id="buttonarea">
        <button class="btn btn-danger" style="width: 40%" onclick="window.open('../manager/addDecla.do?boardType=3','_blank','width=1150 ,height=650');"
			 id="balckbtn">신고하기</button>
			 <button class="btn btn-info join" type="button" id="joinBtn" style="width: 40%" >
			 밥친구확정
			 </button>
		</div>
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
<!-- 채팅기능을 위한 script -->
<script src="/Food/resources/js/chat.js"></script> 


</body>
</html>