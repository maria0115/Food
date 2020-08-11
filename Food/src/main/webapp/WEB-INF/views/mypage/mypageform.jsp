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
    <link rel="stylesheet" href="/Food/resources/css/mypageform.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="/Food/resources/js/calendar.js"></script>
 
</head>

<body>
 <jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
	

    <!-- ##### Portfolio Area End ##### -->
	
	<c:if test="${not empty sessionScope.user_id && sessionScope.grade==1}">
   		<div class ="container">		
		<h1 class="jsjs"> my page </h1>
			<div class ="box">
			환영합니다.${user_Info.M_ID}님<br> 
			저희 홈페이지를 방문해 주셔서 감사합니다.<br>
			회원님의 가입일은 ${user_Info.M_DATE} 입니다.
			
			</div>
		<div class="grid-wrapper">
</div>

  <div class="grid">
    <div class="grid-cell"><a href="mypage.do" class="cen"><span style="color: crimson;">MY INFO</span><br/>회원 정보</a></div>
    <div class="grid-cell"><a href="mywrite.do" class="cen"><span style="color: cornflowerblue;">MY BOARD</span><br/>나의 글목록</a></div>
    <div class="grid-cell"><a href="foodcalorie.do" class="cen"><span style="color: lightcoral;">CALORIE?</span><br/>칼로리 체크</a></div>
    <div class="grid-cell"><a href="selectCart.do?m_id=${user_Info.M_ID}" class="cen"><span style="color: steelblue;">MY WISH</span><br/>찜 목록보기</a></div>
   	<div class="grid-cell"><a href="myreservation.do" class="cen"><span style="color: crimson;">MY RESERVATION</span><br/>예약 리스트</a></div>
  </div>
  
</div>	
	</c:if>
	
	<c:if test="${not empty sessionScope.user_id && sessionScope.grade==2 }">
   		<div class ="container">		
		<h1 class="jsjs"> my Store </h1>
		<input type="hidden" id="userid" value="${sessionScope.user_id }">
		<input type="hidden" id="grade" value="${sessionScope.grade }">
		<div>
		<jsp:include page="../index/calendar.jsp" />
		</div>
		<div class="grid-wrapper">
</div>
  <div class="grid2">
    <div class="grid-cell2"><a href="calendar.do" class="cen"><span style="color: crimson;">MY INFO</span><br/>매장정보</a></div>
    <div class="grid-cell2"><a href="mywrite.do" class="cen"><span style="color: cornflowerblue;">MY BOARD</span><br/>리뷰목록</a></div>
    <div class="grid-cell2"><a href="foodcalorie.do" class="cen"><span style="color: lightcoral;">CALORIE?</span><br/>칼로리 체크</a></div>
    <div class="grid-cell2"><a href="selectCart.do?m_id=${user_Info.M_ID}" class="cen"><span style="color: steelblue;">MY WISH</span><br/>찜 목록보기</a></div>
  </div>
  
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
    <%@ include file="../index/footer.jsp" %>
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