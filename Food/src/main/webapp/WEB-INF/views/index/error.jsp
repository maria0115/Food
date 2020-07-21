<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>error페이지</title>
</head>
<body>

<jsp:include page="../index/header.jsp">
			<jsp:param value='../' name='folder' />
		</jsp:include>

<div>
<div class="jumbotron"><h1 style="text-align: center;"> 수행을 실패했습니다.</h1></div>
</div>


<%@ include file="/WEB-INF/views/index/footer.jsp" %>
</body>
</html>