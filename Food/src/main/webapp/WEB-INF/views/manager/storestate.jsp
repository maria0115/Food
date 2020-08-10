<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<title>Store Manager</title>

<link rel="shortcut icon" type="image/x-icon"
	href="/Food/resources/img/favicon.ico">
<!-- Google Fonts
		============================================ -->
<link href="https://fonts.googleapis.com/css?family=Play:400,700"
	rel="stylesheet">
<!-- Bootstrap CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/bootstrap2.min.css">
<!-- Bootstrap CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/font-awesome1.min.css">
<!-- owl.carousel CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/owl.carousel.css">
<link rel="stylesheet" href="/Food/resources/css/owl.theme.css">
<link rel="stylesheet" href="/Food/resources/css/owl.transitions.css">
<!-- animate CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/animate1.css">
<!-- normalize CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/normalize.css">
<!-- meanmenu icon CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/meanmenu.min.css">
<!-- main CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/main.css">
<!-- morrisjs CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/morrisjs/morris.css">
<!-- mCustomScrollbar CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/scrollbar/jquery.mCustomScrollbar.min.css">
<!-- metisMenu CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/metisMenu/metisMenu.min.css">
<link rel="stylesheet"
	href="/Food/resources/css/metisMenu/metisMenu-vertical.css">
<!-- calendar CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/calendar/fullcalendar.min.css">
<link rel="stylesheet"
	href="/Food/resources/css/calendar/fullcalendar.print.min.css">
<!-- style CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/style2.css">
<!-- responsive CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/responsive.css">
<!-- modernizr JS
		============================================ -->
<!-- Bootstrap cdn -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext">

<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="/Food/resources/js/vendor/modernizr-2.8.3.min.js"></script>

</head>
<body style="background: #f5f5f5;">
<jsp:include page="sideBar.jsp">
		<jsp:param value='' name='folder' />
	</jsp:include>
	<div class="all-content-wrapper">
		<jsp:include page="wrapper.jsp">
			<jsp:param value='' name='' />
		</jsp:include>	
        
        
		
		<div class="container-fluid" style="margin-top: 3%;">
		<h3>매장 관리</h3>
		<div>
			<c:if test="${count > 0 }">
			<a class="btn btn-danger" href="storestate.do">매장인증대기</a>
			</c:if>
			<c:if test="${count == 0 }">
			<a class="btn btn-default" href="#">매장인증대기</a>
			</c:if>
		</div>	
		<div class="wrapper">
			<table class="table table-striped">
				<tr>
					<td>매장명</td>
					<td>위치</td>
				</tr>
				<c:forEach items="${list }" var="store">
					<td><a href="../store/storeDetails.do?s_brand_name=${store.s_brand_name}">${store.s_brand_name}</a></td>
					<td>${store.s_address}</td>
				</c:forEach>
			</table>
		</div>
	</div>
        
        
        
        
	</div>
		<div style="display: block; text-align: center;">		
		<c:if test="${paging.startPage != 1 }">
			<a href="../manager/storestate.do?nowPage=${paging.startPage - 1 }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"">&lt;</a>
		</c:if>
		<c:forEach begin="${paging.startPage }" end="${paging.endPage }" var="p">
			<c:choose>
				<c:when test="${p == paging.nowPage }">
					<b>${p }</b>
				</c:when>
				<c:when test="${p != paging.nowPage }">
					<a href="../manager/storestate.do?nowPage=${p }&cntPerPage=${paging.cntPerPage}">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.endPage != paging.lastPage}">
			<a href="../manager/storestate.do?nowPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"">&gt;</a>
		</c:if>
        </div>
        <div class="search-form" style="margin-top: 3%;">
        <form action="storestate.do">
		<input type="hidden" id="nowPage" name="nowPage" value="${paging.nowPage}"> 
		<input type="hidden" id="cntPerPage" name="cntPerPage" value="${paging.cntPerPage }"> 
		<input type="hidden" id="searchClick" name="searchClick" value="Y">
		<table style=" margin-left: 40%;">
			<tr>
				<td>
					<select class="form-control" id="s_category" name="s_category">
						<option value="">전체</option>
						<option value="한식">한식</option>
						<option value="양식">양식</option>
						<option value="일식">일식</option>
						<option value="중식">중식</option>
						<option value="분식">분식</option>
						<option value="동남아">동남아</option>
					</select>
				</td>
				<td>
				<input class="form-control" type="text" name="keyword" id="keyword">
				</td>
				<td>
				<button class="btn btn-default" id="searchBtn" >검색</button>
				</td>
			</tr>
		</table>
		</form>
		</div>
		



	
	
		
	
	
	
	<div class="footer-copyright-area">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
					<div class="footer-copy-right">
						<p>
							Copyright &copy; 2020 <a 
								href="https://colorlib.com/wp/templates/">Colorlib</a> All
							rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- jquery
		============================================ -->
	<script src="/Food/resources/js/vendor/jquery-1.11.3.min.js"></script>
	<!-- bootstrap JS
		============================================ -->
	<script src="/Food/resources/js/bootstrap.min.js"></script>
	<!-- wow JS
		============================================ -->
	<script src="/Food/resources/js/wow.min.js"></script>
	<!-- price-slider JS
		============================================ -->
	<script src="/Food/resources/js/jquery-price-slider.js"></script>
	<!-- meanmenu JS
		============================================ -->
	<script src="/Food/resources/js/jquery.meanmenu.js"></script>
	<!-- owl.carousel JS
		============================================ -->
	<script src="/Food/resources/js/owl.carousel.min.js"></script>
	<!-- sticky JS
		============================================ -->
	<script src="/Food/resources/js/jquery.sticky.js"></script>
	<!-- scrollUp JS
		============================================ -->
	<script src="/Food/resources/js/jquery.scrollUp.min.js"></script>
	<!-- mCustomScrollbar JS
		============================================ -->
	<script
		src="/Food/resources/js/scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="/Food/resources/js/scrollbar/mCustomScrollbar-active.js"></script>
	<!-- metisMenu JS
		============================================ -->
	<script src="/Food/resources/js/metisMenu/metisMenu.min.js"></script>
	<script src="/Food/resources/js/metisMenu/metisMenu-active.js"></script>
	<!-- morrisjs JS
		============================================ -->
	<script src="/Food/resources/js/sparkline/jquery.sparkline.min.js"></script>
	<script src="/Food/resources/js/sparkline/jquery.charts-sparkline.js"></script>
	<!-- calendar JS
		============================================ -->
	<script src="/Food/resources/js/calendar/moment.min.js"></script>
	<script src="/Food/resources/js/calendar/fullcalendar.min.js"></script>
	<script src="/Food/resources/js/calendar/fullcalendar-active.js"></script>
	<!-- plugins JS
		============================================ -->
	<script src="/Food/resources/js/plugins.js"></script>
	<!-- main JS
		============================================ -->
	<script src="/Food/resources/js/main.js"></script>
	
	
	
	
</body>
</html>