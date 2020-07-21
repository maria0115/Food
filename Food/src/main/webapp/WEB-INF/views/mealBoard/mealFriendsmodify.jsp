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


<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script src="/Food/resources/js/friendBoard.js"></script>


</head>

<body>

	
			<jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
	


	<!-- 게시판 목록 보여주기 시작  -->

	<div class="container">
		<br /> <br />

		<h1>Happy Meal With Friends</h1>
		<br />

		<form action="insertFriends.do" method="post"
			enctype="multipart/form-data">
			<table class="table table-striped">


				<tr>
					<td width="100">제목</td>
					<td align="left"><input size="97" type="text"
						name="review_title" /></td>
				</tr>
				<tr>
					<td width="100">글쓴이</td>
					<td align="left"><input size="97" type="text" name="userId"
						value="" readonly /></td>
				</tr>

				<tr>
					<td width="100">내용</td>
					<td align="left"><textarea rows=5 cols=100
							name="review_content"></textarea></td>
				</tr>
				<tr>
					<td colspan="2" align="center"><input type="submit"
						value=" 글등록 " /></td>
				</tr>

			</table>


		</form>
	</div>


	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>
	<!-- ##### Footer Area End ##### -->







</body>

</html>