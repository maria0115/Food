<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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

<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>



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
<script src="/Food/resources/js/friendBoard.js"></script>
	
			<jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
	
	


	<!-- 게시판 목록 보여주기 시작  -->

	<div class="container">
		<br /> <br />

		<h1>Happy Meal With Friends</h1>
		<br />

		<form action="../mealBoard/friendmodify.do" method="get"
			enctype="multipart/form-data" id="modifyfrm">
			<table class="table table-striped" id="mealtable">


				<tr>
					<td width="100%">제목</td>
					<td align="left"><input size="120%" type="text"
						name="f_title" value="${friend.f_title }"/>
					<input type="hidden" name="f_no" value="${friend.f_no }">
						</td>
				</tr>
				<tr>
					<td width="100%">글쓴이</td>
					<td align="left"><input size="120%" type="text" name="m_id"
						value="${friend.m_id }" readonly="readonly"/></td>
				</tr>

				<tr>
					<td width="100%">내용</td>
					<td align="left"><textarea rows=5 cols=120
							name="f_content">${friend.f_content }</textarea></td>
				</tr>
				<tr>
					<td>현재 저장된 위치</td>
					<td>
					<input size="100%" type="text" name="f_addr" id="f_addr" value="${friend.f_addr }" />
					&nbsp;
					<label>주소 변경</label>
					<input type="checkbox" id="check">
					</td>
				</tr>
				<tfoot>
				<tr>
					<td width="100%">참여인원</td>
					<td>
						<select id="f_membercnt" name="f_membercnt" style="width: 50%">
							<option value=0 >0</option>
							<option value=1 >1</option>
							<option value=2 >2</option>
							<option value=3 >3</option>
							<option value=4 >4</option>
						</select>
					</td>
				</tr>
				</tfoot>
			</table>
		</form>
		<button class="btn btn-default" id='modifyBtn' onclick="modifyfriend();">수정하기</button>
		<button class="btn btn-default" onclick="location.href='../index/mealFriends.do'" >글목록</button>
	</div>




	<!-- 게시판 목록 보여주기 끝  -->
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>
	<!-- ##### Footer Area End ##### -->
	<script src="/Food/resources/js/friendmodify.js"></script>
	<script src="/Food/resources/js/friendBoard.js"></script>
	
	




</body>

</html>