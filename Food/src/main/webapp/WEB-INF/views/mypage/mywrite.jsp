<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
<title>MyPage</title>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>Alazea - Gardening &amp; Landscaping HTML Template</title>

    <!-- Favicon -->
	<link rel="icon" href="/Food/resources/img/core-img/fri.jpg">
	<link rel="stylesheet" href="/Food/resources/css/mypage.css">
	<!-- Core Stylesheet -->
	<link rel="stylesheet" href="/Food/resources/css/style.css">
    <link rel="stylesheet" href="/Food/resources/css/mymenu.css">
  
  			 <jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
	

	 
	 
</head>

<body>
    <!-- ##### Portfolio Area End ##### -->
	
	<c:if test="${not empty sessionScope.user_id}">

    		

	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/fri.jpg" alt="">
		</div>
	</div>


	<!-- 게시판 목록 보여주기 시작  -->

	<div class="container">
		<br />
		<br />

		<h1 style="font-family: fantasy;">MY WRITE</h1>
		<br />

		<div >
			<table class="table table-hover" style="font-family: js4; ">
				<tr style="font-size: 20px;">
					<th style="width: 10%;">글번호</th>
					<th style="width: 15%;">제목</th>
					<th style="width: 15%;">위치</th>
					<th style="width: 10%;">작성자</th>
					<th style="width: 20%;">등록일</th>
					<th style="width: 10%;">조회수</th>
				    <th style="width: 20%;">게시판 분류</th>
				
				</tr>
				
				<c:forEach items="${boardlist}" var="board">
				<!-- 프라퍼티이름 변경 -->
				<tr style="font-size: xx-large;">
					<td><a href="/Food/mealBoard/mealboardView.do?b_no=${board.b_no }">${board.b_no}</a></td>
					<!-- 글 상세보기를 위해서 a태그로 경로 연결해주기 -->
					<td><a href="/Food/mealBoard/mealboardView.do?b_no=${board.b_no }">${board.title}</a></td>
					<td><a href="/Food/mealBoard/mealboardView.do?b_no=${board.b_no }">${board.f_addr1}&nbsp;${board.f_addr2}</a></td>
					<td>${board.userId}</td>
					<td>${board.b_date}</td>
					<td style="text-align: center;">${board.viewCount}</td>
					
					<c:if test="${board.boardType==1}">
					<td style="text-align: center;">신고게시판</td></c:if>
					<c:if test="${board.boardType==2}">
					<td style="text-align: center;">리뷰</td></c:if>
					<c:if test="${board.boardType==3}">
					<td style="text-align: center;">밥친구</td></c:if>
					<c:if test="${board.boardType==4}">
					<td style="text-align: center;">Q&A</td></c:if>
					<c:if test="${board.boardType==5}">
					<td style="text-align: center;">Q&A댓글</td></c:if>
				
					
				</tr>
			</c:forEach>

			</table>
			<button  onclick="history.go(-1);" class="btn btn-default" style="height: 50px;
    font-size:xx-large;">돌아가기</button>
		</div>
		

</div>    
	</c:if>


	<!-- 게시판 목록 보여주기 끝  -->
	
			
				
				

	
	<c:if test="${empty sessionScope.user_id}">
	<div class="container">
	<div id="nomember">현재 네이버 아이디로 이용중 입니다.
	네이버 아이디로 로그인시 오늘뭐먹지 MY Page 서비스를 이용하실수 없습니다.
	회원가입후 MY Page 서비스 이용가능 합니다.감사합니다.<br><button  onclick="history.go(-1);" class="btn btn-default" style="height: 50px;
    font-size:large;">돌아가기</button>
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