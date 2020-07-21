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

	
			<jsp:include page="header.jsp">
				<jsp:param value='' name='folder' />
			</jsp:include>
		
	
	

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

		<div >
			<table class="table table-bordered">
				<tr>
					<th>글번호</th>
					<th>제목</th>
					<th>글내용</th>
					<th>작성자</th>
					<th>등록일</th>
					<th>조회수</th>
					<th>참여인원</th>
				</tr>
				<c:forEach items="${friendlist}" var="friend">
				<!-- 프라퍼티이름 변경 -->
				<tr>
					<td>${friend.f_no}</td>
					<!-- 글 상세보기를 위해서 a태그로 경로 연결해주기 -->
					<td><a href="../mealBoard/mealboardView.do?f_no=${friend.f_no }">${friend.f_title}</a></td>
					<td><a href="../mealBoard/mealboardView.do?f_no=${friend.f_no }">${friend.f_content}</a></td>
					<td>${friend.m_id}</td>
					<td>${friend.f_date}</td>
					<td>${friend.f_viewcount}</td>
					<td>${friend.f_membercnt}</td>
					<!-- 추가 -->	
				</tr>
			</c:forEach>

			</table>

		</div>
		
		<!-- 페이징 -->
		<div style="display: block; text-align: center;">		
		<c:if test="${paging.startPage != 1 }">
			<a href="../index/mealFriends.do?nowPage=${paging.startPage - 1 }&cntPerPage=${paging.cntPerPage}">&lt;</a>
		</c:if>
		<c:forEach begin="${paging.startPage }" end="${paging.endPage }" var="p">
			<c:choose>
				<c:when test="${p == paging.nowPage }">
					<b>${p }</b>
				</c:when>
				<c:when test="${p != paging.nowPage }">
					<a href="../index/mealFriends.do?nowPage=${p }&cntPerPage=${paging.cntPerPage}">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.endPage != paging.lastPage}">
			<a href="../index/mealFriends?nowPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
		</c:if>
        </div>

		<div style="display: block; text-align: center;"></div>
		
		<button class="btn btn-default" onclick="location.href='../mealBoard/mealBoardInsert.do'" >글등록</button>
		
	</div>



	<!-- 게시판 목록 보여주기 끝  -->
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="footer.jsp" %>








</body>

</html>