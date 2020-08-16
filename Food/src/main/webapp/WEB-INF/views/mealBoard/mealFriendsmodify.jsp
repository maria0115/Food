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

<!-- 부트스트랩 -->
<title>Eating with friends</title>


<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
<link rel="icon" href="/Food/resources/img/core-img/fri.jpg">
<style type="text/css">
#returnBtn{

	font-family: js4;
	font-size: 21px;
	color:black;
	font-weight: 1px;
}

#modifyfrm{

	font-family: js4;
	font-size: 25px;
	color:black;
	font-weight: 1px;

}

#modifyBtn{

	font-family: js4;
	font-size: 25px;
	color:black;
	font-weight: 1px;
}




</style>

<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>



</head>

<body>
<script src="/Food/resources/js/friendBoard.js"></script>
<script type="text/javascript">
 window.history.forward();
 function noBack(){window.history.forward();}
</script>	
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

		<form action="../mealBoard/friendmodify.do" method="get"
			enctype="multipart/form-data" id="modifyfrm">
			<table class="table table-striped" id="mealtable">


				<tr>
					<td width="100%">제목</td>
					<td align="left"><input size="80%" type="text"
						name="title" value="${board.title }"/>
					<input type="hidden" name="b_no" value="${board.b_no }">
						</td>
				</tr>
				<tr>
					<td width="100%">글쓴이</td>
					<td align="left"><input size="80%" type="text" name="userId"
						value="${board.userId }" readonly="readonly"/></td>
				</tr>

				<tr>
					<td width="100%">내용</td>
					<td align="left"><textarea rows=5 cols=80
							name="b_content">${board.b_content }</textarea></td>
				</tr>
				<tr>
					<td width="100%">약속날짜</td>
					<td align="left" style="display: flex;">
					<input type="date" style="width: 20%; " name="f_date" id="f_date" placeholder="날짜를 선택해주세요">
					<select name="f_date" id="f_date" class="form-control" style="width: 35%;font-size: 21px !important;height: 47px;">
						<option id="" disabled="disabled" selected>시간을 선택해주세요</option>
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
					<td>현재 저장된 위치</td>
					<td>
					<input size="50%" type="text" name="f_addr1" id="f_addr1" value="${board.f_addr1 }" />
					<input size="50%" type="text" name="f_addr2" id="f_addr2" value="${board.f_addr2 }" />
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
		<button class="btn btn-default" id="returnBtn" onclick="location.href='../index/mealFriends.do'" >글목록</button>
	</div>




	<!-- 게시판 목록 보여주기 끝  -->
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>
	<!-- ##### Footer Area End ##### -->
	<script src="/Food/resources/js/friendmodify.js"></script>
	<script src="/Food/resources/js/friendBoard.js"></script>
	
	




</body>

</html>