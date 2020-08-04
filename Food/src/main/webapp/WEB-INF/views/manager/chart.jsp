<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chart Page</title>
</head>
<body>
<jsp:include page="sideBar.jsp">
		<jsp:param value='' name='folder' />
	</jsp:include>
	<div class="all-content-wrapper">
		<jsp:include page="wrapper.jsp">
			<jsp:param value='' name='' />
		</jsp:include>
	</div>
</body>
</html>