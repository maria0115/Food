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
<title>회원 가입</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- Favicon -->
<link rel="icon" href="img/core-img/favicon.ico">
<link rel="stylesheet" href="/Food/resources/css/singup.css">
<!-- Core Stylesheet -->
<link rel="stylesheet" href="/Food/resources/css/style.css">
<!-- <link rel="stylesheet" href="resources/css/js.css"> -->
<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

<style>
.box select {
	background-color: indianred;
	color: white;
	padding: 12px;
	width: 250px;
	border: none;
	font-size: 20px;
	box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
	-webkit-appearance: button;
	appearance: button;
	outline: none;
	border-radius: 80px/100px;
}

.box::before {
	content: "\f13a";
	font-family: FontAwesome;
	top: 0;
	right: 0;
	width: 20%;
	height: 100%;
	text-align: center;
	font-size: 28px;
	line-height: 45px;
	color: rgba(255, 255, 255, 0.5);
	background-color: rgba(255, 255, 255, 0.1);
	pointer-events: none;
}

.box:hover::before {
	color: rgba(255, 255, 255, 0.6);
	background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
	padding: 30px;
}

#preview img {
	width: 100px;
	height: 100px;
}

#preview p {
	text-overflow: ellipsis;
	overflow: hidden;
}

.preview-box {
	border: 1px solid;
	padding: 5px;
	border-radius: 2px;
	margin-bottom: 10px;
}
.shopmem{
display: flex;

}
.happytime{
     display: grid;
    font-size: xx-large;
    font-weight: bolder;
    font-family: monospace;
}
.happytime label{
color:darkred;
margin-left: 5px;
margin-right: 5px;
}
</style>
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<jsp:include page="../index/header.jsp">
	<jsp:param value='' name='folder' />
</jsp:include>
</head>

<body>
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/leaf.png" alt="">
		</div>
	</div>

	<!-- ##### Header Area Start ##### -->

	<!-- ##### Header Area End ##### -->

	<!-- ##### Breadcrumb Area Start ##### -->
	<div class="breadcrumb-area">
		<!-- Top Breadcrumb Area -->
		<div class="container">
		<h1>우리 매장 정보</h1><br/>
		<div id="storeInfo">
			<table class="table table" id="storeinfotable">
				<tr>
					<td colspan="3" ><h4 style="text-align: center;">${store.s_brand_name }</h4></td>
				</tr>
				<tr>
					<td style="width: 10%;">
						
					</td>
					<td>
						<label>카테고리</label>
						<span>${store.s_category }</span>
					</td>
					<td>
						<label>중분류</label>
						<span>${store.s_midpart }</span>
					</td>
				</tr>
				<tr>
					<td ><label>매장주소</label></td>
					<td colspan="2"><span>${store.s_address }</span></td>
				</tr>
				<tr>
					<td ><label>매장소개</label></td>
					<td colspan="2"><span>${store.s_info }</span></td>
				</tr>
				<tr>
					<td ><label>메뉴</label></td>
					<td colspan="2">
						<span>${store.p_name_1 }</span>&nbsp;&nbsp;&nbsp;<span>${store.p_price_1 }</span><p></p>
						<span>${store.p_name_2 }</span>&nbsp;&nbsp;&nbsp;<span>${store.p_price_2 }</span><p></p>
						<span>${store.p_name_3 }</span>&nbsp;&nbsp;&nbsp;<span>${store.p_price_3 }</span>
					</td>
				</tr>
			</table>
			</div>
			<button  onclick="history.go(-1);" class="btn btn-default" >돌아가기</button> 	
		</div>
		
</div>

 



	<p></p>

	<!-- Search Form -->


	<!-- ##### Hero Area Start ##### -->

	<!-- ##### Footer Area End ##### -->
	<%@ include file="../index/footer.jsp"%>
	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
 
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

	<script src="resources/js/jquery/jquery-2.2.4.min.js"></script>
	
	<!-- Popper js -->
	<script src="resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="resources/js/plugins/plugins.js"></script>
	<!-- Active js -->
	<script src="resources/js/active.js"></script>

</body>

</html>