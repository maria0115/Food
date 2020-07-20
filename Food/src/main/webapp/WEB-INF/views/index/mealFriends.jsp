<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
<title></title>

<!-- Favicon -->
<link rel="icon" href="resources/img/core-img/favicon.ico">

<!-- Core Stylesheet -->
<link rel="stylesheet" href="resources/css/style.css">

<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

<!-- <style>
.menu a {
	cursor: pointer;
}

.menu .hide {
	display: none;
}
</style> -->

	<!-- ##### Hero Area Start ##### -->
	
	




</head>

<body>

	<section class="hero-area">
	
			<!-- Single Hero Post -->
			<div class="single-hero-post bg-overlay">
				<!-- Post Image -->
			</div>
	
			<jsp:include page="header.jsp">
				<jsp:param value='' name='folder' />
			</jsp:include>
		</section>
	
	

	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="img/core-img/leaf.png" alt="">
		</div>
	</div>


	<!-- 게시판 목록 보여주기 시작  -->

	<div class="container">
		<br />
		<br />

		<h1>Happy Meal With Friends</h1>
		<br />

		<div id="noticeDiv">
			<table class="table table-bordered">
				<tr>
					<th>글번호</th>
					<th>제목</th>
					<th>글내용</th>
					<th>작성자</th>
					<th>등록일</th>
					<th>조회수</th>
					<!-- 추가 -->

				</tr>
				<!-- 리뷰 전체 List -->

			</table>

		</div>
		<br />
		<br /> <br />
		<br />


		<!-- 페이징 -->
		<div style="display: block; text-align: center;"></div>

		<br />
		
		<button onclick="location.href='mealBoard/mealFriendsInsert.do'" >
			<img src="resources/img/write.JPG">
		</button>
		
	</div>



	<!-- 게시판 목록 보여주기 끝  -->
	

	
	
	
	
	
	
	
	
	
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="footer.jsp" %>
	<!-- ##### Footer Area End ##### -->

	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
	<script src="resources/js/jquery/jquery-2.2.4.min.js"></script>
	<!-- Popper js -->
	<script src="resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="resources/js/plugins/plugins.js"></script>
	<!-- Active js -->
	<script src="resources/js/active.js"></script>
	<!-- 지섭 -->








</body>

</html>