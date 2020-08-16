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
<link rel="icon" href="/Food/resources/img/core-img/fri.jpg">
<!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
<title>Eating with friends</title>



<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
<style type="text/css">

#mealfrm{

	font-family: js4;
	font-size: 25px;
	color: black;

}

tr{

	width: 20%;
}

#insertBtn{

	font-family: js4;
	font-size: 25px;
	color: black;
}


#returnBtn{
	
	font-family: js4;
	font-size: 25px;
	color:black;
	font-weight: 1px;
	
}



</style>



<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script type="text/javascript">
 window.history.forward();
 function noBack(){window.history.forward();}
</script>

</head>

<body>

	
			<jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
			
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/fri.jpg" alt="">
		</div>
	</div>
	


	<!-- 게시판 목록 보여주기 시작  -->

	<div class="container">
		<br /> <br />

		<h1>Eating with friends</h1>
		<br />

		<form action="../mealBoard/friendsave.do" method="get"
			enctype="multipart/form-data" id="mealfrm">
			<table class="table table-striped">


				<tr>
					<td style="width: 20%;">제목</td>
					<td align="left"><input size="80%" type="text"
						name="title" /></td>
				</tr>
				<tr>
					<td >글쓴이</td>
					<td align="left"><input size="80%" type="text" name="userId"
						value="${sessionScope.user_id}" readonly="readonly" /></td>
				</tr>

				<tr>
					<td >내용</td>
					<td align="left"><textarea rows=5 cols=80
							name="b_content"></textarea></td>
				</tr>
				<tr>
					<td >약속날짜</td>
					<td align="left" style="display: flex;">
					<input type="date" style="width: 20%; " name="f_date" id="f_date" placeholder="날짜를 선택해주세요">
					<select name="f_date" id="f_date" class="form-control" style="width: 35%;font-size: 21px !important;height: 47px;">
						<option id="f_time" disabled="disabled" selected>시간을 선택해주세요</option>
							<option value="01">오전 1 시</option>
							<option value="02">오전 2 시</option>
							<option value="03">오전 3 시</option>
							<option value="04">오전 4 시</option>
							<option value="05">오전 5 시</option>
							<option value="06">오전 6 시</option>
							<option value="07">오전 7 시</option>
							<option value="08">오전 8 시</option>
							<option value="09">오전 9 시</option>
							<option value="10">오전 10 시</option>
							<option value="11">오전 11 시</option>
							<option value="12">오후 12 시</option>
							<option value="13">오후 1 시</option>
							<option value="14">오후 2 시</option>
							<option value="15">오후 3 시</option>
							<option value="16">오후 4 시</option>
							<option value="17">오후 5 시</option>
							<option value="18">오후 6 시</option>
							<option value="19">오후 7 시</option>
							<option value="20">오후 8 시</option>
							<option value="21">오후 9 시</option>
							<option value="22">오후 10 시</option>
							<option value="23">오후 11 시</option>
							<option value="00">오전 0 시</option>
						</select>
					</td>
				</tr>
				<tr>
					<td >위치</td>
					<td align="left">
					<input type="text" id="sample4_postcode" name = 'postcode' placeholder="우편번호" readonly>
					<input type="button" name='search' id='search1' value="우편번호 찾기" onclick="execDaumPostcode();"><br>
					<input type="text" id="sample4_roadAddress" name="f_addr1" placeholder="도로명주소" style="width:40%" readonly>
					<span id="guide" style="color:#999;display:none"></span>
					<input type="text" id="sample4_detailAddress" name="f_addr2" placeholder="상세주소" style="width: 40%">
						
					</td>
				</tr>
				<tr>
					<td>참여인원</td>
					<td>
						<select id="f_membercnt" name="f_membercnt" style="width: 50%">
							<option value=1 >1</option>
							<option value=2 >2</option>
							<option value=3 >3</option>
							<option value=4 >4</option>
							<option value=5 >5</option>
						</select>
					</td>
				</tr>

			</table>
		</form>
		<button class="btn btn-default" id='insertBtn' onclick="insertfriend();" >글등록</button>
		<button  onclick="history.go(-1);" class="btn btn-default" id="returnBtn" >돌아가기</button> 	
	</div>
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>
	<!-- ##### Footer Area End ##### -->
	<script src="/Food/resources/js/friendBoard.js"></script>
	


</body>

</html>