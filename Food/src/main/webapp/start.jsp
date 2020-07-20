<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>

<body>

	<%
	

	response.sendRedirect("main.do");
		//response.sendRedirect("qnaboard.do");
		
		
	%>
	
<!-- 	예약 버튼 -->
	<button id='button' onclick="window.open('reservation.do','window_nameddddd','width=780,height=843,left=500,top=100,location=no,status=no,scrollbars=yes');">예약</button>


</body>
</html>