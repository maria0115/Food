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
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script src="/Food/resources/js/friendBoard.js"></script>
<script src="/Food/resources/js/friendMap.js"></script>

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

		<form action="../friendBoard/friendsave.do" method="get"
			enctype="multipart/form-data" id="frm">
			<table class="table table-striped">


				<tr>
					<td width="100%">제목</td>
					<td align="left"><input size="120%" type="text"
						name="f_title" /></td>
				</tr>
				<tr>
					<td width="100%">글쓴이</td>
					<td align="left"><input size="120%" type="text" name="m_id"
						value="" /></td>
				</tr>

				<tr>
					<td width="100%">내용</td>
					<td align="left"><textarea rows=5 cols=120
							name="f_content"></textarea></td>
				</tr>
				<tr>
					<td width="100%">식사장소</td>
					<td align="left">
					<input type="text" id="sample4_postcode" name = 'postcode' placeholder="우편번호" readonly>
					<input type="button" name='search' id='search1' value="우편번호 찾기" onclick="execDaumPostcode();"><br>
					<input type="text" id="sample4_roadAddress" name="addr1" placeholder="도로명주소" style="width:40%" readonly>
					<span id="guide" style="color:#999;display:none"></span>
					<input type="text" id="sample4_detailAddress" name="addr2" placeholder="상세주소" style="width: 40%">
						
					</td>
				</tr>
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
				<tr>
					<td colspan="2" align="center" >
					<button class="btn btn-default" id='insertBtn' onclick="insertfriend();">글등록</button>
					</td>
				</tr>

			</table>
		</form>
	</div>




	<!-- 게시판 목록 보여주기 끝  -->
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>
	<!-- ##### Footer Area End ##### -->
	
	
	
	




</body>

</html>