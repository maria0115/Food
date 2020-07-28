<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

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
					<td align="left">${board.b_no }</td>
				</tr>
				<tr>
					<td width="100">등록일</td>
					<td align="left">${board.b_date }</td>
				</tr>
				<tr>
					<td width="100">조회수</td>
					<td align="left">${board.viewCount }</td>
				</tr>
				<tr>
					<td width="100">참여인원</td>
					<td align="left" >${board.f_membercnt}</td>
				</tr>
				<tr>
					<td width="100">참여여부</td>
					<td align="left" id="joincnt">
					<form id="joinfrm" method="post" action="../mealBoard/mealjoin.do?f_userId=${sessionScope.user_id }">
					<input type="hidden" id="joinid" name="f_userId" value="${board.f_userId}">
					<input type="hidden" id="id" name="f_userId" value="${sessionScope.user_id }">
					<input type="hidden" id="b_no" name="b_no" value="${board.b_no }">
					<c:if test="${board.f_membercnt > board.f_cnt}">
					<input class="btn btn-dark" type="button" id="joinBtn" value="참가하기" >
					</c:if>
					<c:if test="${board.f_membercnt <= board.f_cnt}">
					<span id="end">마감되었습니다.</span>
					</c:if>
					</form>
					</td>
				</tr>
				<tr>
					<td width="100">작성자</td>
					<td align="left">${board.userId }</td>
				</tr>
				<tr>
					<td width="100">제목</td>
					<td align="left">${board.title }</td>
				</tr>
				<tr>
					<td width="100">글내용</td>
					<td align="left">
					${board.b_content }
					</td>
				</tr>
				<tr>
					<td width="100">위치</td>
					<td align="left">
					<div id="map" style="width:100%;height:350px;">
					<input type="hidden" id="f_addr1" name="f_addr1" value="${board.f_addr1 }">
					<input type="hidden" id="f_addr2" name="f_addr2" value="${board.f_addr2 }">
					<input type="hidden" id="f_title" name="title" value="${board.title }">
					</div>
					</td>
				</tr>
				
			</table>

		</div>


		<!-- 페이징 -->
		<div style="display: block; text-align: center;"></div>
		<c:if test="${sessionScope.user_id == board.userId}">
		<button class="btn btn-default" onclick="location.href='mealFriendsmodify.do?b_no=${board.b_no  }'" >글수정</button>
		<button class="btn btn-default" onclick="location.href='friendsdelete.do?b_no=${board.b_no  }'" >글삭제</button>
		</c:if >
		<button class="btn btn-default" onclick="location.href='../index/mealFriends.do'" >글목록</button>
		</div>



	<!-- 게시판 목록 보여주기 끝  -->
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>
<script src="/Food/resources/js/join.js"></script>







</body>

</html>