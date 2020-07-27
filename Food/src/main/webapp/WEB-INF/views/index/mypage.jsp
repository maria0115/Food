<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>Alazea - Gardening &amp; Landscaping HTML Template</title>

    <!-- Favicon -->
	<link rel="icon" href="resources/img/core-img/favicon.ico">
	<link rel="stylesheet" href="/Food/resources/css/mypage.css">
	<!-- Core Stylesheet -->
	<link rel="stylesheet" href="/Food/resources/css/style.css">
    <link rel="stylesheet" href="/Food/resources/css/mymenu.css">
    
    <jsp:include page="header.jsp">
		<jsp:param value='' name='folder' />
	</jsp:include>

	
	
</head>

<body>
    <!-- ##### Portfolio Area End ##### -->
	
	<c:if test="${not empty sessionScope.user_id}">
    	<div class="table100 ver4 m-b-110">
				<form action="membermodify.do">
					<table data-vertable="ver4">
						<thead>
							<tr class="row100 head">
								<th colspan="2" class="column100 column8" data-column="column8">My information</th>
								<th colspan="2" class="column100 column8" data-column="column8">Favorite Food</th>
								
							</tr>
						</thead>
						<tbody>
							<tr class="row100">
								<td class="column100 column1" data-column="column1">User_id</td>
								<td class="column100 column2" data-column="column2">${user_Info.m_id}</td>
								<td rowspan="2" class="column100 column1" data-column="column1">1위</td>
								<td rowspan="2" class="column100 column1" data-column="column1">${user_Info.m_most}</td>
							
							</tr>

							<tr class="row100">
								<td class="column100 column1" data-column="column1">User_name</td>
								<td class="column100 column2" data-column="column2">${user_Info.m_name}</td>
								
								
							</tr>

							<tr class="row100">
								<td class="column100 column1" data-column="column1">User_Email</td>
								<td class="column100 column2"  data-column="column2">${user_Info.m_email}</td>
								<td rowspan="2" class="column100 column1" data-column="column1">2위</td>
								<td rowspan="2" class="column100 column1" data-column="column1">${user_Info.m_most}</td>
								
							
							
							</tr>
  
							<tr class="row100">
								<td class="column100 column1" data-column="column1">User_PhoneNumber</td>
								<td class="column100 column2" data-column="column2">${user_Info.m_tel}</td>
								
								
							</tr>

							<tr class="row100">
								<td class="column100 column1" data-column="column1">User_BirthDay</td>
								<td class="column100 column2" data-column="column2">${user_Info.m_birth}</td>
								<td rowspan="2" class="column100 column1" data-column="column1">3위</td>
								<td rowspan="2" class="column100 column1" data-column="column1">${user_Info.m_most}</td>
								
							</tr>

							<tr class="row100">
								<td class="column100 column1" data-column="column1">User_Address</td>
								<td class="column100 column2" data-column="column2">${user_Info.m_area}</td>
								
								
							</tr>
							<tr class="row100">
								<td colspan="4" ><a href="membermodify.do" class="modifybtn"><button class ="btn btn-dark">수정하기</button></a></td>
							</tr>
								
							<tr class="row100">
								<th colspan="4" >My history</th>
							</tr>
															
							<tr class="row100">
								<td class="column100 column1" data-column="column1">내가쓴글</td>
								<td colspan="3" class="column100 column2" data-column="column2">${board}</td>
							</tr>
								<tr class="row100">
								<td class="column100 column1" data-column="column1">User_id</td>
								<td colspan="3" class="column100 column2" data-column="column2">${user_Info.m_id}</td>
							</tr>
								<tr class="row100">
								<td class="column100 column1" data-column="column1">User_id</td>
								<td colspan="3" class="column100 column2" data-column="column2">${user_Info.m_id}</td>
							</tr>
								<tr class="row100">
								<td class="column100 column1" data-column="column1">User_id</td>
								<td colspan="3" class="column100 column2" data-column="column2">${user_Info.m_id}</td>
							</tr>
							
							
							</tbody>
							</table> 
							</form>
				</div>
			
				
				
				
    
	</c:if>
	
	<c:if test="${empty sessionScope.user_id}">
	<div class="container">
	<div id="nomember">현재 네이버 아이디로 이용중 입니다.
	네이버 아이디로 로그인시 오늘뭐먹지 MY Page 서비스를 이용하실수 없습니다.
	회원가입후 MY Page 서비스 이용가능 합니다.감사합니다.<br><button  onclick="history.go(-1);" class="btn btn-danger">되돌아가기</button> 

	</div>
	</div>

	</c:if>
	

    

    <!-- ##### Footer Area Start ##### -->
    <%@ include file="footer.jsp" %>
    <!-- ##### Footer Area End ##### -->

    <!-- ##### All Javascript Files ##### -->
    <script src="/Food/resources/js/mymenu.js"></script>
    <!-- jQuery-2.2.4 js -->
<!--     <script src="resources/js/jquery/jquery-2.2.4.min.js"></script> -->
<!--     Popper js -->
<!--     <script src="resources/js/bootstrap/popper.min.js"></script> -->
<!--     Bootstrap js -->
<!--     <script src="resources/js/bootstrap/bootstrap.min.js"></script> -->
<!--     All Plugins js -->
<!--     <script src="resources/js/plugins/plugins.js"></script> -->
<!--     Active js -->
<!--     <script src="resources/js/active.js"></script> -->
 
    
</body>

</html>