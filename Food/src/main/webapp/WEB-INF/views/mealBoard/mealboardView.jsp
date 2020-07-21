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
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script src="/Food/resources/js/friendMap.js"></script>

</head>

<body>

	
			<jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
	

	<!-- 게시판 목록 보여주기 시작  -->

	<div class="container">
		<br />
		<br />

		<h1>Happy Meal With Friends</h1>
		<br />

		<div id="noticeDiv">
			<table class="table table-bordered">
				<tr>
					<td width="100">글번호</td>
					<td align="left">${friend.f_no }</td>
				</tr>
				<tr>
					<td width="100">등록일</td>
					<td align="left">${friend.f_date }</td>
				</tr>
				<tr>
					<td width="100">조회수</td>
					<td align="left">${friend.f_viewcount }</td>
				</tr>
				<tr>
					<td width="100">참여인원</td>
					<td align="left">${friend.f_membercnt}</td>
				</tr>
				<tr>
					<td width="100">작성자</td>
					<td align="left">${friend.m_id }</td>
				</tr>
				<tr>
					<td width="100">제목</td>
					<td align="left">${friend.f_title }</td>
				</tr>
				<tr>
					<td width="100">글내용</td>
					<td align="left">
					${friend.f_content }
					</td>
				</tr>
				<tr>
					<td width="100">위치</td>
					<td align="left">
					<div id="map" style="width:100%;height:350px;">
					<input type="hidden" id="f_addr" name="f_addr" value="${friend.f_addr }">
					<input type="hidden" id="f_title" name="f_title" value="${friend.f_title }">
					</div>
					</td>
				</tr>
				
			</table>

		</div>


		<!-- 페이징 -->
		<div style="display: block; text-align: center;"></div>
		<button class="btn btn-default" onclick="location.href='mealFriendsmodify.do?f_no=${friend.f_no }'" >글수정</button>
		<button class="btn btn-default" onclick="location.href='../index/mealFriends.do'" >글목록</button>
		</div>



	<!-- 게시판 목록 보여주기 끝  -->
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>








</body>

</html>