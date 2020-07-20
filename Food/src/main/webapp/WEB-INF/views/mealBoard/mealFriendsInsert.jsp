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

<!-- Favicon -->
<link rel="icon" href="../resources/img/core-img/favicon.ico">

<!-- Core Stylesheet -->
<link rel="stylesheet" href="../resources/css/style.css">

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
	
			<jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
		</section>
	
	


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
				<!-- <tr>
					<td width="70">파일추가</td>
					<td align="left">
						@@@@@@@@@@@@@@ name은 MultipartFile 프라퍼티임 <input
						type="file" name="file" maxlength="60" size="40">
					</td>
				</tr> -->
				<tr>
					<td colspan="2" align="center"><input type="submit"
						value=" 글등록 " /></td>
				</tr>

			</table>


		</form>
	</div>



	<!-- 게시판 목록 보여주기 끝  -->
	

	
	
	
	
	
	
	
	
	
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>
	<!-- ##### Footer Area End ##### -->

	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
	<script src="../resources/js/jquery/jquery-2.2.4.min.js"></script>
	<!-- Popper js -->
	<script src="../resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="../resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="../resources/js/plugins/plugins.js"></script>
	<!-- Active js -->
	<script src="../resources/js/active.js"></script>
	<!-- 지섭 -->








</body>

</html>