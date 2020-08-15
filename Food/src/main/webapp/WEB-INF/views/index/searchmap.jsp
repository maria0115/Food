<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>검색페이지</title>
<style type="text/css">
table{

	font-family: js;
	font-size: 20px !important;
	
}


</style>

</head>

	<jsp:include page="header.jsp">
		<jsp:param value='../' name='folder' />
	</jsp:include>
	
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script src="/Food/resources/js/search.js"></script>
<body>

	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/fri.jpg" alt="">
		</div>
	</div>

	<div class="container">
		<br/><br/>
		<h1 style="font-family: sans-serif;"><span style="font-weight: bolder; ">${word}</span> 으로 검색하신 결과입니다.</h1>
	</div>
	<div class="container">
	
		<table class="table" style="border-top: none;">
			<tr>
				<td>
				<form action="/Food/index/searchmap.do" style="display: flex;">
				<input style="width: 25%; height: 44px !important;font-size: 20px !important; " class="form-control" type="text" id="keyword" name="keyword" placeholder="검색하실 단어를 입력해주세요 ">
				<input type="hidden" id="word" value="${word}">
				<button class="btn btn-info" style="font-size: 20px !important;">검색</button>
				<span style="margin-top: 1%;">다른 맛집 검색해보기</span>
				</form>
				</td>
			</tr>
			
			<tr>
				<td>
				<div id="map" style="width:100%;height:500px;"></div>
				</td>
			</tr>
		</table>
	</div>
	<br/><br/>



		<!-- ##### Footer Area Start ##### -->
	    <%@ include file="footer.jsp" %>
	    <!-- ##### Footer Area End ##### -->
</body>
</html>