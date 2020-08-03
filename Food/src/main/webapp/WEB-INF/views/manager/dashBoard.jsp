<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dash Board</title>
<!-- favicon
		============================================ -->
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
<!-- Dashboard Core -->
<link href="/Food/resources/css/dashboard.css" rel="stylesheet" />
<!-- <script src="/Food/resources/js/dashboard/dashboard.js"></script> -->
<!-- c3.js Charts Plugin -->
<link href="/Food/resources/css/dashboard/charts-c3.css" rel="stylesheet" />
<!-- <script src="/Food/resources/js/dashboard/charts-c3.js"></script> -->

</head>
<body>
	<jsp:include page="sideBar.jsp">
		<jsp:param value='' name='folder' />
	</jsp:include>

	<!-- Start Welcome area -->
	<div class="all-content-wrapper">
		<jsp:include page="wrapper.jsp">
			<jsp:param value='' name='' />
		</jsp:include>
		<div class="container">
			<div class="page-header">
				<h1 class="page-title">Dashboard</h1>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
						<a href="/Food/manager/member-list.do" style="text-decoration: none !important; color: #495057;">
						<c:if test="${newMember lt 0}">
						<div class="text-right text-red">
							${newMember}%<i class="icon-down"></i>
						</div>
						</c:if> 
						<c:if test="${newMember gt 0}">
						<div class="text-right text-green">
							${newMember}%<i class="icon-up"></i>
						</div>
						</c:if> 

						<div class="h1 m-0">${todayHire }</div>
						<div class="text-muted mb-5">신규회원</div>
						</a>
					</div>
				</div>
			</div>
			
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
					<a href="/Food/manager/member-list.do" style="text-decoration: none !important; color: #495057;">
						<c:if test="${newReserv lt 0}">
						<div class="text-right text-red">
							${newReserv}%<i class="icon-down"></i>
						</div>
						</c:if> 
						<c:if test="${newReserv gt 0}">
						<div class="text-right text-green">
							${newReserv}%<i class="icon-up"></i>
						</div>
						</c:if> 
						<div class="text-right">
						<c:if test="${newReserv eq 0}">
							-
						</c:if>
						</div>
						<div class="h1 m-0">${todayReserv}</div>
						<div class="text-muted mb-5">신규예약</div>
						</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
					<a href="/Food/manager/member-list.do" style="text-decoration: none !important; color: #495057;">
						<div class="text-right text-green">
							9% <i class="icon-up"></i>
						</div>
						<div class="h1 m-0">7</div>
						<div class="text-muted mb-5">페이지 뷰</div>
						</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
					<a href="/Food/manager/BoardList.do" style="text-decoration: none !important; color: #495057;">
						<c:if test="${newBoard lt 0}">
						<div class="text-right text-red">
							${newBoard}%<i class="icon-down"></i>
						</div>
						</c:if> 
						<c:if test="${newBoard gt 0}">
						<div class="text-right text-green">
							${newBoard}%<i class="icon-up"></i>
						</div>
						</c:if> 
						<div class="text-right">
						<c:if test="${newBoard eq 0}">
							-
						</c:if>
						</div>
						<div class="h1 m-0">${todayBoard}</div>
						<div class="text-muted mb-5">신규 게시글</div>
						</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
					<a href="/Food/manager/declarationBoard.do" style="text-decoration: none !important; color: #495057;">
						<c:if test="${newBlack lt 0}">
						<div class="text-right text-red">
							${newBlack}%<i class="icon-down"></i>
						</div>
						</c:if> 
						<c:if test="${newBlack gt 0}">
						<div class="text-right text-green">
							${newBlack}%<i class="icon-up"></i>
						</div>
						</c:if> 
						<div class="text-right">
						<c:if test="${newBlack eq 0}">
							-
						</c:if>
						</div>
						<div class="h1 m-0">${todayBlack}</div>
						<div class="text-muted mb-5">신규 신고글</div>
						</a>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
					<a href="/Food/manager/member-list.do" style="text-decoration: none !important; color: #495057;">
						<div class="text-right" style="height:22px;">
						</div>
						<div class="h1 m-0">${thisMonth }</div>
						<div class="text-muted mb-5">매장수</div>
					</a>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card">

					
					<div class="product-status mg-tb-15" style="height:30rem;">
						<div class="container-fluid">
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div class="status-wrap">

										<!-- Tab을 구성할 영역 설정-->
										<div style="margin: 10px;">
											<!-- tab 영역이다. -->
											<ul class="nav nav-tabs">
												<!-- data-load를 넣어서 이미 로드를 했는지 않했는지의 판단 값을 넣는다. -->
												<!-- true면 이미 content영역에 load가 끝나서 더이상 load가 필요없다는 뜻이다. -->
												<li class="active"><a href="#home1" data-toggle="tab"
													data-load="true">일간 예약</a></li>
												<!-- false라면 data-url영역의 url주소로 데이터를 가져와서 tab-content에 표시한다. -->
												<li><a href="#homepage" data-toggle="tab"
													data-load="false" data-url="https://nowonbun.tistory.com">페이지
														뷰</a></li>
											</ul>
											<!-- tab-content 영역이다. -->
											<div class="tab-content">
												<div class="tab-pane fade in active" id="home">Home 메뉴</div>
												<div class="tab-pane fade" id="homepage"></div>
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
               
			</div>
			<div class="col-md-6">
				<div class="alert alert-primary">
					 차트를 더 보고 싶다면?<a href="chart.do" class="alert-link">&nbsp;&nbsp;차트</a>를 누르세요
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div class="card">
							<div class="card-header">
								<h3 class="card-title">Chart title</h3>
							</div>
							<div class="card-body">
								<div id="chart-donut" style="height: 12rem;"></div>
							</div>
						</div>
						
					</div>
					<div class="col-sm-6">
						<div class="card">
							<div class="card-header">
								<h3 class="card-title">Chart title</h3>
							</div>
							<div class="card-body">
								<div id="chart-pie" style="height: 12rem;"></div>
							</div>
						</div>
						
					</div>
					<div class="col-sm-6">
						<div class="card">
							<div class="card-body text-center">
								<div class="h5">새 리뷰</div>
								<div class="display-4 font-weight-bold mb-4">${todayReview }</div>
								
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card">
							<div class="card-body text-center">
								<div class="h5">총 회원수</div>
								<div class="display-4 font-weight-bold mb-4">${totalMember }</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>




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