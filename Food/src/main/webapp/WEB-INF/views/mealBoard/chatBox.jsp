<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page session="true"%>
<html>
<head>
<meta charset="UTF-8">
<title>chatBox</title>
<%
	String f_title = request.getParameter("f_title");
%>

<link rel="stylesheet" href="/Food/resources/css/chat.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>

	    
<div id="container">
	<main>
	<div>
		<div id="header">
			<h3 style="text-align: center;"><%=f_title %></h3>
		</div>
		<div id="chat">
		<!-- <ul>
			<li class="you">
				<div class="entete">
					<span class="status green"></span>
					<h2>상대방아이디</h2>
				</div>
				<div class="message">
					메세지
				</div>
			</li>
			<li class="me">
				<div class="entete">
					<h2>내아이디</h2>
					<span class="status blue"></span>
				</div>
				<div class="message">
					메세지
				</div>
			</li>
		</ul> -->
		</div>
		<footer>
			<textarea id="messagearea"placeholder="메세지를 입력해주세요"></textarea>
			<input style="height: 30%;" class="btn btn-primary" onclick="send();" type="button" id="sendBtn" value="전송하기">
		</footer>
		</div>
	</main>
</div>
<script src="/Food/resources/js/jquery/jquery-2.2.4.min.js"></script>
<script src="/Food/resources/js/chat.js"></script>

</body>
</html>